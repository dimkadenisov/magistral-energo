"use strict";

$('.button_star').click(function () {
  $(this).toggleClass('button_star_active');
});
"use strict";

$('.button-to-top').click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: 0
  }, 300);
  $('.tab-button').removeClass('tab-button_active');
  $('.tab-button:first').addClass('tab-button_active');
});
"use strict";

$('#callback-button').click(function (e) {
  if (window.matchMedia('(min-width: 768px)').matches) {
    e.preventDefault();
    $.fancybox.open({
      src: '#callback-popup',
      type: 'inline',
      touch: false,
      opts: {
        closeBtn: false,
        smallBtn: false,
        buttons: []
      }
    });
  }
});
$('#callback-popup .popup-button-close').click(function () {
  $.fancybox.close(true);
});
"use strict";

$('.filter-row-trigger').click(function (e) {
  e.preventDefault();

  if (window.matchMedia('(min-width: 992px)').matches) {
    $(this).closest('.filter-row').toggleClass('active');
  }
});
$('.catalog-filter .filter-heading').click(function () {
  if (window.matchMedia('(max-width: 991px)').matches) {
    $(this).closest('.catalog-filter').toggleClass('active');
  }
});
"use strict";

var categoriesSwiperConfig = {
  slideClass: 'categories-swiper__item',
  slidesPerView: 2,
  spaceBetween: 30,
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination'
  }
};
var categoriesSwiper = generateSwipers({
  swiperClass: 'categories-swiper',
  swiperConfig: categoriesSwiperConfig
});
updateSwiperOnBreakpoint(['(min-width: 768px)'], ['(max-width: 767px)'], categoriesSwiper, 'categories-swiper', categoriesSwiperConfig);
"use strict";

var certificatesSwiperConfig = {
  init: true,
  slideClass: 'certificates-swiper__item',
  slidesPerView: 2,
  spaceBetween: 30,
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    576: {
      slidesPerView: 3
    },
    768: {
      init: false,
      allowTouchMove: false
    }
  }
};
var certificatesSwiper = generateSwipers({
  swiperClass: 'certificates-swiper',
  swiperConfig: certificatesSwiperConfig
});
updateSwiperOnBreakpoint(['(min-width: 768px)'], ['(max-width: 767px)'], certificatesSwiper, 'certificates-swiper', certificatesSwiperConfig);
"use strict";

$('.header-search-line .button_primary').click(function () {
  if ($('.header-search-line_scroll').length) {
    $('.catalog-menu').toggleClass('catalog-menu_fixed');
    $('.burger-menu').toggleClass('d-none');

    if ($('.burger-menu').hasClass('d-none')) {
      $('.menu-item_active').toggleClass('menu-item_active');
    }
  } else {
    $('.burger-menu').toggleClass('d-none');

    if ($('.burger-menu').hasClass('d-none')) {
      $('.menu-item_active').toggleClass('menu-item_active');
    }
  }
});
$(window).scroll(function () {
  if (window.matchMedia('(min-width: 992px)').matches && !$('.burger-menu.d-none').length && !$('.catalog-menu_fixed').length && window.pageYOffset > 118) {
    $('.catalog-menu').addClass('catalog-menu_fixed');
  }
});
$('.menu-list__item').mouseenter(function () {
  if (window.matchMedia('(min-width: 992px)').matches && $(this).children('.submenu-list').length) {
    $(this).toggleClass('menu-list__item_active');
  }
});
$('.menu-list__item').mouseleave(function () {
  if (window.matchMedia('(min-width: 992px)').matches && $(this).children('.submenu-list').length) {
    $(this).toggleClass('menu-list__item_active');
  }
});
"use strict";

$('.share-link_email').click(function () {
  $(this).next().show();
  var popper = new Popper(this, $(this).next(), {
    placement: 'bottom',
    modifiers: {
      arrow: {
        element: $(this).next().find('.email-form__arrow')[0]
      },
      flip: {
        enabled: true,
        behavior: ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']
      },
      offset: {
        enabled: true,
        offset: '0,10'
      }
    }
  });
});
$('.email-form__button').click(function () {
  $(this).closest('.email-form').hide();
});
"use strict";

