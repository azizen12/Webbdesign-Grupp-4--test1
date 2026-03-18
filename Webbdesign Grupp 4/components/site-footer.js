import { createEl } from '../utils/dom.js';

class SiteFooter extends HTMLElement {
    connectedCallback() {
        SiteFooter._injectStyles();
        this.replaceChildren(
            createEl('footer', {},
                createEl('div', { className: 'container' },
                    createEl('p', {}, '© 2026 Gr4 Plantschool.'),
                    createEl('p', {}, 'www.hb.se'),
                ),
            ),
        );
    }

    static _injectStyles() {
        if (document.getElementById('site-footer-styles')) return;
        const link = document.createElement('link');
        link.id = 'site-footer-styles';
        link.rel = 'stylesheet';
        link.href = 'components/site-footer.css';
        document.head.appendChild(link);
    }
}

customElements.define('site-footer', SiteFooter);
