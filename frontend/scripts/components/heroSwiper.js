const heroSwiperBigConfig = {
	slideClass: 'hero-swiper__item',
	slidesPerView: 1,
	spaceBetween: 10,
	watchOverflow: true,

	observer: true,
	observerParents: true,
	observeSlideChildren: true,

	autoplay: {
		delay: 5000,
	},

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

	autoplay: {
		delay: 5000,
	},

	navigation: {
		nextEl: '.swiper-button_right',
		prevEl: '.swiper-button_left',
	},
};

let heroSwiperSmall = generateSwipers({
	swiperClass: 'hero-swiper_small',
	swiperConfig: heroSwiperSmallConfig,
});