function generateSwipers(_ref) {
  var _ref$swiperClass = _ref.swiperClass,
      swiperClass = _ref$swiperClass === void 0 ? false : _ref$swiperClass,
      _ref$swiperConfig = _ref.swiperConfig,
      swiperConfig = _ref$swiperConfig === void 0 ? false : _ref$swiperConfig,
      _ref$thumbsClass = _ref.thumbsClass,
      thumbsClass = _ref$thumbsClass === void 0 ? false : _ref$thumbsClass,
      _ref$thumbsConfig = _ref.thumbsConfig,
      thumbsConfig = _ref$thumbsConfig === void 0 ? false : _ref$thumbsConfig;
  if (!$('.' + swiperClass).length) return false;
  var thumbs = $('.' + thumbsClass).length && thumbsConfig ? generateSwipers({
    swiperClass: thumbsClass,
    swiperConfig: thumbsConfig
  }) : false;
  var itemsSwipersNodes = $('.' + swiperClass);
  var swipers = [];
  itemsSwipersNodes.each(function (index) {
    $(this).addClass(swiperClass + '-' + index);
    if (thumbs) swiperConfig.thumbs.swiper = thumbs[index];
    swipers[index] = new Swiper('.' + swiperClass + '-' + index, swiperConfig);
    swipers[index].id = index;
    $(".".concat(swiperClass, "-").concat(index)).attr('data-index', index);
  });
  return swipers;
}
"use strict";

var replacePlaceholderToMobile = function replacePlaceholderToMobile() {
  $('.header-search__input').attr('placeholder', 'Поиск...');
};

var replacePlaceholderToDesktop = function replacePlaceholderToDesktop() {
  $('.header-search__input').attr('placeholder', 'Для поиска введите артикул или название товара...');
};

(function () {
  if (window.matchMedia('(max-width: 767px)').matches) replacePlaceholderToMobile();
  var time;
  $(window).resize(function () {
    if (time) clearTimeout(time);
    time = setTimeout(function () {
      if (window.matchMedia('(max-width: 767px)').matches) {
        replacePlaceholderToMobile();
      } else {
        replacePlaceholderToDesktop();
      }
    }, 5);
  });
})();
"use strict";

var heroSwiperBigConfig = {
  slideClass: 'hero-swiper__item',
  slidesPerView: 1,
  spaceBetween: 10,
  watchOverflow: true,
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    } // 1200: {
    // 	slidesPerView: 6,
    // },

  },
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  navigation: {
    nextEl: '.swiper-button_right',
    prevEl: '.swiper-button_left'
  }
};
var heroSwiperBig = generateSwipers({
  swiperClass: 'hero-swiper_big',
  swiperConfig: heroSwiperBigConfig
});
var heroSwiperSmallConfig = {
  slideClass: 'hero-swiper__item',
  slidesPerView: 1,
  spaceBetween: 15,
  watchOverflow: true,
  breakpoints: {
    768: {
      slidesPerView: 2
    }
  },
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  navigation: {
    nextEl: '.swiper-button_right',
    prevEl: '.swiper-button_left'
  }
};
var heroSwiperSmall = generateSwipers({
  swiperClass: 'hero-swiper_small',
  swiperConfig: heroSwiperSmallConfig
});
"use strict";

var imagesSwiperConfig = {
  init: true,
  slideClass: 'images-swiper__item',
  slidesPerView: 1,
  spaceBetween: 30,
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      init: false,
      allowTouchMove: false
    }
  }
};
var imagesSwiper = generateSwipers({
  swiperClass: 'images-swiper',
  swiperConfig: imagesSwiperConfig
});
updateSwiperOnBreakpoint(['(min-width: 768px)'], ['(max-width: 767px)'], imagesSwiper, 'images-swiper', imagesSwiperConfig);
"use strict";

