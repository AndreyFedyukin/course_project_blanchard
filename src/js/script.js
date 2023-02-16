'use strict';

// БУРГЕР
let menu = document.querySelector('.nav__burger');

document.querySelector('.nav__burger-btn').addEventListener("click", function () {
  menu.classList.toggle('nav__burger-active');
  document.querySelector(".nav__burger-close").addEventListener("click", function () {
    document.querySelector(".nav__burger").classList.remove("nav__burger-active");
  })
})

menu.addEventListener("transitionend", function () {
  if (!menu.classList.contains("nav__burger-active")) {
    menu.removeAttribute('style');
  }
  else {
    menu.style = "visibility: visible";
  }
})

// ПОИСК
let search = document.querySelector('.nav__btn-search');
let form = document.querySelector('.nav__form');
let formLabel = document.querySelector('.nav__label');
let logo = document.querySelector('.header__logo');
let burgerBtn = document.querySelector('.nav__burger-btn');
let navClose = document.querySelector('.nav__close');
let nav = document.querySelector('.nav');
let navContainer = document.querySelector('.nav__container');

search.addEventListener('click', function () {
  formLabel.classList.toggle('nav__label_active');
  form.classList.toggle('nav__form_expand');
})

if ($(window).width() < 769) {
  search.addEventListener('click', function () {
    logo.classList.toggle('header__logo_disable');
    burgerBtn.classList.toggle('nav__burger-btn_disable');
    navClose.classList.toggle('nav__close_active');
  })

  navClose.addEventListener('click', function () {
    logo.classList.remove('header__logo_disable');
    burgerBtn.classList.remove('nav__burger-btn_disable');
    form.classList.remove('nav__form_expand');
    formLabel.classList.remove('nav__label_active');
    navClose.classList.remove('nav__close_active');
  })
}

if ($(window).width() < 321) {
  search.addEventListener('click', function () {
    nav.classList.toggle('nav_search-expand');
    navContainer.classList.toggle('nav__container_expand');
  })

  navClose.addEventListener('click', function () {
    nav.classList.remove('nav_search-expand');
    navContainer.classList.remove('nav__container_expand');
  })
}

// ВЫПАДАЮЩИЕ МЕНЮ
document.body.addEventListener("click", function (event) {

  if (event.target.classList.contains("menu__btn")) {

    const path = event.target.dataset.path;

    document.querySelectorAll('.menu__dropdown').forEach(function (dropdown) {
      if (dropdown.dataset.target !== path) {
        dropdown.classList.remove('menu__dropdown-active');
      }
    });

    document.querySelectorAll('.menu__btn').forEach(function (btn) {
      if (btn.dataset.path !== path) {
        btn.classList.remove('menu__btn_active');
      }
    });

    document.querySelector(`[data-target="${path}"]`).classList.toggle('menu__dropdown-active');

    document.querySelector(`[data-path="${path}"]`).classList.toggle('menu__btn_active');

  } 
  
  else if (event.target.closest(".menu__dropdown") === null) {
    
    document.querySelectorAll('.menu__dropdown').forEach(function (dropdown) {
      dropdown.classList.remove('menu__dropdown-active');
    });

    document.querySelectorAll('.menu__btn').forEach(function (btn) {
      btn.classList.remove('menu__btn_active');
    });

  }

})

// МОДАЛКИ ГАЛЕРЕЯ
let modalWrap = document.querySelector(".gallery__modal-wrap");
let modalWindow = document.querySelectorAll(".gallery__modal-window");
let btns = document.querySelectorAll('.gallery__hover');
let close = document.querySelectorAll(".gallery__modal-close");

