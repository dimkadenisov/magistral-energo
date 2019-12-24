$('.tab-heading').click(function() {
	if ($(window).width() < 768) {
		$(this).toggleClass('tab-heading_opened');
		// $(this)
		// 	.next()
		// 	.toggleClass('d-none');
	}
});
