import React, { createContext, useState, useContext, useEffect } from "react";
import { Product } from "../types/product";

export interface CartItem {
    product: Product;
    quantify: number;
}

export interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantify?:number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantify: (productId: string, quantify:number) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const { toast } useToast();
}