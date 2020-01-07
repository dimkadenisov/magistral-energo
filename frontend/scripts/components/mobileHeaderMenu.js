const makeMobileMenu = () => {
	if ($('.main-header-line .header-actions').length) {
		$('.burger-menu__content').append($('.header-actions').clone(true));
		$('.burger-menu__content').append($('.site-sections').clone(true));
		$('.burger-menu__content').append($('.authorization-block').clone(true));
		$('.button_burger').after($('.main-header-line .logo').clone(true));
		$('.top-line__content').append($('.basket:first').clone(true));

		$('.main-header-line .header-actions').remove();
		$('.top-line__center .site-sections').remove();
		$('.top-line__right .authorization-block').remove();
		$('.main-header-line .logo').remove();
		$('.main-header-line .basket').remove();
	}
};

const makeDesktopMenu = () => {
	if ($('.burger-menu .header-actions').length) {
		$('.main-header-line .d-flex.align-items-center').append(
			$('.header-actions').clone(true),
		);
		$('.top-line__center').append($('.site-sections').clone(true));
		$('.top-line__right').append($('.authorization-block').clone(true));
		$('.main-header-line .col-3').append($('.top-line .logo').clone(true));
		$('.main-header-line .d-flex.align-items-center').append(
			$('.basket:first').clone(true),
		);

		$('.burger-menu .header-actions').remove();
		$('.burger-menu .site-sections').remove();
		$('.burger-menu .authorization-block').remove();
		$('.top-line .logo').remove();
		$('.top-line .basket').remove();
	}
};

(function() {
	if (window.matchMedia('(max-width: 991px)').matches) makeMobileMenu();

	let time;

	$(window).resize(() => {
		if (time) clearTimeout(time);
		time = setTimeout(function() {
			if (window.matchMedia('(max-width: 991px)').matches) {
				if ($('.header-search-line_scroll').length) removeScrollHeader();
				makeMobileMenu();
			} else {
				hideMobileMenu();
				makeDesktopMenu();
				if ($('.header-search-line_scroll').length === 0) addScrollHeader();
			}
		}, 5);
	});
})();

const hideMobileMenu = () => {
	$('body').removeClass('overflow_hidden');
	$('.burger-menu').addClass('d-none');
	$('.catalog-menu__name_active').removeClass('catalog-menu__name_active');
	$('.catalog-menu_active').removeClass('catalog-menu_active');
	$('.burger-menu .overflow_hidden').removeClass('overflow_hidden');
	$('.burger-menu__content .overlay').addClass('d-none');
	$('.menu-list').addClass('d-none');
	$('.menu-list__item_active').removeClass('menu-list__item_active');
	$('.menu-item_active').removeClass('menu-item_active');
};

$('.button_burger').click(() => {
	$('.burger-menu').toggleClass('d-none');
	$('body').toggleClass('overflow_hidden');
	if ($('.burger-menu').hasClass('d-none')) {
		hideMobileMenu();
	}
});

$('.catalog-menu__name').click(function() {
	$(this).toggleClass('catalog-menu__name_active');
	$('.catalog-menu').toggleClass('catalog-menu_active');
	$('.burger-menu__content').toggleClass('overflow_hidden');
	$('.burger-menu__content > .overlay').toggleClass('d-none');
	$('.menu-list').toggleClass('d-none');
});

$('.menu-item:not(:only-child)').click(function() {
	$(this)
		.parent()
		.toggleClass('menu-list__item_active');
	if (window.matchMedia('(max-width: 991px)').matches) {
		$(this)
			.parent()
			.parent()
			.parent()
			.toggleClass('overflow_hidden');
	}
});
