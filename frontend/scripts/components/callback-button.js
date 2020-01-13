$('#callback-button').click(e => {
	if (window.matchMedia('(min-width: 768px)').matches) {
		e.preventDefault();

		$.fancybox.open({
			src: '#callback-popup',
			type: 'inline',
			touch: false,
			opts: {
				closeBtn: false,
				smallBtn: false,
				buttons: [],
			},
		});
	}
});

$('#callback-popup .popup-button-close').click(() => {
	$.fancybox.close(true);
});
