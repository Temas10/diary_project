import { Page } from './Page';
import { api } from '../services/Api';

export class HomePage extends Page {
    async render() {
        let thoughts = [];
        try {
            thoughts = await api.getThoughts();
        } catch (e) {
            console.error(e);
        }

        return `
            <div class="hero-section">
                <h1>Мысли вслух</h1>
                <div class="scroll-hint">Листайте вниз <span class="arrow">↓</span></div>
            </div>
            <section class="diary-container">
                ${thoughts.length === 0 ? '<p>Записей пока нет. Зайдите в админку, чтобы добавить.</p>' : ''}
                ${thoughts.map((t: any) => `
                    <article class="thought-card" data-animate>
                        <span class="date">${new Date(t.created_at).toLocaleDateString('ru-RU')}</span>
                        <h2>${t.title}</h2>
                        <p>${t.content}</p>
                        ${t.mood ? `<span class="mood">Настроение: ${t.mood}</span>` : ''}
                        <div class="coffee-stain"></div>
                    </article>
                `).join('')}
            </section>
        `;
    }

    afterRender() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.thought-card').forEach(card => observer.observe(card));
    }
}