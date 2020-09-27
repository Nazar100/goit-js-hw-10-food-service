const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const btnRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

btnRef.addEventListener('click', changeThemeClr);

function setDefaultTheme() {
  if (localStorage.Theme === JSON.stringify(Theme.LIGHT)) {
    setLightTheme();
    setLocalStorageLight();
    btnRef.checked = false;
  } else if (localStorage.Theme === JSON.stringify(Theme.DARK)) {
    setDarkTheme();
    setLocalStorageDark();
    btnRef.checked = true;
  }
}

setDefaultTheme();

function changeThemeClr() {
  if (localStorage.Theme === JSON.stringify(Theme.LIGHT)) {
    setDarkTheme();
    setLocalStorageDark();
  } else if (localStorage.Theme === JSON.stringify(Theme.DARK)) {
    setLightTheme();
    setLocalStorageLight();
  }
}

function setDarkTheme() {
  bodyRef.classList.remove('light-theme');
  bodyRef.classList.add('dark-theme');
}
function setLightTheme() {
  bodyRef.classList.remove('dark-theme');
  bodyRef.classList.add('light-theme');
}
function setLocalStorageLight() {
  localStorage.removeItem(Theme);
  localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
}
function setLocalStorageDark() {
  localStorage.removeItem(Theme);
  localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
}
