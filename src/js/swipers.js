// СВАЙПЕР HEADER
const header = new Swiper('.header__swiper-container', {
  loop: true,
  effect: 'slide',
  noSwiping: false,
  grabCursor: true,
  IOSEdgeSwipeDetection: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,
  simulateTouch: true,
  speed: 450,
  observer: true,
  observeParents: true,
  parallax: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
});

// СВАЙПЕР ГАЛЕРЕИ
const gallery = new Swiper('.gallery__swiper-container', {
  loop: false,

  IOSEdgeSwipeDetection: true,

  onTouchStart: function () {
    return false;
  },

  pagination: {
    el: '.gallery__swiper-pagination_upper',
    type: 'fraction',
    clickable: true,
  },

  navigation: {
    nextEl: '.gallery__swiper-btn-next',
    prevEl: '.gallery__swiper-btn-prev',
  },

  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 50
    },

    951: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 34
    },

    831: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 34,
    },

    681: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 34,
    },

    381: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 30,
    },

    319: {
      slidesPerView: 1,
    },
  }
});

// СВАЙПЕР СОБЫТИЙ
(function () {

  'use strict';

  const breakpoint = window.matchMedia('(min-width: 531px)');

  let eventsSwiper;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (eventsSwiper !== undefined) eventsSwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    eventsSwiper = new Swiper('.events__swiper-container', {
      loop: true,

      IOSEdgeSwipeDetection: true,

      onTouchStart: function () {
        return false;
      },

      spaceBetween: 27,
      pagination: {
        el: '.events__swiper-pagination',
        clickable: true,
      },
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

})();

// СВАЙПЕР ИЗДАНИЙ
(function () {

  'use strict';

  const breakpoint = window.matchMedia('(max-width: 681px)');

  let editionsSwiper;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (editionsSwiper !== undefined) editionsSwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return breakSwiper();
    }
  };

  const breakSwiper = function () {
    editionsSwiper = new Swiper('.editions__swiper-container', {
      loop: false,

      IOSEdgeSwipeDetection: true,

      onTouchStart: function () {
        return false;
      },

      pagination: {
        el: '.editions__swiper-pagination',
        type: 'fraction',
        clickable: true,
      },

      navigation: {
        nextEl: '.editions__swiper-btn-next',
        prevEl: '.editions__swiper-btn-prev',
      },

      breakpoints: {
        1201: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },

        1025: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },

        951: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },

        769: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 34,
        },

        681: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
      }
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

})();

// СВАЙПЕР ПРОЕКТОВ
const projects = new Swiper('.projects__swiper-container', {
  loop: true,

  IOSEdgeSwipeDetection: true,

  onTouchStart: function () {
    return false;
  },

  navigation: {
    nextEl: '.projects__swiper-btn-next',
    prevEl: '.projects__swiper-btn-prev',
  },

  breakpoints: {
    1340: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    751: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    577: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    
    320: {
      slidesPerView: 1,
      spaceBetween: 21,
    },
  }
});