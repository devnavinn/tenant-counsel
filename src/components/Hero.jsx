import heroImg from '../assets/hero-img.svg';
import shapeHero from '../assets/shape-hero.svg';
import shapeHero2 from '../assets/shape-hero2.png';
import { motion } from "framer-motion";
import { InfoIcon, PhoneCall } from 'lucide-react';
import { heroInfo } from '../constants';
import ContactUsButton from './ContactUsButton';

const Hero = () => {
    return (
        <div className='w-full h-full relative overflow-hidden' style={{ minHeight: "91vh" }}>
            <div className='absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${heroImg})`, animation: 'scaleUpDown 3s infinite alternate' }} />
            <div className='absolute inset-0 -z-0 bg-no-repeat bg-contain' style={{ background: `url(${shapeHero2})`, opacity: '0.5' }} />
            <div className='absolute left-0 bottom-0 bg-no-repeat bg-contain' style={{ background: `url(${shapeHero})`, opacity: '1' }} />
            <motion.div initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }} className='flex flex-col p-5 sm:p-7 md:p-14 lg:p-24 text-[#FFFFFF]'>
                <h1 className='text-5xl opacity-65 font-normal leading-snug md:text-5xl lg:text-6xl'>Protecting Tenants with Tenacious and </h1>
                <h1 className='text-5xl font-semibold md:text-5xl lg:text-6xl leading-snug'>Affordable Defense</h1>
                <div className='flex flex-col space-y-4 py-5 mt-10'>
                    {heroInfo.map((info, index) => (
                        <List key={index} info={info} />
                    ))}
                </div>
                <div className='flex flex-row space-x-5 mt-5'>
                    <ContactUsButton />
                    <div className='flex space-x-2 justify-center items-center'>
                        <PhoneCall />
                        <div>
                            <p className='text-gray-400 text-sm'>Call us at</p>
                            <a href="tel:+19172773509">+1 (917) 277-3509</a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;

const List = ({ info }) => {
    return (
        <div className='flex items-center space-x-5 font-medium'>
            <InfoIcon />
            <p>{info}</p>
        </div>
    );
};
