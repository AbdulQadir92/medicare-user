import '../css/components/pagesHeader.css';
import headerImage from '../images/home/header.jpg';


const PagesHeader = ({msgHeading, msgBody}) => {
    return (
        <header className="pages-header" style={{ backgroundImage: `linear-gradient(to right, rgb(3 15 39 / 69%), rgb(3 15 39 / 70%)), url(${headerImage})` }}>
            <div className="pages-header-msg">
                <h2>{msgHeading}</h2>
                <p>Home &#8594; {msgBody}</p>
            </div>
        </header>
    )
}

export default PagesHeader