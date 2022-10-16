const makeActive = (loc) => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.innerText.toLowerCase() === loc.pathname.slice(1)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }

        if (link.innerText.toLowerCase() === 'home' && loc.pathname === '/') {
            link.classList.add('active');
        }

        link.addEventListener('click', () => {
            links.forEach(link => {
                if (link.classList.contains('active')) {
                    link.classList.remove('active');
                }
            })
            link.classList.add('active');
        })
    })
}

export default makeActive
