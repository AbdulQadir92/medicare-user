import PagesHeader from "../components/PagesHeader";
import LeftImgSection from "../components/about/LeftImgSection";
import RightImgSection from '../components/about/RightImgSection';
import Patients from "../components/about/Patients";
import InfoSection from "../components/InfoSection";
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [])

  return (
    <div id="about">
      <PagesHeader msgHeading={'About Us'} msgBody={'About'} />
      <LeftImgSection image="/images/about/careSection-min.jpg" heading1={'How We'} heading2={'Care'} />
      <RightImgSection image="/images/about/doSection-min.jpg" heading1={'What We'} heading2={'Do'} />
      <Patients />
      <InfoSection />
    </div>
  )
}

export default About
