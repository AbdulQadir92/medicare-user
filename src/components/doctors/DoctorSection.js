import '../../css/components/doctors/doctorSection.css';
import { useState } from 'react';

import doctor1 from '../../imagesMin/home/doctors/doctor1-min.jpg';
import doctor2 from '../../imagesMin/home/doctors/doctor2-min.jpg';
import doctor3 from '../../imagesMin/home/doctors/doctor3-min.jpg';
import doctor4 from '../../imagesMin/home/doctors/doctor4-min.jpg';
import doctor5 from '../../imagesMin/home/doctors/doctor5-min.jpg';
import doctor6 from '../../imagesMin/home/doctors/doctor6-min.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';


const DoctorSection = () => {
    const doctors = [
        { name: 'Jone Smith', designation: "Cardiologist", image: doctor1, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' },
        { name: 'Michael Hart', designation: "Eye Specialist", image: doctor2, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' },
        { name: 'Mason Mount', designation: "Virologist", image: doctor3, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' },
        { name: 'Harry Kane', designation: "Dental Surgeon", image: doctor4, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' },
        { name: 'Thomas Aglio', designation: "Hepatologist", image: doctor5, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' },
        { name: 'Terry Dubrow', designation: "Urologist", image: doctor6, facebookAccount: 'https://www.facebook.com/a.qadir.jamali/' }
    ]
    const [data, setData] = useState(doctors);

    return (
        <section className="doctor-section section-padding">
            <h2>Our Doctors</h2>
            <div className="doctor-section-cards-container">
                {data && data.map((doctor, index) => (
                    <div className="doctor-section-card" key={index}>
                        <div className="doctor-section-card-top">
                            <img src={doctor.image} alt="..." width="300" height="300" />
                            <div className="doctor-social-icons">
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} className="doctor-social-icon" />
                                </a>
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} className="doctor-social-icon" />
                                </a>
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon={faGooglePlus} className="doctor-social-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="doctor-section-card-body">
                            <div className="name-designation">
                                <h2 className="doctor-name">{doctor.name}</h2>
                                <h2 className="doctor-designation">{doctor.designation}</h2>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DoctorSection