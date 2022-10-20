import '../../css/components/home/aboutSection.css';
import happyPatient from '../../imagesMin/home/happyPatient-min.jpg';


const AboutSection = () => {
    return (
        <section className="about-section section-padding">
            <div className="left">
                <h1>Welcome To <span>MediCare</span></h1>
                <div>This is about section of the landing page where information about Hospital or Clinic can be put. Further information can given in the paragraphs below.</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis animi, consequatur fugit porro recusandae. Facilis quis assumenda obcaecati fugiat eaque, dicta repellat maxime laboriosam eos, distinctio et deserunt enim.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci amet quia facilis nulla mollitia voluptatum molestias ipsam repellat, reprehenderit, quasi a, qui perspiciatis consequatur corporis? Quo aliquam error sint amet.</p>
            </div>
            <div className="right">
                <img src={happyPatient} alt="..." width="500px" height="300px" />
            </div>
        </section>
    )
}

export default AboutSection