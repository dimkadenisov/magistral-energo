$('.button-to-top').click(() => {
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: 0,
		},
		300,
	);
	$('.tab-button').removeClass('tab-button_active');
	$('.tab-button:first').addClass('tab-button_active');
});
