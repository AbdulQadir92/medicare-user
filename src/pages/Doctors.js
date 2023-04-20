import PagesHeader from "../components/PagesHeader";
import DoctorSection from "../components/doctors/DoctorSection";
import InfoSection from "../components/InfoSection";
import { useEffect } from "react";


const Doctors = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [])

    return (
        <div>
            <PagesHeader msgHeading={'Our Doctors'} msgBody={'Doctors'} />
            <DoctorSection />
            <InfoSection />
        </div>
    )
}

export default Doctors