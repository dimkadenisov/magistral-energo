/* eslint-disable no-undef */
const topLineLeft = $('.top-line__left');
const topLineRight = $('.top-line__right');
const mainHeaderTextSmall = $('.main-header-line .text-small');
const burgerMenu = $('.burger-menu__content');
const buttonBurger = $('.button_burger');

const actionsClone =
	$('.main-header-line .header-actions').length === 0
		? $('.burger-menu__content .header-actions').clone(true)
		: $('.main-header-line .header-actions').clone(true);

const topLineCenterClone =
	$('.top-line .top-line__center').length === 0
		? $('.burger-menu .top-line__center')
		: $('.top-line .top-line__center');

const topLineRightClone =
	$('.top-line .top-line__right').length === 0
		? $('.burger-menu .top-line__right')
		: $('.top-line .top-line__right');

const basketClone =
	$('.main-header-line .basket').length === 0
		? $('.burger-menu__content .basket').clone(true)
		: $('.main-header-line .basket').clone(true);

const logoClone =
	$('.main-header-line .logo').length === 0
		? $('.burger-menu__content .logo').clone(true)
		: $('.main-header-line .logo').clone(true);

const turnActionsToTop = () => {
	burgerMenu.append(actionsClone);
	$('.main-header-line .header-actions').remove();

	burgerMenu.append(topLineCenterClone);
	$('.top-line__content .top-line__center').remove();

	burgerMenu.append(topLineRight);
	$('.top-line__content .top-line__right').remove();

	topLineLeft.after(basketClone);
	$('.main-header-line .basket').remove();

	buttonBurger.after(logoClone);
	$('.main-header-line .logo').remove();
};

const turnActionsToBottom = () => {
	if ($('.main-header-line .header-actions').length === 0) {
		mainHeaderTextSmall.after(actionsClone);
		$('.top-line .header-actions').remove();
	}

	if ($('.top-line__content .top-line__center').length === 0) {
		topLineLeft.after(topLineCenterClone);
		$('.top-line .header-actions').remove();
	}

	if ($('.top-line__content .top-line__right').length === 0) {
		topLineCenterClone.after(topLineRightClone);
		$('.top-line .header-actions').remove();
	}

	if ($('.main-header-line .basket').length === 0) {
		actionsClone.after(basketClone);
		$('.top-line .basket').remove();
	}

	if ($('.main-header-line .logo').length === 0) {
		$('.main-header-line .col-3').append(logoClone);
		$('.top-line .logo').remove();
	}
};

(function() {
	if ($(window).width() < 992) turnActionsToTop();

	let time;

	$(window).resize(() => {
		if (time) clearTimeout(time);
		time = setTimeout(function() {
			if ($(window).width() < 992) turnActionsToTop();
			else turnActionsToBottom();
		}, 5);
	});
})();
