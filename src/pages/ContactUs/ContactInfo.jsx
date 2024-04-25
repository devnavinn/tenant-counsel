import pattern from '../../assets/contact/pattern.png'
import { PhoneCall, Mail } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

const ContactInfo = () => {
    const { toast } = useToast()
    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(window.location.href)
            toast({
                title: "Link Copied",
                description: "You can now share this link with your friends!",
                type: "success"
            });
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='relative flex flex-col bg-[#3C506D] p-5'
        >
            <div
                className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `url(${pattern})`,
                    opacity: '0.1'
                }}
            />
            <h1 className='text-white text-xl py-5'>Contact Information</h1>
            <p className='text-[#C9C9C9] '>Say something to start a live chat!</p>
            <a href='tel:+19172773509' className='flex items-center gap-2 py-5 text-[#C9C9C9] z-20'>
                <PhoneCall />
                +1 (917) 277-3509
            </a>

            <div className='flex items-center gap-2 text-[#C9C9C9]'>
                <Mail
                    className='shrink-0'
                />
                support@tenantcounselnetwork.com
            </div>
            <div className='mt-10'>
                <h1 className=' text-2xl md:text-4xl font-semibold text-[#FFFFFF] '>Refer us to a friend!</h1>
                <p className='text-[#C9C9C9] py-5'>Reach out to us today – because your home is worth fighting for, and we're here to stand with you every step of the way. Contact us now to secure the legal defense you deserve.</p>
            </div>
            <button
                onClick={() => handleCopy()}
                className='w-fit z-10  flex justify-between items-center bg-[#E63946] text-white rounded-lg relative py-2 pr-12 pl-2'>
                Share Us
                <span className="absolute right-1 top-2"> <ChevronRight /></span>

            </button>
        </div>
    )
}

export default ContactInfo