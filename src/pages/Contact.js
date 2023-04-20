import PagesHeader from "../components/PagesHeader";
import ContactForm from "../components/contact/ContactForm";
import InfoSection from "../components/InfoSection";
import MapContainer from "../components/contact/MapContainer";
import { useEffect } from "react";


const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [])

  return (
    <div>
      <PagesHeader msgHeading={'Contact Us'} msgBody={'Contact'} />
      <ContactForm />
      <div className="map-container section-padding">
        <MapContainer />
      </div>
      <InfoSection />
    </div>
  )
}

export default Contact
