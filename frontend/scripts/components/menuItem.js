const menuItem = $('.menu-item:not(:only-child)');

menuItem.click(function(e) {
	e.preventDefault();
	$(this).toggleClass('menu-item_active');
});
