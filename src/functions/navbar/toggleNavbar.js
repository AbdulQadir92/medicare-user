

const toggleNavbar = () => {
    const toggleClass = (element, cls) => {
        if (element.classList.contains(cls)) {
            setTimeout(() => {
                element.classList.remove(cls)
            }, 200)
        } else {
            element.classList.add(cls)
        }
    }

    const _toggleNavbar = () => {
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
    _toggleNavbar();
}

export default toggleNavbar