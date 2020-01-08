const certificatesSwiperConfig = {
	init: true,
	slideClass: 'certificates-swiper__item',
	slidesPerView: 2,
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
			slidesPerView: 3,
		},
		768: {
			init: false,
			allowTouchMove: false,
		},
	},
};

let certificatesSwiper = generateSwipers({
	swiperClass: 'certificates-swiper',
	swiperConfig: certificatesSwiperConfig,
});

const certificatesSwiperBreakpoints = [
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
				certificatesSwiper = generateSwipers({
					swiperClass: 'certificates-swiper',
					swiperConfig: certificatesSwiperConfig,
				});
			}
		},
	},
];

updateSwiperOnBreakpoint(certificatesSwiperBreakpoints, certificatesSwiper);
