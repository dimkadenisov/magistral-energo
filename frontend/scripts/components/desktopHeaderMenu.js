$('.header-search-line .button_primary').click(() => {
	if ($('.header-search-line_scroll').length) {
		$('.catalog-menu').toggleClass('catalog-menu_fixed');
		$('.burger-menu').toggleClass('d-none');
		if ($('.burger-menu').hasClass('d-none')) {
			$('.menu-item_active').toggleClass('menu-item_active');
		}
	} else {
		$('.burger-menu').toggleClass('d-none');
		if ($('.burger-menu').hasClass('d-none')) {
			$('.menu-item_active').toggleClass('menu-item_active');
		}
	}
});

$(window).scroll(function() {
	if (
		window.matchMedia('(min-width: 992px)').matches &&
		!$('.burger-menu.d-none').length &&
		!$('.catalog-menu_fixed').length &&
		window.pageYOffset > 118
	) {
		$('.catalog-menu').addClass('catalog-menu_fixed');
	}
});

$('.menu-list__item').mouseenter(function() {
	if (
		window.matchMedia('(min-width: 992px)').matches &&
		$(this).children('.submenu-list').length
	) {
		$(this).toggleClass('menu-list__item_active');
	}
});

$('.menu-list__item').mouseleave(function() {
	if (
		window.matchMedia('(min-width: 992px)').matches &&
		$(this).children('.submenu-list').length
	) {
		$(this).toggleClass('menu-list__item_active');
	}
});
