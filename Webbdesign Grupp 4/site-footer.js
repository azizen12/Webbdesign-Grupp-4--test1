class SiteFooter extends HTMLElement {
    connectedCallback() {
        SiteFooter._injectStyles();
        this.innerHTML = `
            <footer>
                <div class="container">
                    <p>&copy; 2026 Gr4 Plantschool.</p>
                    <p>www.hb.se</p>
                </div>
            </footer>
        `;
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
