import '../css/components/infoSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';


const InfoSection = () => {
    return (
        <div className="info-section">
            <div className="info-card">
                <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
                <div>
                    <p>34th Avenue</p>
                    <p>New York, S2 Honey Block</p>
                </div>
            </div>
            <div className="info-card">
                <FontAwesomeIcon icon={faClock} className="info-icon" />
                <div>
                    <p>Monday - Friday:&nbsp; 08 am - 06 pm</p>
                    <p>Saturday - Sunday:&nbsp; Closed </p>
                </div>
            </div>
            <div className="info-card">
                <FontAwesomeIcon icon={faPhone} className="info-icon" />
                <div>
                    <p>+0300 4456 0025</p>
                    <p>+0600 6854 0203</p>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
