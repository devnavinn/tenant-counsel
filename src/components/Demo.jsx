import demo from './../assets/demo.png'
import pattern from './../assets/pattern.png'
import { motion } from 'framer-motion'
const Demo = () => {
    return (
        <div
            className='w-full h-full flex justify-center items-center'
            style={{
                backgroundImage: `url(${pattern})`,
                height: `100vh`
            }}
        >
            <motion.div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 '
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                <div className='w-full'>
                    <img src={demo} alt="demo" className='w-full h-full' />
                </div>
                <div className=' flex flex-col justify-center '>
                    <h1 className='text-5xl font-semibold  leading-tight'>
                        <span className='text-red-500'>Fighting Eviction </span> and <br />
                        Homelessness in NYC
                    </h1>
                    <p className='text-gray-700 text-base leading-snug mt-2'>
                        Affordable housing options in New York City have dropped dramatically over the past few years. Rising rent and economic crisis have put many tenants into financial distress and have pushed landlords to unreasonable conduct.
                    </p>
                    <p className='text-gray-700 text-base leading-snug py-5'>
                        Struggling tenants believe there is nothing they can do to credibly dispute their eviction. This misconception leads many renters to fall into an even more dire situation. While landlords win most NYC eviction cases, it is ONLY because they are far more likely than tenants to hire attorneys.
                    </p>
                    <p className='text-gray-700 text-base leading-snug'>
                        Legal representation ranks as the most effective safeguard against eviction. Our goal is to educate and represent as many tenants against unlawful conduct  as we can.
                    </p>
                </div>
            </motion.div>

        </div>
    )
}

export default Demo