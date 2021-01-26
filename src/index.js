import './styles.css';
import itemsTemplate from './templates/gallery-items.hbs';
import menu from './menu.json';

const markup = itemsTemplate(menu);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);

const refs = {
  checkbox: document.getElementById('theme-switch-toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let startTheme = localStorage.getItem('savedTheme');
if (startTheme) {
  startTheme = JSON.parse(startTheme);
} else startTheme = 'LIGHT';

<<<<<<< Updated upstream
refs.body.classList.add(Theme[startTheme]);
if (startTheme === 'DARK') {
  refs.checkbox.setAttribute('checked', 'true');
}

const setTheme = function () {
  if (refs.checkbox.hasAttribute('checked')) {
    refs.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('savedTheme', JSON.stringify('LIGHT'));
    refs.checkbox.removeAttribute('checked');
  } else {
    refs.body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('savedTheme', JSON.stringify('DARK'));
    refs.checkbox.setAttribute('checked', 'true');
  }
};

refs.checkbox.addEventListener('change', setTheme);
=======
// function changeTheme(event) {
// event.preventDefault();
// }
>>>>>>> Stashed changes