btns.forEach(function (btns) {
  btns.addEventListener("click", function (el) {
    let path = el.currentTarget.dataset.path;

    document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal-window_active');
    modalWrap.classList.add('gallery__modal-wrap_active');
  });

  window.addEventListener("click", function (event) {
    if (event.target == modalWrap) {
      modalWrap.classList.remove('gallery__modal-wrap_active');

      modalWindow.forEach(function (zoom) {
        zoom.classList.remove('gallery__modal-window_active')
      });
    }
  })

  close.forEach(function (zoom) {
    zoom.addEventListener("click", function () {
      modalWrap.classList.remove('gallery__modal-wrap_active');

      modalWindow.forEach(function (zoom) {
        zoom.classList.remove('gallery__modal-window_active')
      });
    });
  });
})

// СЕЛЕКТ ГАЛЕРЕИ
const gallerySelect = document.querySelector('.gallery__select');
const choices = new Choices(gallerySelect, {
  searchEnabled: false,
});

// АККОРДЕНЫ В ТАБАХ
$('.accordion .catalog__accord-item').accordion({
  collapsible: true,
  active: false,
});

$('.accordion .catalog__accord-item:first-child').accordion({
  collapsible: true,
  active: 0,
});

// КНОПКА ВСЕ СОБЫТИЯ
let btnEvent = document.querySelector(".events__btn");
let eventsHidden = document.querySelectorAll('.events__hidden');
btnEvent.addEventListener("click", showEvent);

function showEvent() {
  eventsHidden.forEach(function (el) {
    el.classList.toggle('events__show');
  })
  btnEvent.innerHTML = (btnEvent.innerHTML === 'Все события') ? btnEvent.innerHTML = 'Скрыть всё' : btnEvent.innerHTML = 'Все события';

  btnEvent.classList.toggle('events__btn_margin');
};

// СПОЙЛЕР ИЗДАНИЙ
if ($(window).width() < 681) {
  let categories = document.querySelector('.editions__categories');
  let checkboxes = document.querySelectorAll('.editions__checkbox-label:not(:nth-child(4))');
  let icon = document.querySelector('.editions__categories-icon');
  let address = document.querySelector('.contacts__wrap .contacts__text');

  function changeText() {
    address.innerHTML = 'Покровский бульвар, дом 24, строение 3';
  }
  changeText();

  categories.addEventListener("click", function () {
    checkboxes.forEach(function (el) {
      el.classList.toggle('editions__checkbox-label_active');
    });
    categories.classList.toggle('arrow-rotate');
    icon.classList.toggle('editions__categories-icon_rotate');
  })
}

let input = document.querySelector('.editions__checkbox_design');
function addAttribute() {
  input.setAttribute("checked", "");
}
addAttribute();

// ЯКОРЯ
const anchors = document.querySelectorAll('a[href*="#"]')

function setSmoothScroll(target, duration) {
  const elem = document.querySelector(target);
  const targetPosition = elem.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    const progress = currentTime - startTime;
    const run = easeInOutCubic(progress, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (progress < duration) {
      requestAnimationFrame(animation);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };

  requestAnimationFrame(animation);
}

anchors.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const href = anchor.getAttribute('href');
    setSmoothScroll(href, 1000);
  });
});

// ФОРМА
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
})

// КАРТА

// lazyload для яндекс-карты
function showMap() {
  const contactsMap = document.querySelector('.contacts__map');
  if (contactsMap.getBoundingClientRect().top - document.documentElement.clientHeight < 0) {
    ymaps.ready(init);
    this.removeEventListener('scroll', showMap);
  }
}

window.addEventListener('scroll', showMap);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.758463, 37.601079],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 13
  });

  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.758463, 37.601079] // координаты точки
    }
  });

  var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {
    hintContent: 'Шоурум №4, Леонтьевский переулок, дом 5, строение 1'
  },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/8-contacts/map.svg',
      iconImageSize: [20, 20],
      balloonImageSize: [0, 0],
    });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

// ОТМЕНА ХОВЕРОВ НА МОБИЛКАХ
function hasTouch() {
  return 'ontouchstart' in document.documentElement
    || navigator.maxTouchPoints > 0
    || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all the :hover stylesheets
  try { // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) { }
}




