import '../../css/components/about/patients.css';


const Patients = () => {
    const patientMsg = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis sed blanditiis dignissimos esse ducimus fugit quia autem, dicta enim tempora dolores officiis est aliquam, temporibus pariatur asperiores necessitatibus minima hic doloremque neque, exercitationem soluta harum labore. Ducimus necessitatibus ab blanditiis unde eaque, exercitationem officiis deserunt culpa error sequi id ratione."

    const patients = [
        { image: "/images/about/patient1-min.jpg", msg: patientMsg, name: 'John Doe', profession: 'Employee' },
        { image: "/images/about/patient2-min.png", msg: patientMsg, name: 'Vin Diesel', profession: 'Teacher' },
        { image: "/images/about/patient3-min.jpg", msg: patientMsg, name: 'Paul Heyman', profession: 'Manager' }
    ]


    return (
        <div className="patients section-padding">
            <h2>What Our Patients Say</h2>

            {patients && patients.map((patient, index) => (
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