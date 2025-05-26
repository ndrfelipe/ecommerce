import React, { createContext, useState, useContext, useEffect } from "react";
import type { Product } from "../types/product";
import { useToast } from "../hooks/use-toast";

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity?:number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity:number) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const { toast } = useToast();

    // Calculate derived values
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);

    // Load cart from localStorage on initial render
     useEffect(() => {
        try{
            const savedCart = localStorage.getItem("cart");
            if(savedCart) {
                setItems(JSON.parse(savedCart));
            }
        }catch(error){
                console.error("Failed to load cart from localStorage: ", error);
        }
     }, []);

    //  Save cart to localStorage whenever it changes
    useEffect(() => {
        try{
            localStorage.setItem("cart", JSON.stringify(items));
        }catch(error){
            console.error("Failed to save cart to localStorage: ", error);
        }
    }, [items])

    const addToCart = (product: Product, quantity: number = 1) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.product.id === product.id);

            if(existingItem){
                // Update quantity of existing item
                return prevItems.map(item =>
                    item.product.id === product.id
                    ? {...item, quantity: item.quantity + quantity}
                    : item
                );
            }else{
                // add new item
                return [...prevItems, {product, quantity}];
            }
        });
        toast({
            title: "Adicionado ao carrinho",
            description: `${quantity} x ${product.name} adicionado no carrinho`,
        });
    };

    const removeFromCart = (productId: string) => {
        setItems(prevItems => prevItems.filter(item => item.product.id !== productId));

        toast({
            title: "Removido do carrinho",
            description: "Item removido do carrinho",
        });
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 1){
            removeFromCart(productId);
            return;
        }

        setItems(prevItems =>
            prevItems.map(item =>
                item.product.id === productId
                ? {...item, quantity}
                : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
        toast({
            title: "Carrinho limpado.",
            description: "Todos os items foram removidos do seu carrinho.",
        });
    };

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            subtotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if(!context){
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};