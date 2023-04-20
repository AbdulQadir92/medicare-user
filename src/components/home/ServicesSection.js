import { Link, useNavigate } from 'react-router-dom';
import '../../css/components/home/servicesSection.css';

import heartBeat from '../../imagesMin/home/services/heartBeat-min.png';
import eyeCare from '../../imagesMin/home/services/eyeCare-min.png';
import dentistry from '../../imagesMin/home/services/dentistry-min.png';
import virology from '../../imagesMin/home/services/virology-min.png'
import hepatology from '../../imagesMin/home/services/hepatology-min.png';
import urology from '../../imagesMin/home/services/urology-min.png';


const ServicesSection = () => {

    const services = [
        { service: 'Cardiology', image: heartBeat },
        { service: 'Eye Care', image: eyeCare },
        { service: 'Dentistry', image: dentistry },
        { service: 'Virology', image: virology },
        { service: 'Hepatology', image: hepatology },
        { service: 'Urology', image: urology }
    ]

    // const [data, setData] = useState(services);
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
