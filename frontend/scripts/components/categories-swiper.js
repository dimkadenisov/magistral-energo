const categoriesSwiperConfig = {
	slideClass: 'categories-swiper__item',
	slidesPerView: 2,
	spaceBetween: 30,

	observer: true,
	observerParents: true,
	observeSlideChildren: true,

	allowTouchMove: true,

	pagination: {
		el: '.swiper-pagination',
	},
};

let categoriesSwiper = generateSwipers({
	swiperClass: 'categories-swiper',
	swiperConfig: categoriesSwiperConfig,
});

updateSwiperOnBreakpoint(
	['(min-width: 768px)'],
	['(max-width: 767px)'],
	categoriesSwiper,
	'categories-swiper',
	categoriesSwiperConfig,
);
