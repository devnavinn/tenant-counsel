import { motion } from "framer-motion"
import ContactUsButton from "./ContactUsButton"
import helpImg from './../assets/help.png'
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

            className="max-w-6xl mx-auto h-full rounded-lg relative  flex flex-col md:flex-row gap-5 justify-between items-center bg-[#123073] p-10"
        >
            <div
                className="absolute inset-0 z-10 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `url(${helpImg})`,
                    opacity: '0.1'
                }}
            />
            <div>
                <h1 className="text-5xl text-[#FFFFFF] font-semibold">Help Us Help YOU!</h1>
                <h2 className="text-3xl text-[#FFFFFF] font-semibold mt-5">Contact us now to secure the legal defense you deserve.</h2>
            </div>
            <ContactUsButton />

        </motion.div>
    )
}

export default Help