function updateSwiperOnBreakpoint(
	breakpointsToDestroy,
	breakpointsToInit,
	swipers,
	swiperClass,
	swiperConfig,
) {
	if (!swipers) return;
	breakpointsToDestroy.forEach(breakpoint => {
		window.matchMedia(breakpoint).addListener(() => {
			if (window.matchMedia(breakpoint).matches) {
				swipers.forEach(swiper => {
					swiper.destroy();
				});
			}
		});
		if (window.matchMedia(breakpoint).matches) {
			swipers.forEach(swiper => {
				swiper.destroy();
			});
		}
	});

	breakpointsToInit.forEach(breakpoint => {
		window.matchMedia(breakpoint).addListener(() => {
			if (window.matchMedia(breakpoint).matches) {
				swipers.forEach(swiper => {
					if (swiper.destroyed) {
						swipers = generateSwipers({
							swiperClass,
							swiperConfig,
						});
					}
				});
			}
		});
	});
}
