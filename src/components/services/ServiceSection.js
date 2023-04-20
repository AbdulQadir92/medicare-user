import '../../css/components/services/serviceSection.css';


const Service = () => {

  const services = [
    { service: 'Cardiology', image: "/images/home/services/heartBeat-min.png" },
    { service: 'Eye Care', image: "/images/home/services/eyeCare-min.png" },
    { service: 'Dentistry', image: "/images/home/services/dentistry-min.png" },
    { service: 'Virology', image: "/images/home/services/virology-min.png" },
    { service: 'Hepatology', image: "/images/home/services/hepatology-min.png" },
    { service: 'Urology', image: "/images/home/services/urology-min.png" }
  ]

  return (
    <section className="service-section section-padding">
      <h2>Our Services</h2>

      <div className="service-section-card-container">
        {services && services.map((service, index) => (
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