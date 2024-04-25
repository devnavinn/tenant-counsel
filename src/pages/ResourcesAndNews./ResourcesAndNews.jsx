import Hero from "./Hero"
import News2 from "./News2"
import News3 from "./News3"
import News4 from "./News4"
import News5 from "./News5"
import Help from "../../components/Help"
import SportLight from "./SportLight"
import { useEffect } from "react"
const ResourcesAndNews = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        window.title = "Resources and News - Tenant Counsel Network"
        window.description = "Stay up-to-date with the latest news and resources from Tenant Counsel Network. Learn more about your rights as a tenant and how we can help you secure the legal defense you deserve."
    }, [])
    return (
        <>
            <Hero />
            <div className="px-5 flex flex-col space-y-10">
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