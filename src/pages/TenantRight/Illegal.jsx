import img1 from '../../assets/tenant-right/img1.png'
import icon1 from '../../assets/tenant-right/icon1.png'
import pattern from '../../assets/pattern.png'
import { motion } from 'framer-motion'
const Illegal = () => {
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
                    <img className='w-full h-full' src={icon1} alt={"Illegal lockouts and Eviction"} />
                </div>
                <h1 className='text-4xl md:text-5xl font-medium mt-5'>Illegal lockouts and <br /> Eviction</h1>
                <p className='leading-snug text-gray-700 py-5'>
                    No matter your immigration status, if you have a lease agreement or have lived in your apartment for over 30 days, your landlord is prohibited from forcing or locking you out, cutting off your utilities, or pressuring you to leave as a punitive measure.
                </p>
                <p className='leading-snug text-gray-700'>
                    Unless you receive an Eviction Order signed by a judge and delivered by a Marshal or Sheriff (your landlord may not evict you verbally or through letters or notices) you have the right to remain in your home. If you receive a notice or paperwork and are unsure if it is an eviction order, call the Tenant Helpline at 311 to get clarification.
                </p>
            </div>
            <div className="order-first w-full lg:order-last flex-1 flex justify-center items-center h-[35rem]">
                <img src={img1} className='w-full h-full object-cover rounded-lg overflow-hidden' />
            </div>
        </motion.div>
    )
}

export default Illegal