import PagesHeader from "../components/PagesHeader";
import ContactForm from "../components/contact/ContactForm";
import InfoSection from "../components/InfoSection";
import MapContainer from "../components/contact/MapContainer";


const Contact = () => {
  return (
    <div>
      <PagesHeader msgHeading={'Contact Us'} msgBody={'Contact'} />
      <ContactForm />
      <MapContainer />
      <InfoSection />
    </div>
  )
}

export default Contact
