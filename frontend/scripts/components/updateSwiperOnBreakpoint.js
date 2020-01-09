// function updateSwiperOnBreakpoint({
// 	swiperClass,
// 	swiperConfig,
// 	maxWidthsArray,
// }) {
// 	if ($('.' + swiperClass).length === 0) return false;

// 	const breakpoints = [];

// 	maxWidthsArray.forEach(item => {
// 		breakpoints.push(window.matchMedia(`(max-width: ${item}px)`));
// 		breakpoints.push(window.matchMedia(`(min-width: ${item + 1}px)`));
// 	});

// 	let swipers = generateSwipers({
// 		swiperClass: swiperClass,
// 		swiperConfig: swiperConfig,
// 	});

// 	const breakpointChecker = function() {
// 		breakpoints.forEach(breakpoint => {
// 			if (breakpoint.matches) {
// 				swipers.forEach(item => {
// 					item.destroy();
// 				});
// 				swipers = generateSwipers({
// 					swiperClass: swiperClass,
// 					swiperConfig: swiperConfig,
// 				});
// 			}
// 		});
// 	};

// 	breakpoints.forEach(breakpoint => {
// 		breakpoint.addListener(breakpointChecker);
// 	});

// 	breakpointChecker();

// 	return swipers;
// }

// function updateSwiperOnBreakpoint(breakpoints, swipers) {
// 	breakpoints.forEach(({ breakpoint, callback }) => {
// 		breakpoint.addListener(() => {
// 			if (breakpoint.matches) {
// 				swipers.forEach(swiper => {
// 					callback(swiper);
// 				});
// 			}
// 		});
// 	});
// }

function updateSwiperOnBreakpoint(
	breakpointsToDestroy,
	breakpointsToInit,
	swipers,
	swiperClass,
	swiperConfig,
) {
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
