import { useState, useEffect, useRef } from 'react'
import ContactUsButton from './ContactUsButton'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isMobileMenuOpen && !menuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isMobileMenuOpen]);

    const menuRef = useRef(null);


    return (
        <header className="bg-white shadow sticky top-0 z-30 inset-x-0">
            <nav className='flex justify-between px-10 py-2'
                ref={menuRef}
            >
                <Link to={'/'} className='flex items-center w-16 h-16 sm:w-20 sm:h-20 '>
                    <img src={logo} alt="logo" className='w-full h-full' />
                </Link>
                <ul className=' hidden md:flex items-center space-x-5 p-4'>
                    <li>
                        <Link to={'/'} className='hover:text-blue-500 p-4'>Home</Link>
                    </li>

                    <li>
                        <Link to={'/tenant-right'} className='hover:text-blue-500 p-4 whitespace-nowrap'>Know Your Rights
                        </Link>
                    </li>
                    <li>
                        <Link to={'/resources-and-news'} className='hover:text-blue-500 p-4'>Resources</Link>
                    </li>
                    <li>
                        <ContactUsButton
                            buttonName='Contact Us'
                            link='/contact-us'
                        />
                    </li>
                </ul>
                <div
                    onClick={toggleMobileMenu}
                    className="md:hidden flex items-center z-30">
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

const MobileMenu = ({ isMobileMenuOpen, toggleMobileMenu, menuRef }) => {
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
                            <li
                                onClick={toggleMobileMenu}
                            >
                                <Link to={'/'} className='hover:text-blue-500 p-4'>Home</Link>
                            </li>
                            <li
                                onClick={toggleMobileMenu}
                            >
                                <Link to={'/resources-and-news'} className='hover:text-blue-500 p-4'>Resources</Link>

                            </li>
                            <li
                                onClick={toggleMobileMenu}
                            >
                                <Link to={'/tenant-right'} className='hover:text-blue-500 p-4'>Tenant Right</Link>

                            </li>
                            <li
                                onClick={toggleMobileMenu}
                            >
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
