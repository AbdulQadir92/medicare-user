import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/components/navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faClose, faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import changeTheme from '../functions/navbar/changeTheme';
import changeNavBg from '../functions/navbar/changeNavBg';
import toggleNavbar from '../functions/navbar/toggleNavbar';
import makeActive from '../functions/navbar/makeActive';


const Navbar = () => {

    const loc = useLocation();

    const [searchText, setSearchText] = useState('');
    const [currentTheme, setCurrentTheme] = useState('light');

    useEffect(() => {
        makeActive(loc);
        changeNavBg();
    }, [loc, currentTheme])

    useEffect(() => {
        themeOnLoad();
    }, [])

    const handleSearch = () => {
        console.log(searchText);
    }

    const themeOnLoad = () => {
        const _theme = localStorage.getItem('medicareTheme');
        if (!_theme) {
            localStorage.setItem('medicareTheme', 'light');
            setCurrentTheme('light');
        } else {
            setCurrentTheme(_theme);
            changeTheme(_theme);
        }
    }

    const toggleTheme = (theme) => {
        localStorage.setItem('medicareTheme', theme);
        setCurrentTheme(theme);
        const _theme = localStorage.getItem('medicareTheme');
        changeTheme(_theme);
    }

    return (
        <nav id="navbar">
            <div className="brand-container">
                <div className="nav-brand">
                    <h1>
                        <Link to="/">MediCare</Link>
                    </h1>
                </div>
                <div className="theme-icons-container">
                    {currentTheme === 'light' && (
                        <FontAwesomeIcon icon={faMoon} className="moon-icon" onClick={() => toggleTheme('dark')} data-themeicon />
                    )}
                    {currentTheme === 'dark' && (
                        <FontAwesomeIcon icon={faSun} className="sun-icon" onClick={() => toggleTheme('light')} data-themeicon />
                    )}
                </div>
                <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleNavbar} />
            </div>
            <div className="search-links-container">
                <ul className="nav-ul d-none">
                    <FontAwesomeIcon icon={faClose} className="close-icon" onClick={toggleNavbar} />
                    <li>
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li>
                        <Link to="/services" className="nav-link">Services</Link>
                    </li>
                    <li>
                        <Link to="/doctors" className="nav-link">Doctors</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
                <div className="search d-none">
                    <div>
                        <button>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={handleSearch} />
                        </button>
                        <input type="search" placeholder="Search" onChange={(e) => setSearchText(e.target.value)} value={searchText} required="required" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
