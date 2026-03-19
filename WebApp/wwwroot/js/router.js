// Simple client-side router for content pages (optional enhancement)
class Router {
    constructor() {
        this.routes = new Map();
        this.currentPath = window.location.pathname;
        
        window.addEventListener('popstate', () => this.handleRoute());
    }

    // Register a client-side route
    addRoute(path, handler) {
        this.routes.set(path, handler);
    }

    // Navigate without page reload
    navigate(path) {
        if (this.routes.has(path)) {
            window.history.pushState({}, '', path);
            this.handleRoute();
        } else {
            // Fall back to server navigation for unhandled routes
            window.location.href = path;
        }
    }

    handleRoute() {
        const path = window.location.pathname;
        const handler = this.routes.get(path);
        
        if (handler) {
            handler();
        }
    }

    // Intercept link clicks for registered routes
    interceptLinks() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;
            
            const href = link.getAttribute('href');
            if (href && href.startsWith('/') && this.routes.has(href)) {
                e.preventDefault();
                this.navigate(href);
            }
        });
    }
}

// Example usage (optional - only if you want client-side routing)
const router = new Router();

// Register client-side routes for pages that don't need server processing
router.addRoute('/', () => {
    document.querySelector('main').innerHTML = `
        <div class="container">
            <h1>Home Page</h1>
            <p>Loaded without page refresh!</p>
        </div>
    `;
});

router.addRoute('/about', () => {
    document.querySelector('main').innerHTML = `
        <div class="container">
            <h1>About Us</h1>
            <p>Also loaded without page refresh!</p>
        </div>
    `;
});

// Initialize
router.interceptLinks();
router.handleRoute();

// Note: /contact would still go to server for POST handling
