const partnersSwiperConfig = {
	slidesPerView: 'auto',
	slideClass: 'partners__item',
	loop: true,
	allowTouchMove: true,
	speed: 2000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
};

let partnersSwiper = generateSwipers({
	swiperClass: 'partners',
	swiperConfig: partnersSwiperConfig,
});
