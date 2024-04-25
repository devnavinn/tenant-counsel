import { useEffect } from "react"
import Hero from "./Hero"
import Form from "./Form"
import ContactInfo from "./ContactInfo"
import { Helmet } from "react-helmet";
const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us - Tenant Counsel Network</title>
                <meta name="description" content="Contact us today to secure the legal defense you deserve. Tenant Counsel Network is here to stand with you every step of the way." />
            </Helmet>

            <Hero />
            <div className="px-5">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
                    <Form />
                    <ContactInfo />
                </div>
            </div>
        </>
    )
}

export default ContactUs