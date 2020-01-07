$('.button-to-top').click(() => {
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: 0,
		},
		300,
	);
});
