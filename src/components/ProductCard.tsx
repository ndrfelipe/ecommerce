import { ShoppingCart } from "phosphor-react";
import type { Product } from "../types/product";

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const { addToCart } = useCart();


}