import PagesHeader from "../components/PagesHeader"
import Service from "../components/services/ServiceSection"
import InfoSection from "../components/InfoSection"
import { useEffect } from "react"


const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [])

  return (
    <div>
      <PagesHeader msgHeading={'Our Services'} msgBody={'Services'} />
      <Service />
      <InfoSection />
    </div>
  )
}

export default Services
