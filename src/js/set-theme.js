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

refs.body.classList.add(Theme[startTheme]);
if (startTheme === 'DARK') {
  refs.checkbox.setAttribute('checked', 'true');
}

const changeTheme = function () {
  if (refs.checkbox.hasAttribute('checked')) {
    setTheme('LIGHT');
    refs.checkbox.removeAttribute('checked');
  } else {
    setTheme('DARK');
    refs.checkbox.setAttribute('checked', 'true');
  }
};

const setTheme = function (settheme) {
  let removetheme;
  if (settheme === 'LIGHT') {
    removetheme = 'DARK';
  } else removetheme = 'LIGHT';
  refs.body.classList.replace(Theme[removetheme], Theme[settheme]);
  localStorage.setItem('savedTheme', JSON.stringify(settheme));
};

refs.checkbox.addEventListener('change', changeTheme);
