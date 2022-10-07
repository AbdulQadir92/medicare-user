import '../css/pages/home.css';
import Header from "../components/home/Header"
import AboutSection from "../components/home/AboutSection"


const Home = () => {
    return (
        <section id="home">
            <Header />
            <AboutSection />
        </section>
    )
}

export default Home