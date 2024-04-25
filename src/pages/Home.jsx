import Hero from "../components/Hero"
import WhyWeAre from "../components/WhyWeAre"
import Demo from "../components/Demo"
import Support from "../components/Support"
import Help from "../components/Help"
import { Helmet } from "react-helmet"
const Home = () => {
    return (
        <section
            className="overflow-hidden"
        >
            <Helmet>
                <title>Tenant Right </title>
                <meta
                    name="description"
                    content="Tenant Right is a platform that helps tenants to know their rights and responsibilities. We provide information about the rights and responsibilities of tenants in the United States."
                />
            </Helmet>

            <Hero />
            <div className="px-5 flex flex-col gap-10">
                <WhyWeAre />
                <Demo />
                <Support />
                <Help />
            </div>
        </section>
    )
}

export default Home