import PagesHeader from "../components/PagesHeader"
import Service from "../components/services/ServiceSection"
import InfoSection from "../components/InfoSection"

const Services = () => {
  return (
    <div>
      <PagesHeader msgHeading={'Our Services'} msgBody={'Services'} />
      <Service />
      <InfoSection />
    </div>
  )
}

export default Services
