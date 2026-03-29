import { Page } from './Page';
import { api } from '../services/Api';

export class AboutPage extends Page {
    async render() {
        let data: any = { bio: '', philosophy: '' };
        try {
            const res = await api.getAbout();
            if (res.length > 0) data = res[0]; 
        } catch (e) {
            console.error(e);
        }

        return `
            <section class="about-container">
                <h2>Об авторе</h2>
                <div class="about-content">
                    <div class="author-avatar">☕</div>
                    <div class="author-bio">
                        <h3>История</h3>
                        <p>${data.bio || 'Информация не добавлена.'}</p>
                        
                        <h3>Философия</h3>
                        <p>${data.philosophy || 'Информация не добавлена.'}</p>
                    </div>
                </div>
            </section>
        `;
    }
}