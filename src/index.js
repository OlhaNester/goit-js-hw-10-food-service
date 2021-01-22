import './styles.css';
import itemsTemplate from './templates/gallery-items.hbs';
import menu from './menu.json';

const markup = itemsTemplate(menu);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);

// сonst refs = {
//     checkbox: document.querySelector('.theme-switch__toggle')

// }

// refs.checkbox.addEventListener('change', changeTheme)

// function changeTheme(event) {

// }
