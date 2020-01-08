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

const reviewsSwiperBreakpoints = [
	{
		breakpoint: window.matchMedia('(min-width: 768px)'),
		callback: swiper => {
			swiper.update();
			swiper.destroy(true, true);
		},
	},
	{
		breakpoint: window.matchMedia('(max-width: 767px)'),
		callback: swiper => {
			if (swiper.destroyed) {
				reviewsSwiper = generateSwipers({
					swiperClass: 'reviews-swiper',
					swiperConfig: reviewsSwiperConfig,
				});
			}
		},
	},
];

updateSwiperOnBreakpoint(reviewsSwiperBreakpoints, reviewsSwiper);
