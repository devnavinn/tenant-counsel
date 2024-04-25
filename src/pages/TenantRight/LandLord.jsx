import img from '../../assets/tenant-right/img4.png';
import icon from '../../assets/tenant-right/icon4.png';
import pattern from '../../assets/pattern.png';
import List from './List';
import { motion } from 'framer-motion';
const list = [
    "Excessively contacting or visiting your home during non-business hours without permission or warning.",
    "Making repeated buy-out offers.",
    "Threatening or intimidating you to move out of your home or surrender your rights.",
    "Threatening or intimidating you to move out of your home or surrender your rightsDeliberately causing construction-related difficulties for you, including working after hours, obstructing entrances, conducting work without a permit, or neglecting to remove dust or debris.",
    "Failing to make necessary repairs or provide utilities that are needed for a habitable home, by way of encouraging you to move out.",
    "Providing you with an unjustified eviction notice or locking you out of your home without going through a court eviction process."
]

const LandLord = () => {
    return (
        <motion.div className="max-w-6xl min-h-screen mx-auto flex flex-col md:flex-row justify-center items-center gap-10 overflow-hidden"
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
            <div className="flex-1 flex justify-center items-center h-[35rem]">
                <img src={img} className='w-full h-full object-cover rounded-lg overflow-hidden' alt="LandLord" />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center ">
                <div className='w-14 h-14'>
                    <img className='w-full h-full' src={icon} alt={"LandLord"} />
                </div>
                <h1 className='text-4xl md:text-5xl font-medium mt-5'>Landlord <br />  Harassment</h1>
                <p className='leading-snug text-gray-700 py-5'>
                    Landlord harassment is prohibited by NYC law. Some landlord behaviors that count as harassment include:
                </p>
                <ul className='flex flex-col space-y-2'>
                    {
                        list.map((a, index) => (
                            <List
                                key={index}
                                item={a}
                            />
                        ))
                    }

                </ul>
            </div>
        </motion.div>
    );
};


export default LandLord;
