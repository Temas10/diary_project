import './styles.scss';
import { Router } from './router';

document.addEventListener('DOMContentLoaded', () => {
    const router = new Router('app');
    router.navigate(window.location.pathname); 
});