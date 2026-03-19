import { createEl } from '../utils/dom.js';

class SiteFooter extends HTMLElement {
    connectedCallback() {
        SiteFooter._injectStyles();
        this.replaceChildren(
            createEl('footer', {},
                createEl('div', { className: 'container' },
                    createEl('p', {}, '© 2024 Webbdesign Grupp 4'),
                    createEl('p', {}, 'ASP.NET Core Web Application'),
                ),
            ),
        );
    }

    static _injectStyles() {
        if (document.getElementById('site-footer-styles')) return;
        const link = document.createElement('link');
        link.id = 'site-footer-styles';
        link.rel = 'stylesheet';
        link.href = '/components/site-footer.css';
        document.head.appendChild(link);
    }
}

customElements.define('site-footer', SiteFooter);
