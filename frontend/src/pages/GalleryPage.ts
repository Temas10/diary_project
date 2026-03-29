import { Page } from './Page';
import { api } from '../services/Api';

export class GalleryPage extends Page {
    async render() {
        let images = [];
        try {
            images = await api.getGallery();
        } catch (e) {
            console.error(e);
        }

        return `
            <section class="gallery-intro">
                <h2>Визуальные образы</h2>
                <p>Наведите на изображения, чтобы увидеть детали.</p>
            </section>
            <div class="gallery-grid">
                ${images.length === 0 ? '<p>Галерея пуста. Добавьте фото через админку.</p>' : ''}
                ${images.map((img: any) => `
                    <div class="gallery-item" style="background-image: url('${img.image}')">
                        <div class="overlay">
                            <h3>${img.caption}</h3>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    afterRender() {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
            item.addEventListener('mousemove', (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const rect = (item as HTMLElement).getBoundingClientRect();
                const x = mouseEvent.clientX - rect.left;
                const y = mouseEvent.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                (item as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });

            item.addEventListener('mouseleave', () => {
                (item as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }
}