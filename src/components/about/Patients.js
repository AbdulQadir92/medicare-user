import { useState } from 'react';
import '../../css/components/about/patients.css';
import patient1 from '../../images/about/patient1.jpg';
import patient2 from '../../images/about/patient2.png';
import patient3 from '../../images/about/patient3.jpg';


const Patients = () => {
    const patientMsg = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis sed blanditiis dignissimos esse ducimus fugit quia autem, dicta enim tempora dolores officiis est aliquam, temporibus pariatur asperiores necessitatibus minima hic doloremque neque, exercitationem soluta harum labore. Ducimus necessitatibus ab blanditiis unde eaque, exercitationem officiis deserunt culpa error sequi id ratione."

    const patients = [
        { image: patient1, msg: patientMsg, name: 'John Doe', profession: 'Employee' },
        { image: patient2, msg: patientMsg, name: 'Vin Diesel', profession: 'Teacher' },
        { image: patient3, msg: patientMsg, name: 'Paul Heyman', profession: 'Manager' }
    ]

    const [data, setData] = useState(patients);

    return (
        <div className="patients section-padding">
            <h2>What Our Patients Say</h2>

            {data && data.map((patient, index) => (
                <div className="patient-card" key={index}>
                    <img src={patient.image} alt="..." width="200" height="200" />
                    <div>
                        <p>{patient.msg}</p>
                        <div className="patient-name">{patient.name}</div>
                        <div className="patient-profession">{patient.profession}</div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Patients