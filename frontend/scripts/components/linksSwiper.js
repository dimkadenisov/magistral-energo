const linksSwiperConfig = {
	slideClass: 'links-swiper__item',
	slidesPerView: 2,
	spaceBetween: 0,
	watchOverflow: true,

	breakpoints: {
		576: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 5,
		},
		1200: {
			slidesPerView: 6,
		},
	},

	observer: true,
	observerParents: true,
	observeSlideChildren: true,

	navigation: {
		nextEl: '.swiper-button_right',
		prevEl: '.swiper-button_left',
	},
};

let linksSwiper = generateSwipers({
	swiperClass: 'links-swiper__content',
	swiperConfig: linksSwiperConfig,
});
