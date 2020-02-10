$(document).ready(() => {
	$('.partners').length &&
		$('.partners').marquee({
			duration: 10000,
			duplicated: true,
			gap: 0,
			startVisible: true,
		});
});
