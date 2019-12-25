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

$('.menu-item:not(:only-child)').click(function(e) {
	e.preventDefault();
	$(this).toggleClass('menu-item_active');
});

$(window).scroll(function() {
	if (
		$(window).width() > 991 &&
		!$('.burger-menu.d-none').length &&
		!$('.catalog-menu_fixed').length &&
		window.pageYOffset > 118
	) {
		$('.catalog-menu').addClass('catalog-menu_fixed');
	}
});
