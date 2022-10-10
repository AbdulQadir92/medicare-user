import '../../css/components/home/infoSection.css';


const InfoSection = () => {
    return (
        <div className="info-section">
            <div className="info-card">
                <span className="material-icons-outlined">location_on</span>
                <div>
                    <p>34th Avenue</p>
                    <p>New York, S2 Honey Block</p>
                </div>
            </div>

            <div className="info-card">
                <span className="material-icons-outlined">schedule</span>
                <div>
                    <p>Monday - Friday:&nbsp; 08 am - 06 pm</p>
                    <p>Saturday - Sunday:&nbsp; Closed </p>
                </div>
            </div>

            <div className="info-card">
                <span className="material-icons-outlined">call</span>
                <div>
                    <p>+0300 4456 0025</p>
                    <p>+0600 6854 0203</p>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
