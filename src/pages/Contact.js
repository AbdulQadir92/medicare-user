import PagesHeader from "../components/PagesHeader";
import ContactForm from "../components/contact/ContactForm";
import InfoSection from "../components/InfoSection";


const Contact = () => {
  return (
    <div>
      <PagesHeader msgHeading={'Contact Us'} msgBody={'Contact'} />
      <ContactForm />
      <InfoSection />
    </div>
  )
}

export default Contact
