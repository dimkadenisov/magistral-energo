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

updateSwiperOnBreakpoint(
	['(min-width: 768px)'],
	['(max-width: 767px)'],
	imagesSwiper,
	'images-swiper',
	imagesSwiperConfig,
);
