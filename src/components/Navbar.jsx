import { useState } from 'react'
import ContactUsButton from './ContactUsButton'
import logo from './../assets/logo.svg'
import { Link } from 'react-router-dom'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { motion, AnimatePresence } from 'framer-motion';
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header className="bg-white shadow sticky top-0 z-20 inset-x-0">
            <nav className='flex justify-between px-10 py-2' >
                <Link to={'/'} className='flex items-center w-16 h-16 '>
                    <img src={logo} alt="logo" className='w-full h-full' />
                </Link>
                <ul className=' hidden md:flex items-center space-x-5 p-4'>
                    <li>
                        <Link to={'/'} className='hover:text-blue-500 p-4'>Home</Link>
                    </li>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                                <NavigationMenuContent className='flex flex-col'>
                                    <NavigationMenuLink asChild>
                                        <Link to={'/resources-and-news'} className='hover:text-blue-500 p-4'>Resources</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link to={'/tenant-right'} className='hover:text-blue-500 p-4 whitespace-nowrap'>Tenant Right</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <li>
                        <ContactUsButton
                            buttonName='Contact Us'
                            link='/contact-us'
                        />
                    </li>
                </ul>
                <div
                    onClick={toggleMobileMenu}
                    className="md:hidden flex items-center">
                    <button
                        className="outline-none mobile-menu-button">
                        <svg
                            className="w-6 h-6 text-gray-500"

                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </nav>
            <MobileMenu
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
            />
        </header>

    )
}

export default Navbar

const MobileMenu = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    return (
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    className="fixed inset-x-0 bg-white z-10"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <div className="p-4">
                        <ul className='flex flex-col items-center space-y-5 p-4'>
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
                                <ContactUsButton
                                    buttonName={'Contact Us'}
                                    link={'/contact-us'}
                                />
                            </li>
                        </ul>
                    </div>


                </motion.div>
            )}
        </AnimatePresence>
    );
};
