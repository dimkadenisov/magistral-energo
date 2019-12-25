$('.question').click(function() {
	console.log(1);
	if (
		$(this)
			.find('.answer')
			.css('display') === 'none'
	) {
		console.log(2);
		$(this)
			.find('.answer')
			.show();
		const popper = new Popper(this, $(this).find('.answer'), {
			placement: 'bottom',
			modifiers: {
				flip: {
					behaivor: [
						'top',
						'top-start',
						'top-end',
						'right',
						'right-start',
						'right-end',
						'bottom',
						'bottom-start',
						'bottom-end',
						'left',
						'left-start',
						'left-end',
					],
				},
				offset: { enabled: true, offset: '0,10' },
			},
		});
	} else {
		console.log(3);
		$(this)
			.find('.answer')
			.hide();
	}
});