var itemsSwiperConfig = {
  slideClass: 'items-swiper__item',
  slidesPerView: 2,
  spaceBetween: 0,
  breakpoints: {
    576: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 6
    },
    1200: {
      slidesPerView: 8
    }
  },
  observer: true,
  observerParents: true,
  observeSlideChildren: true
};
var itemsSwipers = generateSwipers({
  swiperClass: 'items-swiper__content',
  swiperConfig: itemsSwiperConfig
});
$('.items-swiper .swiper-button_left').click(function () {
  var swiperIndex = $(this).closest('.items-swiper').find('.items-swiper__content').attr('data-index');
  itemsSwipers[swiperIndex].slidePrev();
});
$('.items-swiper .swiper-button_right').click(function () {
  var swiperIndex = $(this).closest('.items-swiper').find('.items-swiper__content').attr('data-index');
  itemsSwipers[swiperIndex].slideNext();
});
"use strict";

var linksSwiperConfig = {
  slideClass: 'links-swiper__item',
  slidesPerView: 2,
  spaceBetween: 0,
  watchOverflow: true,
  breakpoints: {
    576: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 5
    },
    1200: {
      slidesPerView: 6
    }
  },
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  navigation: {
    nextEl: '.swiper-button_right',
    prevEl: '.swiper-button_left'
  }
};
var linksSwiper = generateSwipers({
  swiperClass: 'links-swiper__content',
  swiperConfig: linksSwiperConfig
});
"use strict";

var makeMobileMenu = function makeMobileMenu() {
  if ($('.main-header-line .header-actions').length) {
    $('.burger-menu__content').append($('.header-actions').clone(true));
    $('.burger-menu__content').append($('.site-sections').clone(true));
    $('.burger-menu__content').append($('.authorization-block').clone(true));
    $('.button_burger').after($('.main-header-line .logo').clone(true));
    $('.top-line__content').append($('.basket:first').clone(true));
    $('.main-header-line .header-actions').remove();
    $('.top-line__center .site-sections').remove();
    $('.top-line__right .authorization-block').remove();
    $('.main-header-line .logo').remove();
    $('.main-header-line .basket').remove();
  }
};

var makeDesktopMenu = function makeDesktopMenu() {
  if ($('.burger-menu .header-actions').length) {
    $('.main-header-line .d-flex.align-items-center').append($('.header-actions').clone(true));
    $('.top-line__center').append($('.site-sections').clone(true));
    $('.top-line__right').append($('.authorization-block').clone(true));
    $('.main-header-line .col-3').append($('.top-line .logo').clone(true));
    $('.main-header-line .d-flex.align-items-center').append($('.basket:first').clone(true));
    $('.burger-menu .header-actions').remove();
    $('.burger-menu .site-sections').remove();
    $('.burger-menu .authorization-block').remove();
    $('.top-line .logo').remove();
    $('.top-line .basket').remove();
  }
};

(function () {
  if (window.matchMedia('(max-width: 991px)').matches) makeMobileMenu();
  var time;
  $(window).resize(function () {
    if (time) clearTimeout(time);
    time = setTimeout(function () {
      if (window.matchMedia('(max-width: 991px)').matches) {
        if ($('.header-search-line_scroll').length) removeScrollHeader();
        makeMobileMenu();
      } else {
        hideMobileMenu();
        makeDesktopMenu();
        if ($('.header-search-line_scroll').length === 0) addScrollHeader();
      }
    }, 5);
  });
})();

var hideMobileMenu = function hideMobileMenu() {
  $('body').removeClass('overflow_hidden');
  $('.burger-menu').addClass('d-none');
  $('.catalog-menu__name_active').removeClass('catalog-menu__name_active');
  $('.catalog-menu_active').removeClass('overflow-hidden');
  $('.catalog-menu_active').removeClass('catalog-menu_active');
  $('.burger-menu .overflow_hidden').removeClass('overflow_hidden');
  $('.burger-menu__content .overlay').addClass('d-none');
  $('.menu-list').addClass('d-none');
  $('.menu-list__item_active').removeClass('overflow-hidden');
  $('.menu-list__item_active').removeClass('menu-list__item_active');
  $('.menu-item_active').removeClass('menu-item_active');
};

$('.button_burger').click(function () {
  $('.burger-menu').toggleClass('d-none');
  $('body').toggleClass('overflow_hidden');

  if ($('.burger-menu').hasClass('d-none')) {
    hideMobileMenu();
  }
});
$('.catalog-menu__name').click(function () {
  if (window.matchMedia('(max-width: 991px)')) {
    $(this).toggleClass('catalog-menu__name_active');
    $('.catalog-menu').toggleClass('catalog-menu_active');
    $('.burger-menu__content').toggleClass('overflow_hidden');
    $('.burger-menu__content > .overlay').toggleClass('d-none');
    $('.menu-list').toggleClass('d-none');
  }
});
$('.menu-item:not(:only-child)').click(function () {
  if (window.matchMedia('(max-width: 991px)').matches) {
    $(this).parent().toggleClass('menu-list__item_active');
    $(this).toggleClass('menu-item_active');
    var addOverlowHiddenNode = $(this).parent().parent().hasClass('menu-list') ? $(this).closest('.catalog-menu_active') : $(this).closest('.submenu-list').closest('.menu-list__item_active');
    addOverlowHiddenNode.toggleClass('overflow_hidden');
  }
});
"use strict";

var partnersSwiperConfig = {
  slidesPerView: 'auto',
  slideClass: 'partners__item',
  loop: true,
  allowTouchMove: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
};
var partnersSwiper = generateSwipers({
  swiperClass: 'partners',
  swiperConfig: partnersSwiperConfig
});
"use strict";

var productSwiper = $('.product-swiper__content').length ? new Swiper('.product-swiper__content', {
  slideClass: 'product-swiper__item',
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    prevEl: '.swiper-button_left',
    nextEl: '.swiper-button_right'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  observer: true,
  observerParents: true,
  observeSlideChildren: true
}) : false;
"use strict";

$('.question').click(function () {
  if ($(this).find('.answer').css('display') === 'none') {
    $(this).find('.answer').show();
    var popper = new Popper(this, $(this).find('.answer'), {
      placement: 'bottom',
      modifiers: {
        arrow: {
          element: $(this).find('.answer__arrow')[0]
        },
        flip: {
          behaivor: ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']
        },
        offset: {
          enabled: true,
          offset: '0,10'
        },
        preventOverflow: {
          enabled: true,
          boundariesElement: $(this).closest('.product-price-block__content')[0]
        }
      }
    });
  } else {
    $(this).find('.answer').hide();
  }
});
"use strict";

$('#quick-order-button').click(function () {
  $.fancybox.open({
    src: '#quick-order-popup',
    type: 'inline',
    touch: false,
    opts: {
      closeBtn: false,
      smallBtn: false,
      buttons: []
    }
  });
});
$('#quick-order-popup .popup-button-close').click(function () {
  $.fancybox.close(true);
});
"use strict";

var reviewsSwiperConfig = {
  slideClass: 'reviews-swiper__item',
  slidesPerView: 1,
  spaceBetween: 0,
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    768: {
      init: false,
      allowTouchMove: false
    }
  }
};
var reviewsSwiper = generateSwipers({
  swiperClass: 'reviews-swiper',
  swiperConfig: reviewsSwiperConfig
});
updateSwiperOnBreakpoint(['(min-width: 768px)'], ['(max-width: 767px)'], reviewsSwiper, 'reviews-swiper', reviewsSwiperConfig);
"use strict";

function addScrollHeader() {
  if (window.pageYOffset <= 118) return;
  $('.header-search-line').addClass('header-search-line_scroll');
  $('.header-search-line .logo').removeClass('d-none');

  if ($('.header-search-line .basket').length === 0) {
    $('.header-search').after($('.main-header-line .basket').clone(true));
  }
}

function removeScrollHeader() {
  $('.header-search-line').removeClass('header-search-line_scroll');
  $('.header-search-line .logo').addClass('d-none');
  $('.header-search-line .basket').remove();
  $('.catalog-menu_fixed').removeClass('catalog-menu_fixed');
}

(function () {
  var time;
  $(window).scroll(function () {
    if (time) clearTimeout(time);
    time = setTimeout(function () {
      if (window.pageYOffset > 118 && window.matchMedia('(min-width: 992px)').matches) addScrollHeader();else removeScrollHeader();
    }, 5);
  });
})();
"use strict";

var searchSections = $('.search-sections');
var searchSectionsSelected = $('.search-sections__selected');
var searcSectionsItem = $('.search-sections__item');
var searchInput = $('.header-search__input');
searchSectionsSelected.text(searchSections.find('.search-sections__item:first').text());
searchSections.click(function () {
  $(this).find('.search-sections__list').toggleClass('d-none');
});
searcSectionsItem.click(function () {
  $(this).parent().parent().find('.search-sections__selected').text($(this).text());
});
searchInput.focus(function () {
  $('.search-sections__list').addClass('d-none');
});
"use strict";

$('button.sidebar-link__link').click(function () {
  $(this).toggleClass('sidebar-link__link_active');
});
"use strict";

$('.tab-button').click(function (e) {
  e.preventDefault();
  $('.tab-button').removeClass('tab-button_active');
  $(this).addClass('tab-button_active');
  var destination = $($(this).attr('href')).offset().top - 112;
  $([document.documentElement, document.body]).animate({
    scrollTop: destination
  }, 300);
});
$(window).scroll(function () {
  if ($('.tab-button').length && window.matchMedia('(min-width: 768px)').matches) {
    var offset = $(window).width() > 991 ? 166 : 245;
    $('.tab-button').each(function (_, el) {
      if ($(el).hasClass('tab-button_active')) return;

      if (document.querySelector(el.getAttribute('href')).getBoundingClientRect().top < offset && document.querySelector(el.getAttribute('href')).getBoundingClientRect().top > 0) {
        $('.tab-button').removeClass('tab-button_active');
        $(el).addClass('tab-button_active');
      }
    });
  }
});
"use strict";

$('.tab-heading').click(function () {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $(this).toggleClass('tab-heading_opened');
  }
});
"use strict";

$(window).scroll(function () {
  var offset = $(window).width() <= 991 ? 142 : 64;

  if (document.querySelector('.tabs__wrapper') && document.querySelector('.tabs__wrapper').getBoundingClientRect().top <= offset && document.querySelector('#tabs').getBoundingClientRect().bottom > offset + 100) {
    $('.tabs').addClass('tabs_fixed');
  } else {
    $('.tabs').removeClass('tabs_fixed');
  }
});
"use strict";

cssVars({
  watch: true,
  include: 'style,link:not([data-ignore])'
});
"use strict";

function updateSwiperOnBreakpoint(breakpointsToDestroy, breakpointsToInit, swipers, swiperClass, swiperConfig) {
  if (!swipers) return;
  breakpointsToDestroy.forEach(function (breakpoint) {
    window.matchMedia(breakpoint).addListener(function () {
      if (window.matchMedia(breakpoint).matches) {
        swipers.forEach(function (swiper) {
          swiper.destroy();
        });
      }
    });

    if (window.matchMedia(breakpoint).matches) {
      swipers.forEach(function (swiper) {
        swiper.destroy();
      });
    }
  });
  breakpointsToInit.forEach(function (breakpoint) {
    window.matchMedia(breakpoint).addListener(function () {
      if (window.matchMedia(breakpoint).matches) {
        swipers.forEach(function (swiper) {
          if (swiper.destroyed) {
            swipers = generateSwipers({
              swiperClass: swiperClass,
              swiperConfig: swiperConfig
            });
          }
        });
      }
    });
  });
}
"use strict";

var videosSwiperConfig = {
  init: true,
  slideClass: 'videos-swiper__item',
  slidesPerView: 1,
  spaceBetween: 30,
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      init: false,
      allowTouchMove: false
    }
  }
};
var videosSwiper = generateSwipers({
  swiperClass: 'videos-swiper',
  swiperConfig: videosSwiperConfig
});
updateSwiperOnBreakpoint(['(min-width: 768px)'], ['(max-width: 767px)'], videosSwiper, 'videos-swiper', videosSwiperConfig);