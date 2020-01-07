$('.share-link_email').click(function() {
	$(this)
		.next()
		.show();

	const popper = new Popper(this, $(this).next(), {
		placement: 'bottom',
		modifiers: {
			arrow: {
				element: $(this)
					.next()
					.find('.email-form__arrow')[0],
			},
			flip: {
				enabled: true,
				behavior: [
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
});

$('.email-form__button').click(function() {
	$(this)
		.closest('.email-form')
		.hide();
});
