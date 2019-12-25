$('#quick-order-button').click(() => {
	$.fancybox.open({
		src: '#quick-order-popup',
		type: 'inline',
		touch: false,
		opts: {
			closeBtn: false,
			smallBtn: false,
			buttons: [],
		},
	});
});

$('#quick-order-popup .popup-button-close').click(() => {
	$.fancybox.close(true);
});
