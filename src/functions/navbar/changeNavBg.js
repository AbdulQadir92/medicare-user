

const changeNavBg = () => {
    const header = document.querySelector('.header') || document.querySelector('.pages-header');
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

export default changeNavBg