export const api = {
    async getThoughts() {
        const res = await fetch('/api/thoughts/');
        return res.json();
    },
    async getGallery() {
        const res = await fetch('/api/gallery/');
        return res.json();
    },
    async getAbout() {
        const res = await fetch('/api/about/');
        return res.json();
    }
};