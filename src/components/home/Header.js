import '../../css/components/home/header.css';


const Header = () => {

    return (
        <header className="header" style={{ backgroundImage: `linear-gradient(to right, rgb(3 15 39 / 69%), rgb(3 15 39 / 70%)), url(/images/home/header-min.jpg)` }}>
            <div className="header-msg">
                <h1>We Provide Best Care</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed quam perferendis hic, doloribus enim vitae libero illo vero non voluptatibus a, tenetur nam nobis.</p>
                <button className="btn-gradient">Learn More</button>
            </div>
        </header>
    )
}

export default Header
