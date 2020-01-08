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

function updateSwiperOnBreakpoint(breakpoints, swipers) {
	breakpoints.forEach(({ breakpoint, callback }) => {
		breakpoint.addListener(() => {
			if (breakpoint.matches) {
				swipers.forEach(swiper => {
					callback(swiper);
				});
			}
		});
	});
}
