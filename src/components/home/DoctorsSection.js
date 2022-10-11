import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/components/home/doctorsSection.css';
import doctor1 from '../../images/home/doctors/doctor1.jpg';
import doctor2 from '../../images/home/doctors/doctor2.jpg';
import doctor3 from '../../images/home/doctors/doctor3.jpg';
import doctor4 from '../../images/home/doctors/doctor4.jpg';
import doctor5 from '../../images/home/doctors/doctor5.jpg';
import doctor6 from '../../images/home/doctors/doctor6.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';


const DoctorsSection = () => {
  const doctors = [
    { name: 'Jone Smith', designation: "Cardiologist", image: doctor1, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' },
    { name: 'Michael Hart', designation: "Eye Specialist", image: doctor2, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' },
    { name: 'Harry Kane', designation: "Dental Surgeon", image: doctor4, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' },
    { name: 'Mason Mount', designation: "Virologist", image: doctor3, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' },
    { name: 'Thomas Aglio', designation: "Hepatologist", image: doctor5, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' },
    { name: 'Terry Dubrow', designation: "Urologist", image: doctor6, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' }
  ]
  const [data, setData] = useState(doctors);


  return (
    <div className="doctors-section section-padding">
      <h1>Our Doctors</h1>
      <div className="doctor-card-container">
        {data && data.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <div className="img-container">
              <img src={doctor.image} alt="..." width="250" height="100" />
              <div className="social-icons">
                <a href="" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                </a>
                <a href="" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                </a>
                <a href="" target="_blank">
                  <FontAwesomeIcon icon={faGooglePlus} className="social-icon" />
                </a>
              </div>
            </div>
            <div className="card-body">
              <h2>{doctor.name}</h2>
              <div className="designation">{doctor.designation}</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-container">
        <Link className="btn-gradient btn-link" to="/doctors">Learn More</Link>
      </div>
    </div>
  )
}

export default DoctorsSection
