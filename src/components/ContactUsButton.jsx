import { Link } from "react-router-dom"
import { ChevronRight } from 'lucide-react'
const ContactUsButton = () => {
    return (
        <Link to="contact-us" className='w-32 h-10 flex justify-between items-center bg-[#E63946] text-white p-2 rounded-lg'>
            Contact Us
            <ChevronRight />
        </Link>
    )
}

export default ContactUsButton