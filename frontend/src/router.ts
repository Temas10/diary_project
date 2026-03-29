import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';

export class Router {
    private outlet: HTMLElement;
    private routes: { [path: string]: any };

    constructor(outletId: string) {
        this.outlet = document.getElementById(outletId)!;
        
        this.routes = {
            '/': HomePage,
            '/gallery': GalleryPage,
            '/about': AboutPage
        };

        this.initEvents();
    }

    private initEvents() {
        document.body.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            
            if (link && link.getAttribute('data-link') !== null) {
                e.preventDefault();
                const path = link.getAttribute('href');
                if (path) {
                    this.navigate(path);
                }
            }
        });

        window.addEventListener('popstate', () => {
            this.renderPage(window.location.pathname);
        });
    }

    public navigate(path: string) {
        window.history.pushState({}, '', path);
        this.renderPage(path);
    }

    private async renderPage(path: string) {
        const PageClass = this.routes[path] || this.routes['/'];
        
        this.outlet.classList.add('fade-out');
        
        await new Promise(r => setTimeout(r, 300)); 

        const page = new PageClass();
        this.outlet.innerHTML = await page.render();
        page.afterRender();

        this.outlet.classList.remove('fade-out');
        this.outlet.classList.add('fade-in');
        
        setTimeout(() => this.outlet.classList.remove('fade-in'), 300);
    }
}