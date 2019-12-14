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
	if ($(window).width() < 768) replacePlaceholderToMobile();

	let time;

	$(window).resize(() => {
		if (time) clearTimeout(time);
		time = setTimeout(function() {
			if ($(window).width() < 768) {
				replacePlaceholderToMobile();
			} else {
				replacePlaceholderToDesktop();
			}
		}, 5);
	});
})();
