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

updateSwiperOnBreakpoint({
	swiperClass: 'images-swiper',
	swiperConfig: imagesSwiperConfig,
	maxWidthsArray: [575, 767, 991, 1199],
});
