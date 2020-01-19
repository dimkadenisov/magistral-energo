$('.filter-row-trigger').click(function(e) {
	e.preventDefault();
	if (window.matchMedia('(min-width: 992px)').matches) {
		$(this)
			.closest('.filter-row')
			.toggleClass('active');
	}
});

$('.catalog-filter .filter-heading').click(function() {
	if (window.matchMedia('(max-width: 991px)').matches) {
		$(this)
			.closest('.catalog-filter')
			.toggleClass('active');
	}
});
