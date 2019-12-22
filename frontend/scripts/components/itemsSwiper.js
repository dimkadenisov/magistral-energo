const itemsSwiperConfig = {
	slideClass: 'items-swiper__item',
	slidesPerView: 2,
	spaceBetween: 0,

	breakpoints: {
		576: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 6,
		},
		1200: {
			slidesPerView: 8,
		},
	},

	observer: true,
	observerParents: true,
	observeSlideChildren: true,
};

let itemsSwipers = generateSwipers({
	swiperClass: 'items-swiper__content',
	swiperConfig: itemsSwiperConfig,
});

$('.items-swiper .swiper-button_left').click(function() {
	const swiperIndex = $(this)
		.closest('.items-swiper')
		.find('.items-swiper__content')
		.attr('data-index');

	itemsSwipers[swiperIndex].slidePrev();
});

$('.items-swiper .swiper-button_right').click(function() {
	const swiperIndex = $(this)
		.closest('.items-swiper')
		.find('.items-swiper__content')
		.attr('data-index');
	itemsSwipers[swiperIndex].slideNext();
});
