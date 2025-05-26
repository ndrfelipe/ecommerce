import { NavLink } from "react-router-dom";

const Hero = () => {
    return(
        <section className="py-12 lg:py-15 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Compre com inteligência, <span className="text-gray-900">viva com mais</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                    Só o melhor para você: produtos incríveis, preços que impressionam. Tudo escolhido a dedo.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <NavLink to="/products" >
                        <span className="bg-gray-950 py-4 px-6 rounded-full text-white text-sm font-bold">
                            Compre agora!
                        </span>
                    </NavLink>
                    <NavLink to="/products">
                        <span className="bg-white py-4 px-6 text-sm font-bold rounded-full border-1 border-gray-300">
                        Conheça Nossas Coleções
                        </span>
                    </NavLink>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img
                    src="/folder.png"
                    alt="Featured products"
                    className="rounded-full shadow-xl"
                    />
                </div>
                </div>
            </div>
    </section>
    )
}

export default Hero;