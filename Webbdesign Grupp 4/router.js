import home from './pages/home.js';
import season from './pages/season.js';
import aboutus from './pages/aboutus.js';
import plantlist from './pages/plantlist.js';

const routes = {
    home,
    season,
    aboutus,
    plantlist,
};

function setPageStyles(key) {
    let link = document.getElementById('page-styles');
    if (!link) {
        link = document.createElement('link');
        link.id = 'page-styles';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
    link.href = `pages/${key}.css`;
}

function navigate() {
    const key = window.location.hash.slice(1) || 'home';
    const page = routes[key] ?? routes.home;
    setPageStyles(key);
    document.querySelector('main').innerHTML = page();
}

window.addEventListener('hashchange', navigate);
navigate();
