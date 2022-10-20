import {useState} from 'react';
import '../../css/components/contact/contactForm.css';


const ContactForm = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValues => ({...prevValues, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        window.open(`mailto:a.qadir.jamali@gmail.com?subject=${formData.subject}&body=${'Name: ' + formData.name + '.   \n' + 'Message: ' + formData.message}`);
        
        setFormData({});
        e.target.reset();
    }

  return (
    <div className="contact-section section-padding">
            <h1>Contact Form</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="fields-container">
                    <div>
                        <label className="input-label" htmlFor="name">Name</label>
                        <input className="input-field" type="text" id="name" onChange={handleChange} value={formData.name || ''}  required="required"/>
                    </div>
                    <div>
                        <label className="input-label" htmlFor="email">Email</label>
                        <input className="input-field" type="email" id="email" onChange={handleChange} value={formData.email || ''} />
                    </div>
                </div>
                <div className="fields-container">
                    <div>
                        <label className="input-label" htmlFor="subject">Subject</label>
                        <input className="input-field" type="text" id="subject" onChange={handleChange} value={formData.subject || ''}  required="required"/>
                    </div>
                    <div>
                        <label className="input-label" htmlFor="phone">Phone Number</label>
                        <input className="input-field" type="tel" id="phone" onChange={handleChange} value={formData.phone || ''} />
                    </div>
                </div>
                <div className="fields-container">
                    <div className="contact-msg">
                        <label className="input-label" htmlFor="message">Message</label>
                        <textarea className="input-field" rows="6" id="message" onChange={handleChange} value={formData.message || ''}  required="required"></textarea>
                    </div>
                </div>
                <div className="btn-container">
                    <input className="btn-regular" type="submit" value="Send Message" />
                </div>
            </form>
        </div>
  )
}

export default ContactForm