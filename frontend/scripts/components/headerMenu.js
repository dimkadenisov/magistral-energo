const catalogButton = $('.header-search-line .button');
const burgerMenu = $('.burger-menu');
const menuItem = $('.menu-item:not(:only-child)');
const catalogMenuName = $('.catalog-menu__name');
const burgerButton = $('.button_burger');

catalogButton.click(() => {
	burgerMenu.hasClass('d-none') && menuItem.removeClass('menu-item_active');
	burgerMenu.toggleClass('d-none');
});

burgerButton.click(() => {
	if (burgerMenu.hasClass('d-none')) {
		$('.menu-list').addClass('d-none');
		$('submenu-list').addClass('d-none');
		menuItem.removeClass('menu-item_active');
	}
	$('body').toggleClass('overflow_hidden');
	burgerMenu.toggleClass('d-none');
	burgerMenu.toggleClass('burger-menu_opened');
	$('.burger-menu__content').toggleClass('overflow-y_visible');
});

catalogMenuName.click(function() {
	catalogMenuName.toggleClass('catalog-menu__name_active');
	$('.menu-list').toggleClass('d-none');
	$('submenu-list').addClass('d-none');
	if ($(window).width() < 992) {
		$('.burger-menu__content > .overlay').toggleClass('d-none');
	}
});

menuItem.click(function(e) {
	e.preventDefault();
	$(this).toggleClass('menu-item_active');

	if ($(window).width() < 992) {
		$(this)
			.parent()
			.toggleClass('menu-list__item_active');
		$(this)
			.parent()
			.find('.overlay')
			.toggleClass('d-none');
	}
});
