import { motion } from "framer-motion"
import ContactUsButton from "./ContactUsButton"
import helpImg from './../assets/bg-contact.png'
const Help = () => {
    return (
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            style={{
                backgroundImage: `url(${helpImg})`,
                backgroundSize: '10rem',
                opacity: '0.1'
            }}
            className="max-w-6xl w-full bg-repeat bg-center mx-auto h-96 rounded-lg relative  flex flex-col md:flex-row gap-5 justify-center items-center bg-[#123073] p-5"
        >
            <div className="flex flex-col items-center justify-center ">
                <h1 className="text-4xl text-[#E63946] font-semibold text-center">Help Us Help YOU!</h1>
                <p className="text-2xl text-center text-[#FFFFFF] opacity-75 font-semibold my-5 md:my-10">Contact us now to secure the legal defense you deserve.</p>
                <ContactUsButton
                    buttonName={'Contact Us'}
                    link={'/contact-us'}
                />
            </div>


        </motion.div>
    )
}

export default Help