import Hero from "./Hero"
import News2 from "./News2"
import News3 from "./News3"
import News4 from "./News4"
import News5 from "./News5"
import Help from "../../components/Help"
import SportLight from "./SportLight"

const ResourcesAndNews = () => {
    return (
        <>
            <Hero />
            <div className="px-5">
                <SportLight />
                <News2 />
                <News3 />
                <News4 />
                <News5 />
                <Help />
            </div>
        </>
    )
}

export default ResourcesAndNews