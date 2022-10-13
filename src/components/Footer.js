import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/components/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {

  const [email, setEmail] = useState('');

  const handleNewsLetter = (e) => {
    e.preventDefault();

    console.log(email);
    setEmail('');
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <h2>Contact Us</h2>
          <div className="contact-us-cards">
            <div>
              <FontAwesomeIcon icon={faLocationDot} className="contact-us-icon" />
              <div className="contact-card-body">
                <p>34th Avenue</p>
                <p>New York, S2 Honey Block</p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} className="contact-us-icon" />
              <div className="contact-card-body">
                <p>Monday - Friday:&nbsp; 08 am - 06 pm</p>
                <p>Saturday - Sunday:&nbsp; Closed </p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} className="contact-us-icon" />
              <div className="contact-card-body">
                <p>+0300 4456 0025</p>
                <p>+0600 6854 0203</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>About Us</h2>
          <p className="about-us-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi reprehenderit itaque quo magni at delectus nihil atque ducimus totam, vel ea. Laboriosam quis magni, provident odio iusto saepe sunt delectus nihil atque ducimus totam, vel ea. Laboriosam quis magni.</p>
        </div>
        <div>
          <h2>Useful Links</h2>
          <ul className="useful-links-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/doctors">Doctors</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>News Letter</h2>
          <form className="news-letter-form" onSubmit={handleNewsLetter}>
            <p>Subscribe to our Newsletter to stay updated</p>
            <div>
              <button>
                <span className="newsletter-btn">Subscribe</span>
              </button>
              <input type="email" placeholder="Email Address" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required="required"/>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright &#169;2022 All rights reserved. Made by Abdul Qadir.
      </div>
    </footer>
  )
}

export default Footer
