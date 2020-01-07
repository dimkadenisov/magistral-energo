const replacePlaceholderToMobile = () => {
	$('.header-search__input').attr('placeholder', 'Поиск...');
};

const replacePlaceholderToDesktop = () => {
	$('.header-search__input').attr(
		'placeholder',
		'Для поиска введите артикул или название товара...',
	);
};

(function() {
	if (window.matchMedia('(max-width: 767px)').matches)
		replacePlaceholderToMobile();

	let time;

	$(window).resize(() => {
		if (time) clearTimeout(time);
		time = setTimeout(function() {
			if (window.matchMedia('(max-width: 767px)').matches) {
				replacePlaceholderToMobile();
			} else {
				replacePlaceholderToDesktop();
			}
		}, 5);
	});
})();
