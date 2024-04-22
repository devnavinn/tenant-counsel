import { motion } from 'framer-motion'
import img from '../../assets/news/img4.png'
const News4 = () => {
    return (
        <motion.div className="max-h-screen  flex justify-center items-center overflow-hidden"
            initial={{ opacity: 0.0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            <div className="max-w-6xl mx-auto flex justify-end flex-row w-full relative">
                <div className="w-full md:w-3/5">
                    <img src={img} className='w-full h-full' />
                </div>
                <div className='max-w-md absolute bottom-0 right-0 md:top-[35%] md:left-[10%] p-3 md:p-7 rounded-lg shadow-lg bg-white '>
                    <span>5 min ago</span>
                    <h1 className='max-sm:text-xl sm:text-3xl md:text-5xl text-gray-700 font-light py-2 md:py-5 leading-1'>Eric Adams’ State of the City: What’s in it for Housing?</h1>
                    <a href='' className='text-red-500'>Read more</a>
                </div>
            </div>
        </motion.div>
    )
}

export default News4