import Hero from "../components/Hero"
import WhyWeAre from "../components/WhyWeAre"
import Demo from "../components/Demo"
import Support from "../components/Support"
import Help from "../components/Help"
const Home = () => {
    return (
        <section
            className="overflow-hidden"
        >
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