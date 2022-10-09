import '../css/pages/home.css';
import Header from "../components/home/Header"
import AboutSection from "../components/home/AboutSection"
import ServicesSection from '../components/home/ServicesSection';
import DoctorsSection from '../components/home/DoctorsSection';
import AppointmentSection from '../components/home/AppointmentSection';


const Home = () => {
    return (
        <section id="home">
            <Header />
            <AboutSection />
            <ServicesSection />
            <DoctorsSection />
            <AppointmentSection />
        </section>
    )
}

export default Home