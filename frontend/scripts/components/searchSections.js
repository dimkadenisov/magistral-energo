const searchSections = $('.search-sections');
const searchSectionsSelected = $('.search-sections__selected');
const searcSectionsItem = $('.search-sections__item');
const searchInput = $('.header-search__input');

searchSectionsSelected.text(
	searchSections.find('.search-sections__item:first').text(),
);

searchSections.click(function() {
	$(this)
		.find('.search-sections__list')
		.toggleClass('d-none');
});

searcSectionsItem.click(function() {
	$(this)
		.parent()
		.parent()
		.find('.search-sections__selected')
		.text($(this).text());
});

searchInput.focus(() => {
	$('.search-sections__list').addClass('d-none');
});
