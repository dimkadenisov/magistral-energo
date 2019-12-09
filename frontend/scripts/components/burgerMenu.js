/* eslint-disable no-undef */
const burgerButton = $('.button_burger');
const burgerMenu = $('.burger-menu');

burgerButton.click(() => {
	burgerMenu.toggleClass('d-none');
});
