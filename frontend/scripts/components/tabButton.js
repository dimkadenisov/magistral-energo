$('.tab-button').click(function(e) {
	e.preventDefault();

	$('.tab-button').removeClass('tab-button_active');
	$(this).addClass('tab-button_active');

	const destination = $($(this).attr('href')).offset().top - 112;
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: destination,
		},
		300,
	);
});

$(window).scroll(function() {
	if (
		$('.tab-button').length &&
		window.matchMedia('(min-width: 768px)').matches
	) {
		const offset = $(window).width() > 991 ? 166 : 245;
		$('.tab-button').each(function(_, el) {
			if ($(el).hasClass('tab-button_active')) return;

			if (
				document.querySelector(el.getAttribute('href')).getBoundingClientRect()
					.top < offset &&
				document.querySelector(el.getAttribute('href')).getBoundingClientRect()
					.top > 0
			) {
				$('.tab-button').removeClass('tab-button_active');
				$(el).addClass('tab-button_active');
			}
		});
	}
});
