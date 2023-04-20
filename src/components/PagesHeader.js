import '../css/components/pagesHeader.css';
import { Link } from 'react-router-dom';


const PagesHeader = ({ msgHeading, msgBody }) => {
    return (
        <header className="pages-header" style={{ backgroundImage: `linear-gradient(to right, rgb(3 15 39 / 69%), rgb(3 15 39 / 70%)), url(/images/home/header-min.jpg)` }}>
            <div className="pages-header-msg">
                <h2>{msgHeading}</h2>
                <p><Link to="/">Home</Link> &#8594; {msgBody}</p>
            </div>
        </header>
    )
}

export default PagesHeader