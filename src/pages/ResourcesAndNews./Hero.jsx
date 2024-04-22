import heroImg from '../../assets/news/hero.jpeg'
import shapeHero from '../../assets/tenright-hs.png'
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <div className='w-full h-[26rem] relative overflow-hidden mb-10'

        >
            <div
                className='absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center'
                style={{
                    backgroundImage: `url(${heroImg})`,
                }}
            />
            <div
                className='absolute inset-0 bg-black bg-opacity-50 '

            />
            <div
                className='absolute inset-0 -z-0 bg-no-repeat bg-contain'
                style={{
                    background: `url(${shapeHero})`,
                    opacity: '0.5'
                }}
            />

            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className='w-full h-full flex flex-col justify-center p-5 md:p-14 lg:p-20 text-[#FFFFFF]'>
                <h1 className='text-5xl font-semibold text-[#FFFFFF] leading-snug z-10'>Articles</h1>
                <p className='text-[#FFFFFF] opacity-65 z-10'>Know your rights and stay up to date on the latest Articles.</p>
            </motion.div>
        </div>
    )
}

export default Hero
