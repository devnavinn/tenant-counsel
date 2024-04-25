import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col sm:flex-row gap-5 justify-between items-center px-10 py-2 mt-10 shadow border-t">
            <Link to={'/'} className='flex items-center w-16 h-16 '>
                <img src={logo} alt="logo" className='w-full h-full' />
            </Link>
            <div>
                <p className='text-gray-500 text-sm'>© {currentYear} Tenant Counsel Network. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer