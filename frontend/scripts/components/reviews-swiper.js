const reviewsSwiperConfig = {
	// init: true,
	slideClass: 'reviews-swiper__item',
	slidesPerView: 1,
	spaceBetween: 0,

	observer: true,
	observerParents: true,
	observeSlideChildren: true,

	allowTouchMove: true,

	pagination: {
		el: '.swiper-pagination',
	},

	breakpoints: {
		768: {
			init: false,
			allowTouchMove: false,
		},
	},
};

let reviewsSwiper = generateSwipers({
	swiperClass: 'reviews-swiper',
	swiperConfig: reviewsSwiperConfig,
});

updateSwiperOnBreakpoint(
	['(min-width: 768px)'],
	['(max-width: 767px)'],
	reviewsSwiper,
	'reviews-swiper',
	reviewsSwiperConfig,
);
