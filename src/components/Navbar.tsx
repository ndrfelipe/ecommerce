import {
  RocketLaunch
} from "phosphor-react";

import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import CartSummary from "./CartSummary";

const Navbar = () => {
    const { totalItems } = useCart();
  return (
    <header className="sticky top-0 z-50  bg-white border-b border-gray-200 shadow-md w-full">
      <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
        {/* LOGO */}
        <div className="flex-shrink-0 flex gap-1 items-center">
            <NavLink to="/" className="text-2xl font-bold flex">
                <RocketLaunch size={32} weight="bold" /> <span>RocketShop</span>
            </NavLink>
          
        </div>

        <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to="/products" className="text-gray-600 hover:text-gray-900">
            Products
          </NavLink>
        </nav>

        {/* AÇÕES */}

          <div className="flex items-center space-x-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription>
                      Review your items before checkout
                    </SheetDescription>
                  </SheetHeader>
                  <CartSummary />
                </SheetContent>
              </Sheet>
          </div>
        </div>
    </header>
  );
}

export default Navbar;