$('.header-search-line .button_primary').click(() => {
	$('.burger-menu').toggleClass('d-none');
	if ($('.burger-menu').hasClass('d-none')) {
		$('.menu-item_active').toggleClass('menu-item_active');
	}
});

$('.menu-item:not(:only-child)').click(function(e) {
	e.preventDefault();
	$(this).toggleClass('menu-item_active');
});
