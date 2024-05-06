
import img from '../../assets/news/img3.jpg'
import { motion } from 'framer-motion'
const News3 = () => {
    return (
        <motion.div className="max-h-screen  flex justify-center items-center overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-row w-full relative">
                <div className="w-full md:w-3/5">
                    <img src={img} className='w-full h-full' />
                </div>
                <div className='max-w-md absolute bottom-0 right-0 md:top-[30%] md:right-[10%] p-3 md:p-7 rounded-lg shadow-lg bg-white '>
                    <span>5 min ago</span>
                    <h1 className='max-sm:text-xl sm:text-3xl md:text-5xl text-gray-700 font-light py-2 md:py-5 leading-1'>
                        Mayor Adams' Public Engagement Unit hits streets to inform...</h1>
                    <a target='_blank' href='https://www.cbsnews.com/newyork/news/mayor-adams-public-engagement-unit-hits-streets-to-inform-tenants-of-their-rights-in-face-of-illegal-evictions/' className='text-red-500'>Read more</a>
                </div>
            </div>
        </motion.div>
    )
}

export default News3