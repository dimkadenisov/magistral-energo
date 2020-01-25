const partnersSwiperConfig = {
	slidesPerView: 'auto',
	slideClass: 'partners__item',
	loop: true,
	allowTouchMove: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
};

let partnersSwiper = generateSwipers({
	swiperClass: 'partners',
	swiperConfig: partnersSwiperConfig,
});
