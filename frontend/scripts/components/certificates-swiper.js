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

updateSwiperOnBreakpoint({
	swiperClass: 'certificates-swiper',
	swiperConfig: certificatesSwiperConfig,
	maxWidthsArray: [767, 991, 1199],
});
