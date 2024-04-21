import Hero from "./Hero"
import { useRef } from "react"
const TenantRight = () => {
    const currentSectionRef = useRef('Home');

    const navigateToSection = (section) => {
        currentSectionRef.current = section;
        console.log("Navigated to section:", section);
    };
    return (
        <>
            <Hero />
            <ul className="flex flex-row justify-center gap-2 flex-wrap">
                <li className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => navigateToSection('Home')}>
                    Home
                </li>
                <li className="border-r border-gray-200 cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => navigateToSection('Illegal lockouts and Eviction')}>
                    Illegal lockouts and Eviction
                </li>
                <li className="border-r border-gray-200 cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => navigateToSection('Landlord Harrasment')}>
                    Landlord Harrasment
                </li>
                <li className="border-r border-gray-200 cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => navigateToSection('Heat and Hot Water')}>
                    Heat and Hot Water
                </li>
                <li className="border-r border-gray-200 cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => navigateToSection('Safety and Repairs')}>
                    Safety and Repairs
                </li>
                <li className="border-r border-gray-200 cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => navigateToSection('Rent Stabilization')}>
                    Rent Stabilization
                </li>
                <li className="border-r border-gray-200 cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => navigateToSection('Discrimination')}>
                    Discrimination
                </li>
                <li className="border-r border-gray-200 cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => navigateToSection('Disability Protections')}>
                    Disability Protections
                </li>
            </ul>
        </>
    )
}

export default TenantRight