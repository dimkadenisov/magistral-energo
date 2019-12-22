let productSwiper = $('.product-swiper__content').length
	? new Swiper('.product-swiper__content', {
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
	  })
	: false;
