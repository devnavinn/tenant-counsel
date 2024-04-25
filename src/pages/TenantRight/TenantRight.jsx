
import Hero from "./Hero"
import { Link } from "react-router-dom";
import { useRef } from "react"
import Illegal from "./Illegal";
import Discrimination from "./Discrimination";
import DisabilitProtection from "./DisabilityProtections";
import LandLord from "./LandLord";
import HeatAndHot from "./HeatAndHot";
import SafteyAndRepair from "./SafteyAndRepair";
import RentStabilation from "./RentStabilation";
import Help from "../../components/Help";
import { useEffect } from "react";
const TenantRight = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        window.title = "Tenant Rights - Tenant Counsel Network"
        window.description = "Learn more about your rights as a tenant in New York City. Tenant Counsel Network is here to help you secure the legal defense you deserve."
    }, [])

    const illegalRef = useRef(null);
    const landlordRef = useRef(null);
    const heatRef = useRef(null);
    const safetyRef = useRef(null);
    const rentRef = useRef(null);
    const discriminationRef = useRef(null);
    const disabilityRef = useRef(null);
    const navigateToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Hero />
            <ul className="flex flex-row justify-center gap-2 flex-wrap my-5">
                <li className="cursor-pointer text-gray-700" >
                    <Link to={'/'} > Home</Link>
                </li>
                <li className="border-r pr-2 border-gray-900  cursor-pointer text-gray-700" onClick={() => navigateToSection(illegalRef)}>
                    Illegal lockouts and Eviction
                </li>
                <li className="border-r pr-2 border-gray-900  cursor-pointer text-gray-700" onClick={() => navigateToSection(landlordRef)}>
                    Landlord Harassment
                </li>
                <li className="border-r pr-2 border-gray-900  cursor-pointer text-gray-700" onClick={() => navigateToSection(heatRef)}>
                    Heat and Hot Water
                </li>
                <li className="border-r pr-2 border-gray-900  cursor-pointer text-gray-700" onClick={() => navigateToSection(safetyRef)}>
                    Safety and Repairs
                </li>
                <li className="border-r pr-2 border-gray-900  cursor-pointer text-gray-700" onClick={() => navigateToSection(rentRef)}>
                    Rent Stabilization
                </li>
                <li className="border-r pr-2 border-gray-900  cursor-pointer text-gray-700" onClick={() => navigateToSection(discriminationRef)}>
                    Discrimination
                </li>
                <li className="border-r pr-2 border-gray-900  cursor-pointer text-gray-700" onClick={() => navigateToSection(disabilityRef)}>
                    Disability Protections
                </li>
            </ul>
            <div className="px-5 flex flex-col space-y-10">
                <div ref={illegalRef}>
                    <Illegal />
                </div>
                <div ref={discriminationRef}>
                    <Discrimination />
                </div>
                <div ref={disabilityRef} >
                    <DisabilitProtection />
                </div>
                <div ref={landlordRef}>
                    <LandLord />
                </div>
                <div ref={heatRef}>
                    <HeatAndHot />
                </div>
                <div ref={safetyRef}>
                    <SafteyAndRepair />
                </div>
                <div ref={rentRef}>
                    <RentStabilation />
                </div>
                <Help />
            </div>
        </>
    )
}

export default TenantRight