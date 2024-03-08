const mainNav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainNav.classList.toggle('show');
	hambutton.classList.toggle('show');
});