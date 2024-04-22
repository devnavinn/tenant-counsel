import pattern from '../assets/pattern.png'
import { whyWeAre } from '../constants'
import { motion } from 'framer-motion'
const WhyWeAre = () => {
    return (
        <div
            className='w-full min-h-screen flex justify-center items-center overflow-hidden'
            style={{
                backgroundImage: `url(${pattern})`,
            }}
        >
            <motion.div className='max-w-6xl mx-auto '
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                <h1 className='text-4xl md:text-5xl font-semibold text-center py-10 leading-snug'>Why We’re the Right <br />
                    <span className='text-red-500'>Representation </span>
                    for you
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        whyWeAre.map((card, index) => (
                            <Card key={index} {...card} />
                        ))
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default WhyWeAre


const Card = ({ title, description, icon }) => {
    return (
        <div className='flex flex-col space-y-5 p-10 rounded-xl border border-gray-400'>
            <div className='w-14 h-14 mx-auto'>
                <img className='w-full h-full' src={icon} alt={title} />
            </div>
            <h1 className='text-xl font-medium text-center'>{title}</h1>
            <p className='leading-snug text-gray-700 text-center'>{description}</p>
        </div>
    );
};