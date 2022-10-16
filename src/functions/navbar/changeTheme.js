

const changeTheme = (theme) => {
    console.log(theme);

    const rootStyle = document.querySelector(':root').style;

    if (theme === 'dark') {
        // Changing variable values to dark theme
        rootStyle.setProperty('--main-bg', '#060f18');
        rootStyle.setProperty('--light-bg', '#07121c');
        rootStyle.setProperty('--nav-dark-text', 'rgb(255, 255, 255)');
        rootStyle.setProperty('--nav-light-text', 'rgb(255, 255, 255)');
        rootStyle.setProperty('--btn-dark-text', 'rgb(255, 255, 255)');
        rootStyle.setProperty('--btn-light-text', 'rgb(255, 255, 255)');
        rootStyle.setProperty('--gradient', 'linear-gradient(to right, #548dd3 0%, #50c9c7 51%, #548dd3 100%)');
        rootStyle.setProperty('--dark-text', 'rgb(255, 255, 255)');
        rootStyle.setProperty('--dark-text-sec', 'rgb(180, 180, 180)');
        rootStyle.setProperty('--light-text', 'rgb(0, 0, 0)');
        rootStyle.setProperty('--light-text-sec', 'rgb(180, 180, 180)');
        rootStyle.setProperty('--light-border', 'rgba(100, 100, 100, 0.4)');
        rootStyle.setProperty('--dark-border', 'rgba(200, 200, 200, 0.4)');
        rootStyle.setProperty('--header-bg', 'rgba(0, 0, 0, 0.5)');
        rootStyle.setProperty('--footer-bg', '#060f18');
        rootStyle.setProperty('--footer-bottom-bg', '#07121c');
    }

    if (theme === 'light') {
        // Changing variable values to light theme
        rootStyle.setProperty('--main-bg', '#f7f9fa');
        rootStyle.setProperty('--light-bg', '#fff');
        rootStyle.setProperty('--btn-dark-text', 'rgb(0, 0, 0)');
        rootStyle.setProperty('--btn-light-text', 'rgb(255, 255, 255)');
        rootStyle.setProperty('--nav-dark-text', 'rgb(0, 0, 0)');
        rootStyle.setProperty('--nav-light-text', 'rgb(255, 255, 255)');
        rootStyle.setProperty('--gradient', 'linear-gradient(to right, #548dd3 0%, #50c9c7 51%, #548dd3 100%)');
        rootStyle.setProperty('--dark-text', 'rgb(0, 0, 0)');
        rootStyle.setProperty('--dark-text-sec', 'rgb(100, 100, 100)');
        rootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
        rootStyle.setProperty('--light-text-sec', 'rgb(180, 180, 180)');
        rootStyle.setProperty('--light-border', 'rgba(200, 200, 200, 0.4)');
        rootStyle.setProperty('--dark-border', 'rgba(100, 100, 100, 0.4)');
        rootStyle.setProperty('--header-bg', 'rgba(0, 0, 0, 0.5)');
        rootStyle.setProperty('--footer-bg', '#07121c');
        rootStyle.setProperty('--footer-bottom-bg', '#060f18');
    }
}

export default changeTheme