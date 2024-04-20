import logo from './../assets/logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header className="bg-white shadow sticky top-0 inset-x-0 p-5">
            <nav className='flex justify-between px-10' >
                <Link to={'/'} className='flex items-center '>
                    <img src={logo} alt="logo" className='w-10 h-10' />
                </Link>
                <ul className='flex items-center space-x-4 p-4'>
                    <li>
                        <Link to={'/'} className='hover:text-blue-500'>Home</Link>
                    </li>
                    <li>
                        <Link href="/tenant-right" className='hover:text-blue-500'>
                            Resourses
                        </Link>
                    </li>
                    <li>
                        <Link to="contact-us" className='w-40 h-10 flex justify-between bg-[#E63946] text-white'>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar