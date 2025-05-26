import { ShoppingCart } from "lucide-react";
import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const { addToCart } = useCart();
    
    return (
    <div className="group rounded-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in">
      <NavLink to={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </NavLink>
      
      <div className="p-4">
        <NavLink to={`/products/${product.id}`} className="block">
          <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.name}</h3>
        </NavLink>
        <p className="text-muted-foreground text-sm mb-3 capitalize">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold">{formatPrice(product.price)}</span>
          <Button
            size="sm"
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 1);
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;