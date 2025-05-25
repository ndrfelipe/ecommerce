import React from "react";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartSummary: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
        <p className="text-muted-foreground mb-6">Add some products to your cart to get started!</p>
        <Link to="/products">
          <Button>Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto py-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex py-4">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div className="flex justify-between text-base font-medium">
                <h3>{item.product.name}</h3>
                <p className="ml-4">{formatPrice(item.product.price * item.quantity)}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                {item.product.category}
              </p>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-none"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-none"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 py-6 px-2">
        <div className="flex justify-between text-base font-medium mb-6">
          <p>Subtotal</p>
          <p>{formatPrice(subtotal)}</p>
        </div>
        
        <div className="flex flex-col gap-2">
          <Link to="/checkout">
            <Button className="w-full">Checkout</Button>
          </Link>
          <Button
            variant="outline"
            onClick={clearCart}
            className="w-full"
          >
            Clear cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;