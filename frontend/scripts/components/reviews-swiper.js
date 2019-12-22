const reviewsSwiperConfig = {
	init: true,
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

updateSwiperOnBreakpoint({
	swiperClass: 'reviews-swiper',
	swiperConfig: reviewsSwiperConfig,
	maxWidthsArray: [767, 991, 1199],
});
