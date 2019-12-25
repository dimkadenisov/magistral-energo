$('.question').click(function() {
	if (
		$(this)
			.find('.answer')
			.css('display') === 'none'
	) {
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
		$(this)
			.find('.answer')
			.hide();
	}
});
