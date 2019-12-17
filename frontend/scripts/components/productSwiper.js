let productSwiper = new Swiper('.product-swiper', {
	slideClass: 'product-swiper__item',
	slidesPerView: 1,
	spaceBetween: 0,

	navigation: {
		prevEl: '.swiper-button_left',
		nextEl: '.swiper-button_right',
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	observer: true,
	observerParents: true,
	observeSlideChildren: true,
});
