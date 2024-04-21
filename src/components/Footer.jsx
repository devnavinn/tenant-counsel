import logo from './../assets/logo.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="flex justify-between items-center px-10 py-2 mt-10 shadow border-t">
            <Link to={'/'} className='flex items-center w-16 h-16 '>
                <img src={logo} alt="logo" className='w-full h-full' />
            </Link>
            <div>
                <p>© 2023 Tenant Counsel Network. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer