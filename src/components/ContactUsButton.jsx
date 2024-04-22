import { Link } from "react-router-dom"
import { ChevronRight } from 'lucide-react'
const ContactUsButton = ({ buttonName, link }) => {
    return (
        <Link to={link} className='z-10  flex justify-between items-center bg-[#E63946] text-white rounded-lg relative py-2 pr-12 pl-2'>
            {buttonName}
            <span className="absolute right-1 top-2"> <ChevronRight /></span>
        </Link>
    )
}

export default ContactUsButton