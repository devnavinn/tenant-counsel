import img from '../../assets/tenant-right/img3.png'
import icon from '../../assets/tenant-right/icon3.png'
import pattern from '../../assets/pattern.png'
import { motion } from 'framer-motion'
const DisabilitProtection = () => {
    return (
        <motion.div className="max-w-6xl min-h-screen mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 overflow-hidden"
            initial={{ opacity: 0.0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            style={{
                backgroundImage: `url(${pattern})`,
            }}
        >
            <div className="w-full lg:w-3/5 flex flex-col justify-center ">
                <div className='w-14 h-14'>
                    <img className='w-full h-full' src={icon} alt={"disability protection"} />
                </div>
                <h1 className='text-4xl md:text-5xl font-medium mt-5'>Disability <br /> Protections</h1>
                <p className='leading-snug text-gray-700 py-5'>
                    New York renters with disabilities are legally protected from housing discrimination. If you have faced discrimination in housing or employment, you can reach out to the New York City Commission on Human Rights. Call 311 and request {"human rights."}
                </p>
                <p className='leading-snug text-gray-700'>
                    Additionally, permitting service and emotional support animals is considered a reasonable accommodation for a disability. Denying someone from buying or renting because of their service or emotional support animal is illegal in NYC.
                </p>
            </div>
            <div className="order-first w-full lg:order-last flex-1 flex justify-center items-center h-[35rem]">
                <img src={img} className='w-full h-full object-cover rounded-lg overflow-hidden' />
            </div>
        </motion.div>
    )
}

export default DisabilitProtection