import { createEl } from '../utils/dom.js';

class SiteNav extends HTMLElement {
    connectedCallback() {
        SiteNav._injectStyles();

        const links = [
            { href: '/',           label: 'Home' },
            { href: '/season',     label: 'Season' },
            { href: '/plantlist',  label: 'Plant List' },
            { href: '/aboutus',    label: 'About Us' },
            { href: '/contact',    label: 'Contact' },
        ];

        const currentPath = window.location.pathname;
        const items = links.map(({ href, label }) =>
            createEl('li', {},
                createEl('a', { 
                    href, 
                    ...(href === currentPath ? { className: 'active' } : {}) 
                }, label),
            )
        );

        this.replaceChildren(
            createEl('nav', { 'aria-label': 'Main navigation' },
                createEl('ul', {}, ...items),
            ),
        );
    }

    static _injectStyles() {
        if (document.getElementById('site-nav-styles')) return;
        const link = document.createElement('link');
        link.id = 'site-nav-styles';
        link.rel = 'stylesheet';
        link.href = '/components/site-nav.css';
        document.head.appendChild(link);
    }
}

customElements.define('site-nav', SiteNav);
