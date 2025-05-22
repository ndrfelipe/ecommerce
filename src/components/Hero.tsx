import { NavLink } from "react-router-dom";

const Hero = () => {
    return(
        <section className="py-12 lg:py-15 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Shop Smarter, <span className="text-primary">Live Better</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                    Discover amazing products at unbeatable prices. We've curated the best selection just for you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <NavLink to="/products" >
                        <span className="bg-gray-950 py-4 px-6 rounded-full text-white text-sm font-bold">
                            Shop Now
                        </span>
                    </NavLink>
                    <NavLink to="/products">
                        <span className="bg-white py-4 px-6 text-sm font-bold rounded-full border-1 border-gray-300">
                        Browse Collections
                        </span>
                    </NavLink>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                    alt="Featured products"
                    className="rounded-lg shadow-xl"
                    />
                </div>
                </div>
            </div>
    </section>
    )
}

export default Hero;