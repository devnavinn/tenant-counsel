import Hero from "./Hero"
import Form from "./Form"
import ContactInfo from "./ContactInfo"
const ContactUs = () => {
    return (
        <>
            <Hero />
            <div className="px-5">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-2 mt-10 gap-5">
                    <Form />
                    <ContactInfo />
                </div>
            </div>
        </>
    )
}

export default ContactUs