import ContactUsButton from './ContactUsButton'
import logo from './../assets/logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header className="bg-white shadow sticky top-0 z-20 inset-x-0">
            <nav className='flex justify-between px-10 py-2' >
                <Link to={'/'} className='flex items-center w-16 h-16 '>
                    <img src={logo} alt="logo" className='w-full h-full' />
                </Link>
                <ul className='flex items-center space-x-5 p-4'>
                    <li>
                        <Link to={'/'} className='hover:text-blue-500 p-4'>Home</Link>
                    </li>
                    <li>
                        <Link to={'/resources-and-news'} className='hover:text-blue-500 p-4'>Resources</Link>

                    </li>
                    <li>
                        <Link to={'/tenant-right'} className='hover:text-blue-500 p-4'>Tenant Right</Link>

                    </li>
                    <li>
                        <ContactUsButton />
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar