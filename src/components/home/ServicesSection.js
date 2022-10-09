import {Link} from 'react-router-dom';
import '../../css/components/home/servicesSection.css';
import heartBeat from '../../images/home/services/heartBeat.png';
import eyeCare from '../../images/home/services/eyeCare.png';
import dentistry from '../../images/home/services/dentistry.png';
import hepatology from '../../images/home/services/hepatology.png';
import urology from '../../images/home/services/urology.png';
import virology from '../../images/home/services/virology.png'


const ServicesSection = () => {
    return (
        <section className="services-section section-padding">
            <h1>What We Provide</h1>
            <div className="service-card-container">
                <div className="service-card">
                    <div>
                        <h2>Cardiology</h2>
                        <img src={heartBeat} alt="..." />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatem</p>
                </div>
                <div className="service-card">
                    <div>
                        <h2>Eye Care</h2>
                        <img src={eyeCare} alt="..." />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, quasi</p>
                </div>
                <div className="service-card">
                    <div>
                        <h2>Dentistry</h2>
                        <img src={dentistry} alt="..." />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, enim</p>
                </div>

                <div className="service-card">
                    <div>
                        <h2>Virology</h2>
                        <img src={virology} alt="..." />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quia</p>
                </div>
                <div className="service-card">
                    <div>
                        <h2>Hepatology</h2>
                        <img src={hepatology} alt="..." />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eveniet</p>
                </div>
                <div className="service-card">
                    <div>
                        <h2>Urology</h2>
                        <img src={urology} alt="..." />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatum</p>
                </div>
            </div>
            <div className="btn-container">
                <Link className="btn-gradient btn-link" to="/services">Learn More</Link>
            </div>
        </section>
    )
}

export default ServicesSection
