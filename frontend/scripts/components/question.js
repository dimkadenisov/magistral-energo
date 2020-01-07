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
				arrow: {
					element: $(this).find('.answer__arrow')[0],
				},
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
				preventOverflow: {
					enabled: true,
					boundariesElement: $(this).closest(
						'.product-price-block__content',
					)[0],
				},
			},
		});
	} else {
		$(this)
			.find('.answer')
			.hide();
	}
});
