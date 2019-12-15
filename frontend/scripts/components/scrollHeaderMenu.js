function addScrollHeader() {
	if (window.pageYOffset <= 118) return;
	$('.header-search-line').addClass('header-search-line_scroll');
	$('.header-search-line .logo').removeClass('d-none');
	if ($('.header-search-line .basket').length === 0) {
		$('.header-search').after($('.main-header-line .basket').clone(true));
	}
}

function removeScrollHeader() {
	$('.header-search-line').removeClass('header-search-line_scroll');
	$('.header-search-line .logo').addClass('d-none');
	$('.header-search-line .basket').remove();
}

(function() {
	let time;

	$(window).scroll(() => {
		if (time) clearTimeout(time);
		time = setTimeout(function() {
			if (window.pageYOffset > 118 && $(window).width() > 991)
				addScrollHeader();
			else removeScrollHeader();
		}, 5);
	});
})();
