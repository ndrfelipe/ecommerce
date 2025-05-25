import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import { Footer } from "../components/footer";
const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero /> 
                <FeaturedProducts />
            </main>
            <Footer/>
        </>
    )
}

export default Home;