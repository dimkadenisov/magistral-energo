function openHeaderMenu() {
	if ($('.header-search-line_scroll').length) {
		$('.catalog-menu').addClass('catalog-menu_fixed');
		$('.burger-menu').removeClass('d-none');
		if ($('.burger-menu').hasClass('d-none')) {
			$('.menu-item_active').addClass('menu-item_active');
		}
	} else {
		$('.burger-menu').removeClass('d-none');
		if ($('.burger-menu').hasClass('d-none')) {
			$('.menu-item_active').addClass('menu-item_active');
		}
	}
}

$('.header-search-line .button_primary').mouseenter(openHeaderMenu);

function closeHeaderMenu(e) {
	const timeout = setTimeout(
		e => {
			if (
				e.relatedTarget === $('.menu-list')[0] ||
				e.relatedTarget === $('.header-search-line')[0]
			) {
				clearInterval(timeout);
			} else {
				if ($('.header-search-line_scroll').length) {
					$('.catalog-menu').removeClass('catalog-menu_fixed');
					$('.burger-menu').addClass('d-none');
					if ($('.burger-menu').hasClass('d-none')) {
						$('.menu-item_active').removeClass('menu-item_active');
					}
				} else {
					$('.burger-menu').addClass('d-none');
					if ($('.burger-menu').hasClass('d-none')) {
						$('.menu-item_active').removeClass('menu-item_active');
					}
				}
			}
		},
		50,
		e,
	);
}

$('.header-search-line .button_primary').mouseleave(e => {
	closeHeaderMenu(e);
});

$('.menu-list').mouseleave(e => {
	if (window.matchMedia('(min-width: 992px)').matches) {
		closeHeaderMenu(e);
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
