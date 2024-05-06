import { motion } from 'framer-motion'
import img from '../../assets/news/img1.jpg'
const SportLight = () => {
    return (
        <motion.div
            className="max-h-screen  flex justify-center items-center overflow-hidden"
            initial={{ opacity: 0.0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            <div className="max-w-6xl mx-auto flex flex-row w-full relative">
                <div className="w-full md:w-3/5">
                    <img src={img} className='w-full h-full' />
                </div>
                <div className='max-w-md absolute bottom-0 right-0 md:top-[40%] md:right-[10%] p-3 md:p-7 rounded-lg shadow-lg bg-white '>
                    <span>5 min ago</span>
                    <h1 className='max-sm:text-xl sm:text-3xl md:text-5xl text-gray-700 font-light py-2 md:py-5 leading-1'> <span className='font-medium' >Spotlight:</span> New York City’s Rental Housing Market</h1>
                    <a target='_blank' href='https://comptroller.nyc.gov/reports/spotlight-new-york-citys-rental-housing-market/' className='text-red-500'>Read more</a>
                </div>
            </div>
        </motion.div>
    )
}

export default SportLight