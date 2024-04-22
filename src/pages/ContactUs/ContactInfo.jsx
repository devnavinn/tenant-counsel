import pattern from '../../assets/contact/pattern.png'
import { PhoneCall, Mail } from 'lucide-react'
import ContactUsButton from '../../components/ContactUsButton'
const ContactInfo = () => {
    return (
        <div className='relative flex flex-col bg-[#3C506D] p-5'
        >
            <div
                className="absolute inset-0 z-10 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `url(${pattern})`,
                    opacity: '0.1'
                }}
            />
            <h1 className='text-white text-xl py-5'>Contact Information</h1>
            <p className='text-[#C9C9C9] '>Say something to start a live chat!</p>
            <div className='flex items-center gap-2 py-5 text-[#C9C9C9]'>
                <PhoneCall />
                +1 (917) 277-3509
            </div>

            <div className='flex items-center gap-2 text-[#C9C9C9]'>
                <Mail />
                support@tenantcounselnetwork.com
            </div>
            <div className='mt-10'>
                <h1 className=' text-2xl md:text-4xl font-semibold text-[#FFFFFF] '>Refer us to a friend!</h1>
                <p className='text-[#C9C9C9] py-5'>Reach out to us today – because your home is worth fighting for, and we're here to stand with you every step of the way. Contact us now to secure the legal defense you deserve.</p>
            </div>
            <ContactUsButton
                buttonName={'Share Us'}
                link={'#'}
            />
        </div>
    )
}

export default ContactInfo