import PagesHeader from "../components/PagesHeader";
import DoctorSection from "../components/doctors/DoctorSection";
import InfoSection from "../components/InfoSection";


const Doctors = () => {
    return (
        <div>
            <PagesHeader msgHeading={'Our Doctors'} msgBody={'Doctors'} />
            <DoctorSection />
            <InfoSection />
        </div>
    )
}

export default Doctors