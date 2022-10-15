// Css for this section is being used from aboutSection of the home page
import '../../css/components/about/rightImgSection.css';


const LeftImgSection = ({image, heading1, heading2}) => {
    return (
        <section className="about-section section-padding right-img-section">
            <div className="right">
                <img src={image} alt="..." width="500px" height="300px" />
            </div>
            <div className="left" style={{paddingLeft: '5%'}}>
                <h1>{heading1} <span>{heading2}</span></h1>
                <div>This is about section of the landing page where information about Hospital or Clinic can be put. Further information can given in the paragraphs below.</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis animi, consequatur fugit porro recusandae. Facilis quis assumenda obcaecati fugiat eaque, dicta repellat maxime laboriosam eos, distinctio et deserunt enim.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci amet quia facilis nulla mollitia voluptatum molestias ipsam repellat, reprehenderit, quasi a, qui perspiciatis consequatur corporis? Quo aliquam error sint amet.</p>
            </div>
        </section>
    )
}

export default LeftImgSection