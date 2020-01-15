$('.tab-heading').click(function() {
	if (window.matchMedia('(max-width: 767px)').matches) {
		$(this).toggleClass('tab-heading_opened');
	}
});
