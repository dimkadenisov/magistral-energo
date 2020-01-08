const videosSwiperConfig = {
	init: true,
	slideClass: 'videos-swiper__item',
	slidesPerView: 1,
	spaceBetween: 30,

	observer: true,
	observerParents: true,
	observeSlideChildren: true,

	allowTouchMove: true,

	pagination: {
		el: '.swiper-pagination',
	},

	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		768: {
			init: false,
			allowTouchMove: false,
		},
	},
};

let videosSwiper = generateSwipers({
	swiperClass: 'videos-swiper',
	swiperConfig: videosSwiperConfig,
});

const videosSwiperBreakpoints = [
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
				videosSwiper = generateSwipers({
					swiperClass: 'videos-swiper',
					swiperConfig: videosSwiperConfig,
				});
			}
		},
	},
];

updateSwiperOnBreakpoint(videosSwiperBreakpoints, videosSwiper);
