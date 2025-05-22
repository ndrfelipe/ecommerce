import {
  UserCircle,
  Heart,
  ShoppingCartSimple,
  RocketLaunch
} from "phosphor-react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const totalItems = 0
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
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <NavLink to="/" className="flex items-center gap-1 text-gray-600 hover:text-primary">
            <UserCircle size={24} />
            <p className="text-sm hidden sm:block">Entre ou cadastre-se</p>
          </NavLink>
          <NavLink to="/" className="text-gray-600 hover:text-primary">
            <Heart size={24} />
          </NavLink>

          <div className="cursor-pointer p-3 m-1 bg-white shadow-lg rounded-lg hover:bg-blue-100">
            <div className="relative">
                <NavLink to="/" className="text-gray-600 hover:text-primary">
                <ShoppingCartSimple size={24} />
                </NavLink>

                {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-xs font-semibold rounded-full h-4 w-4 -m-1 flex items-center justify-center">
                    {totalItems}
                </span>
                )}
            </div>
        </div>

          
        </div>
      </div>
    </header>
  );
}

export default Navbar;