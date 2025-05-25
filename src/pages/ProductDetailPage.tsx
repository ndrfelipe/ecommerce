
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";
import { Button } from "../components/ui/button";
import { formatPrice, capitalizeFirstLetter } from "../utils/format";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import { Badge } from "../components/ui/badge";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
      </>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate("/products")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <Badge className="mb-4 capitalize">{capitalizeFirstLetter(product.category)}</Badge>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold mb-6">{formatPrice(product.price)}</p>
            
            <div className="prose max-w-none mb-8">
              <p>{product.description}</p>
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center border rounded-md w-fit">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-none"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-none"
                  onClick={increaseQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button 
                size="lg" 
                onClick={handleAddToCart}
                className="flex-1"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;