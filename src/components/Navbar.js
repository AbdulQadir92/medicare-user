import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/components/navbar.css';
import changeTheme from '../functions/changeTheme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faClose, faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

    const loc = useLocation();

    const [searchText, setSearchText] = useState('');
    const [currentTheme, setCurrentTheme] = useState('light');

    useEffect(() => {
        makeActive();
        changeNavBg();
    }, [loc.pathname, currentTheme])

    const makeActive = () => {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                links.forEach(link => {
                    if (link.classList.contains('active')) {
                        link.classList.remove('active')
                    }
                })
                link.classList.add('active');
            })
        })
    }

    const changeNavBg = () => {
        const header = document.querySelector('.header');
        const navbar = document.querySelector('#navbar');
        const links = navbar.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            const _scrollY = window.scrollY;
            const headerHeight = header.offsetHeight - 150;
            const headerTop = header.offsetTop;

            if (window.innerWidth > 992) {
                if (_scrollY >= headerTop && _scrollY < headerTop + headerHeight) {
                    navbar.style.backgroundColor = 'transparent';
                    navbar.style.boxShadow = '';
                    links.forEach(link => {
                        link.style.color = 'var(--nav-light-text)';
                    })
                } else {
                    navbar.style.backgroundColor = 'var(--light-bg)';
                    navbar.style.boxShadow = '0 3px 6px 0 rgb(0 0 0 / 5%)';
                    links.forEach(link => {
                        link.style.color = 'var(--nav-dark-text)';
                    })
                }
            }
        })
    }

    const toggleNavbar = () => {
        const searchLinksContainer = document.querySelector('.search-links-container');
        const navUl = document.querySelector('.nav-ul');
        const search = document.querySelector('.search');

        if (searchLinksContainer.classList.contains('cont-shown')) {
            searchLinksContainer.classList.remove('cont-shown');
            searchLinksContainer.parentElement.style.height = '60px';
        } else {
            searchLinksContainer.classList.add('cont-shown');
            searchLinksContainer.parentElement.style.height = '300px';
        }

        toggleClass(navUl, 'd-none');
        toggleClass(search, 'd-none');
    }

    const toggleClass = (element, cls) => {
        if (element.classList.contains(cls)) {
            setTimeout(() => {
                element.classList.remove(cls)
            }, 200)
        } else {
            element.classList.add(cls)
        }
    }

    const handleSearch = () => {
        console.log(searchText);
    }

    const toggleTheme = (theme) => {
        setCurrentTheme(theme);
        changeTheme(currentTheme);
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
