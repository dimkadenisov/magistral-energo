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

updateSwiperOnBreakpoint(
	['(min-width: 768px)'],
	['(max-width: 767px)'],
	certificatesSwiper,
	'certificates-swiper',
	certificatesSwiperConfig,
);
