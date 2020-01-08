const imagesSwiperConfig = {
	init: true,
	slideClass: 'images-swiper__item',
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

let imagesSwiper = generateSwipers({
	swiperClass: 'images-swiper',
	swiperConfig: imagesSwiperConfig,
});

const imagesSwiperBreakpoints = [
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
				imagesSwiper = generateSwipers({
					swiperClass: 'images-swiper',
					swiperConfig: imagesSwiperConfig,
				});
			}
		},
	},
];

updateSwiperOnBreakpoint(imagesSwiperBreakpoints, imagesSwiper);
