import { createEl } from '../utils/dom.js';

class SiteHeader extends HTMLElement {
    connectedCallback() {
        SiteHeader._injectStyles();
        this.replaceChildren(
            createEl('header', {},
                createEl('div', { className: 'container' },
                    createEl('h1', {}, 'Webbdesign Grupp 4'),
                ),
            ),
        );
    }

    static _injectStyles() {
        if (document.getElementById('site-header-styles')) return;
        const link = document.createElement('link');
        link.id = 'site-header-styles';
        link.rel = 'stylesheet';
        link.href = '/components/site-header.css';
        document.head.appendChild(link);
    }
}

customElements.define('site-header', SiteHeader);
