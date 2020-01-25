const heroSwiperBigConfig = {
	slideClass: 'hero-swiper__item',
	slidesPerView: 1,
	spaceBetween: 10,
	watchOverflow: true,

	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		// 1200: {
		// 	slidesPerView: 6,
		// },
	},

	observer: true,
	observerParents: true,
	observeSlideChildren: true,

	navigation: {
		nextEl: '.swiper-button_right',
		prevEl: '.swiper-button_left',
	},
};

let heroSwiperBig = generateSwipers({
	swiperClass: 'hero-swiper_big',
	swiperConfig: heroSwiperBigConfig,
});

const heroSwiperSmallConfig = {
	slideClass: 'hero-swiper__item',
	slidesPerView: 1,
	spaceBetween: 15,
	watchOverflow: true,

	breakpoints: {
		768: {
			slidesPerView: 2,
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

let heroSwiperSmall = generateSwipers({
	swiperClass: 'hero-swiper_small',
	swiperConfig: heroSwiperSmallConfig,
});
