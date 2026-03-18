import { createEl } from '../utils/dom.js';

class SiteNav extends HTMLElement {
    constructor() {
        super();
        this._onHashChange = () => this._updateActive();
    }

    connectedCallback() {
        SiteNav._injectStyles();

        const links = [
            { key: 'home',      href: '#home',      label: 'Home' },
            { key: 'season',    href: '#season',     label: 'Season' },
            { key: 'plantlist', href: '#plantlist',  label: 'Plant List' },
            { key: 'aboutus',   href: '#aboutus',    label: 'About us' },
        ];

        const active = this._activeKey();
        const items = links.map(({ key, href, label }) =>
            createEl('li', {},
                createEl('a', { href, ...(key === active ? { className: 'active' } : {}) }, label),
            )
        );

        this.replaceChildren(
            createEl('nav', { 'aria-label': 'Huvudmeny' },
                createEl('ul', {}, ...items),
            ),
        );

        window.addEventListener('hashchange', this._onHashChange);
    }

    disconnectedCallback() {
        window.removeEventListener('hashchange', this._onHashChange);
    }

    _activeKey() {
        return window.location.hash.slice(1) || 'home';
    }

    _updateActive() {
        const active = this._activeKey();
        this.querySelectorAll('a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href').slice(1) === active);
        });
    }

    static _injectStyles() {
        if (document.getElementById('site-nav-styles')) return;
        const link = document.createElement('link');
        link.id = 'site-nav-styles';
        link.rel = 'stylesheet';
        link.href = 'components/site-nav.css';
        document.head.appendChild(link);
    }
}

customElements.define('site-nav', SiteNav);
