import img1 from '../../assets/tenant-right/img5.jpeg'
import icon1 from '../../assets/tenant-right/icon5.png'
import pattern from '../../assets/pattern.png'
import List from './List'
const list = [
    "Day: Between the hours of 6:00am and 10:00pm, if the outdoor temperature reaches below 55 degrees, the inside temperature must be at least 68 degrees Fahrenheit.",
    "Night: Between the hours of 10:00pm and 6:00am, the inside temperature must be at least 62 degrees Fahrenheit."
]
const HeatAndHot = () => {
    return (
        <div className="max-w-6xl h-screen mx-auto flex flex-col lg:flex-row justify-center items-center gap-10"
            style={{
                backgroundImage: `url(${pattern})`,
            }}
        >
            <div className="w-3/5 flex flex-col justify-center ">
                <div className='w-14 h-14'>
                    <img className='w-full h-full' src={icon1} alt={"HeatAndHot lockouts and Eviction"} />
                </div>
                <h1 className='text-5xl font-medium mt-5'>Heat and Hot Water</h1>
                <p className='leading-snug text-gray-700 py-5'>
                    Building owners are legally mandated to provide their tenants with heat and hot water. Hot water must be provided 365 days per year at a minimum temperature of 120 degrees Fahrenheit. Heat must be provided between October 1st and May 31st, under the following conditions:
                </p>
                <ul className='flex flex-col space-y-2'>
                    {
                        list.map((a, index) => (
                            <List
                                item={a}
                                key={index}
                            />
                        ))
                    }
                </ul>
                <p className='leading-snug text-gray-700 mt-3'>
                    If, after reporting inadequate heating to your landlord, your home is still below the minimum required temperature, start a heat log to document the issue.<a target='_blank' href='https://www.nyc.gov/assets/mayorspeu/downloads/pdf/heat-and-hot-water-log.pdf'>Download this document to begin your heat log.</a>
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center h-[35rem]">
                <img src={img1} className='w-full h-full object-cover rounded-lg overflow-hidden' />
            </div>
        </div>
    )
}

export default HeatAndHot