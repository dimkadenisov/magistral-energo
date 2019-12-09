/* eslint-disable no-undef */
const catalogButton = $('.header-search-line .button');
const burgerMenu = $('.burger-menu');
const menuItem = $('.menu-item:not(:only-child)');

catalogButton.click(() => {
	burgerMenu.hasClass('d-none') && menuItem.removeClass('menu-item_active');
	burgerMenu.toggleClass('d-none');
});
