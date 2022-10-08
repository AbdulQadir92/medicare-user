import '../css/pages/home.css';
import Header from "../components/home/Header"
import AboutSection from "../components/home/AboutSection"
import ServicesSection from '../components/home/ServicesSection';


const Home = () => {
    return (
        <section id="home">
            <Header />
            <AboutSection />
            <ServicesSection />
        </section>
    )
}

export default Home