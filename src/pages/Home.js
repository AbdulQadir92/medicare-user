import '../css/pages/home.css';
import { useEffect } from 'react';
import Header from "../components/home/Header"
import AboutSection from "../components/home/AboutSection"
import ServicesSection from '../components/home/ServicesSection';
import DoctorsSection from '../components/home/DoctorsSection';
import InfoSection from '../components/InfoSection';
import AppointmentSection from '../components/home/AppointmentSection';


const Home = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [])

    return (
        <div>
            <Header />
            <AboutSection />
            <ServicesSection />
            <DoctorsSection />
            <InfoSection />
            <AppointmentSection />
        </div>
    )
}

export default Home