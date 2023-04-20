import { Link, useNavigate } from 'react-router-dom';
import '../../css/components/home/servicesSection.css';


const ServicesSection = () => {

    const services = [
        { service: 'Cardiology', image: "/images/home/services/heartBeat-min.png" },
        { service: 'Eye Care', image: "/images/home/services/eyeCare-min.png" },
        { service: 'Dentistry', image: "/images/home/services/dentistry-min.png" },
        { service: 'Virology', image: "/images/home/services/virology-min.png" },
        { service: 'Hepatology', image: "/images/home/services/hepatology-min.png" },
        { service: 'Urology', image: "/images/home/services/urology-min.png" }
    ]

    const navigate = useNavigate();
    const navigateToServices = () => {
        navigate('/services')
    }

    return (
        <section className="services-section section-padding">
            <h1>What We Provide</h1>
            <div className="service-card-container">
                {services && services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div>
                            <h2 onClick={navigateToServices}>{service.service}</h2>
                            <img src={service.image} alt="..." onClick={navigateToServices} />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatem</p>
                    </div>
                ))}
            </div>
            <div className="btn-container">
                <Link className="btn-gradient btn-link" to="/services">Learn More</Link>
            </div>
        </section>
    )
}

export default ServicesSection
