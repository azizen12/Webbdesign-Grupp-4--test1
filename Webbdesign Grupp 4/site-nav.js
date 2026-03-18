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

        const items = links.map(({ key, href, label }) =>
            `<li><a href="${href}"${key === this._activeKey() ? ' class="active"' : ''}>${label}</a></li>`
        ).join('');

        this.innerHTML = `
            <nav aria-label="Huvudmeny">
                <ul>${items}</ul>
            </nav>
        `;

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
