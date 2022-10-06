import '../../css/components/home/header.css';
import headerImage from '../../images/home/header4.jpg';


const Header = () => {
    return (
        <header id="header" style={{ backgroundImage: `linear-gradient(to right, rgb(3 15 39 / 69%), rgb(3 15 39 / 70%)), url(${headerImage})` }}>
            <div className="header-msg">
                <h1>We Provide Best Care</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed quam perferendis hic, doloribus enim vitae libero illo vero non voluptatibus a, tenetur nam nobis.</p>
                <button className="btn-gradient">Read More</button>
            </div>
        </header>
    )
}

export default Header
