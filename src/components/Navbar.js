import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/components/navbar.css';


const Navbar = () => {

    const loc = useLocation();

    console.log(loc.pathname);

    useEffect(() => {
        makeActive();
        if (window.innerWidth > 992) changeNavBg();
    }, [loc.pathname])

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

            if (_scrollY >= headerTop && _scrollY < headerTop + headerHeight) {
                navbar.style.backgroundColor = 'transparent';
                links.forEach(link => {
                    link.style.color = 'var(--light-text)';
                })
            } else {
                navbar.style.backgroundColor = 'var(--light-text)';
                links.forEach(link => {
                    link.style.color = 'var(--dark-text)';
                })
            }
        })
    }

    const toggleNavbar = () => {
        const searchLinksContainer = document.querySelector('.search-links-container');
        const navUl = document.querySelector('.nav-ul');
        const search = document.querySelector('.search');

        if (searchLinksContainer.classList.contains('cont-shown')) {
            searchLinksContainer.classList.remove('cont-shown')
        } else {
            searchLinksContainer.classList.add('cont-shown')
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


    return (
        <nav id="navbar">
            <div className="brand-container">
                <div className="nav-brand">
                    <h1>MediCare</h1>
                </div>
                <span className="material-icons-outlined menu-icon" onClick={toggleNavbar}>menu</span>
            </div>
            <div className="search-links-container">
                <ul className="nav-ul d-none">
                    <span className="material-icons-outlined close-icon" onClick={toggleNavbar}>close</span>
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
                        <Link to="#" className="nav-link">Page</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
                <div className="search d-none">
                    <div>
                        <button>
                            <span className="material-icons-outlined">search</span>
                        </button>
                        <input type="search" placeholder="Search" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
