import { NavLink } from "react-router-dom";
import { getFeaturedProducts } from "../data/products";

const FeaturedProducts = () => {
    const featuredProducts = getFeaturedProducts();
    return(
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Featured Products</h2>
                    <NavLink to="/products" className="hover:border-b-1 border-gray-700">
                        <span>View All Products</span>
                    </NavLink>
                </div>
                
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div> */}
        </div>
</section>
    )
}

export default FeaturedProducts;