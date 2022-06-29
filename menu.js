const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.getElementById("nav__list");

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main-menu--show')});