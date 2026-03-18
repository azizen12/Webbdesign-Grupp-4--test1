class SiteHeader extends HTMLElement {
    connectedCallback() {
        SiteHeader._injectStyles();
        this.innerHTML = `
            <header>
                <div class="container">
                    <h1>Gr4 Plantschool</h1>
                </div>
            </header>
        `;
    }

    static _injectStyles() {
        if (document.getElementById('site-header-styles')) return;
        const link = document.createElement('link');
        link.id = 'site-header-styles';
        link.rel = 'stylesheet';
        link.href = 'components/site-header.css';
        document.head.appendChild(link);
    }
}

customElements.define('site-header', SiteHeader);
