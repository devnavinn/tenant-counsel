import React from 'react'
import support from '../assets/bg-support.png'
import { CircleCheck } from 'lucide-react'
import { supportInfo } from '../constants'
import { motion } from 'framer-motion'
const Support = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'

        >
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className='max-w-6xl mx-auto h-full rounded-lg bg-no-repeat bg-cover bg-center relative overflow-hidden flex flex-col md:flex-row '
                style={{
                    backgroundImage: `url(${support})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='w-full md:w-3/5 p-5 text-[#FFFFFF]'>
                    <h1 className='text-4xl md:text-5xl   font-semibold leading-snug'>
                        Does Your Landlord Take <br /> Your Cash but Not Your <br /> Complaints?
                    </h1>
                    <p className='py-5 leading-snug  opacity-65'>our landlord wants you to believe there’s no way out. There are no dead-ends when it comes to protecting our clients because there are no single solution cases. At Tenant Counsel Network, we approach all of our cases with a multi-faceted strategy, we empower renters to raise legitimate objections against their landlord’s unlawful behavior. Our aim is to uphold tenants’ rights and hold landlords accountable through an array of rental disputes, including those related to:</p>
                    <p className='leading-snug opacity-65'>
                        our landlord wants you to believe there’s no way out. There are no dead-ends when it comes to protecting our clients because there are no single solution cases. At Tenant Counsel Network, we approach all of our cases with a multi-faceted strategy, we empower renters to raise legitimate objections against their landlord’s unlawful behavior. Our aim is to uphold tenants’ rights and hold landlords accountable through an array of rental disputes, including those related to:
                    </p>
                </div>
                <div className=' flex-1 flex items-end'>
                    <div className='w-full h-fit bg-white p-5 flex flex-col space-y-2'>
                        {supportInfo.map((info, index) => (
                            <List key={index} info={info} />
                        ))}
                    </div>
                </div>

            </motion.div>
        </div >
    )
}

export default Support

const List = ({ info }) => {
    return (
        <div className='flex items-center space-x-5 font-medium'>
            <CircleCheck
                size={24}
                className='text-red-500'
            />
            <p>{info}</p>
        </div>
    )
}