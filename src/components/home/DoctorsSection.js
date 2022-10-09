import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../css/components/home/doctorsSection.css';
import doctor1 from '../../images/home/doctors/doctor1.jpg';
import doctor2 from '../../images/home/doctors/doctor2.jpg';
import doctor3 from '../../images/home/doctors/doctor3.jpg';
import doctor4 from '../../images/home/doctors/doctor4.jpg';
import doctor5 from '../../images/home/doctors/doctor5.jpg';
import doctor6 from '../../images/home/doctors/doctor6.jpg';

import facebookIcon from '../../images/home/doctors/icons/facebook.png';
import twitterIcon from '../../images/home/doctors/icons/twitter.png';
import googlePlusIcon from '../../images/home/doctors/icons/google-plus.png';


const DoctorsSection = () => {
  const doctors = [
    { name: 'Jone Smith', designation: "Cardiologist", image: doctor1 },
    { name: 'Michael Hart', designation: "Eye Specialist", image: doctor2 },
    { name: 'Harry Kane', designation: "Dental Surgeon", image: doctor4 },
    { name: 'Mason Mount', designation: "Virologist", image: doctor3 },
    { name: 'Thomas Aglio', designation: "Hepatologist", image: doctor5 },
    { name: 'Terry Dubrow', designation: "Urologist", image: doctor6 }
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
                <img src={facebookIcon} alt="..." width="18" height="18" />
                <img src={twitterIcon} alt="..." width="18" height="18" />
                <img src={googlePlusIcon} alt="..." width="18" height="18" />
              </div>
            </div>
            <div className="card-body">
              <h2>{doctor.name}</h2>
              <div className="designation">{doctor.designation}</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Modi suscipit</p>
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
