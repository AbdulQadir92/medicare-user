import { useState } from 'react';
import '../../css/components/services/serviceSection.css';

import heartBeat from '../../imagesMin/home/services/heartBeat-min.png';
import eyeCare from '../../imagesMin/home/services/eyeCare-min.png';
import dentistry from '../../imagesMin/home/services/dentistry-min.png';
import virology from '../../imagesMin/home/services/virology-min.png'
import hepatology from '../../imagesMin/home/services/hepatology-min.png';
import urology from '../../imagesMin/home/services/urology-min.png';



const Service = () => {

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
    <section className="service-section section-padding">
      <h2>Our Services</h2>

      <div className="service-section-card-container">
        {data && data.map((service, index) => (
          <div key={index}>
            <div className="service-section-card-top">
              <h2>{service.service}</h2>
              <img src={service.image} alt="..." />
            </div>
            <div className="para-container">
              <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis animi, consequatur fugit porro recusandae. Facilis quis assumenda obcaecati fugiat eaque, dicta repellat maxime laboriosam eos, distinctio et deserunt enim.</p>
              <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci amet quia facilis nulla mollitia voluptatum molestias ipsam repellat, reprehenderit, quasi a, qui perspiciatis consequatur corporis? Quo aliquam error sint amet.</p>
              <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci amet quia facilis nulla mollitia voluptatum molestias ipsam repellat, reprehenderit, quasi a, qui perspiciatis consequatur corporis? Quo aliquam error sint amet.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service