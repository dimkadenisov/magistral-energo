const catalogButton = $('.header-search-line .button');
const catalogMenu = $('.catalog-menu');
const menuItem = $('.menu-item:not(:only-child)');

catalogButton.click(() => {
	catalogMenu.hasClass('d-none') && menuItem.removeClass('menu-item_active');
	catalogMenu.toggleClass('d-none');
});
