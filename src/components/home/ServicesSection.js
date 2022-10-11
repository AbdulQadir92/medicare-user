import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/components/home/servicesSection.css';
import heartBeat from '../../images/home/services/heartBeat.png';
import eyeCare from '../../images/home/services/eyeCare.png';
import dentistry from '../../images/home/services/dentistry.png';
import virology from '../../images/home/services/virology.png'
import hepatology from '../../images/home/services/hepatology.png';
import urology from '../../images/home/services/urology.png';


const ServicesSection = () => {

    const services = [
        { service: 'Cardiology', image: heartBeat },
        { service: 'Eye Care', image: eyeCare },
        { service: 'Dentistry', image: dentistry },
        { service: 'Virology', image: virology },
        { service: 'Hepatology', image: hepatology },
        { service: 'Urology', image: urology }
    ]

    const [data, setData] = useState(services);

    return (
        <section className="services-section section-padding">
            <h1>What We Provide</h1>
            <div className="service-card-container">
                {data && data.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div>
                            <h2>{service.service}</h2>
                            <img src={service.image} alt="..." />
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
