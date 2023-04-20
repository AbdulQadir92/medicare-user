import { useState } from 'react';
import '../../css/components/home/appointmentSection.css';


const AppointmentSection = () => {
    const _data = [
        { service: 'Cardiology', doctor: 'Jone Smith' },
        { service: 'Eye Care', doctor: 'Michael Hart' },
        { service: 'Dentistry', doctor: 'Harry Kane' },
        { service: 'Virology', doctor: 'Mason Mount' },
        { service: 'Hepatology', doctor: 'Thomas Aglio' },
        { service: 'Urology', doctor: 'Terry Dubrow' }
    ]
    // const [data, setData] = useState(_data);


    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValues => ({ ...prevValues, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formData);

        setFormData({});
        e.target.reset();
    }

    return (
        <div className="appointment-section section-padding">
            <h1>Make an Appointment</h1>
            <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="fields-container">
                    <div>
                        <label className="input-label" htmlFor="name">Name</label>
                        <input className="input-field" type="text" id="name" onChange={handleChange} value={formData.name || ''} required="required" />
                    </div>
                    <div>
                        <label className="input-label" htmlFor="email">Email</label>
                        <input className="input-field" type="email" id="email" onChange={handleChange} value={formData.email || ''} />
                    </div>
                </div>
                <div className="fields-container">
                    <div>
                        <label className="input-label" htmlFor="service">Service</label>
                        <select className="select-field" id="service" onChange={handleChange}>
                            <option>Select</option>
                            {_data && _data.map((service, index) => (
                                <option value={service.service} key={index}>{service.service}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="input-label" htmlFor="doctor">Doctor</label>
                        <select className="select-field" id="doctor" onChange={handleChange}>
                            <option>Select</option>
                            {_data && _data.map((doctor, index) => (
                                <option value={doctor.doctor} key={index}>{doctor.doctor}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="fields-container">
                    <div>
                        <label className="input-label" htmlFor="date">Date</label>
                        <input className="input-field" type="date" id="date" onChange={handleChange} value={formData.date || ''} required="required" />
                    </div>
                    <div>
                        <label className="input-label" htmlFor="time">Time</label>
                        <input className="input-field" type="time" id="time" onChange={handleChange} value={formData.time || ''} required="required" />
                    </div>
                </div>
                <div className="btn-container">
                    <input className="btn-regular" type="submit" value="Confirm Appointment" />
                </div>
            </form>
        </div>
    )
}

export default AppointmentSection
