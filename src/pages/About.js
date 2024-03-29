import PagesHeader from "../components/PagesHeader";
import LeftImgSection from "../components/about/LeftImgSection";
import RightImgSection from '../components/about/RightImgSection';
import Patients from "../components/about/Patients";
import InfoSection from "../components/InfoSection";

import careSection from '../imagesMin/about/careSection-min.jpg';
import doSection from '../imagesMin/about/doSection-min.jpg';


const About = () => {
  return (
    <div id="about">
      <PagesHeader msgHeading={'About Us'} msgBody={'About'} />
      <LeftImgSection image={careSection} heading1={'How We'} heading2={'Care'}/>
      <RightImgSection image={doSection} heading1={'What We'} heading2={'Do'}/>
      <Patients />
      <InfoSection />
    </div>
  )
}

export default About
