$(window).scroll(function() {
	const offset = $(window).width() <= 991 ? 142 : 64;

	if (
		document.querySelector('.tabs__wrapper').getBoundingClientRect().top <=
			offset &&
		document.querySelector('#tabs').getBoundingClientRect().bottom >
			offset + 100
	) {
		$('.tabs').addClass('tabs_fixed');
	} else {
		$('.tabs').removeClass('tabs_fixed');
	}
});
