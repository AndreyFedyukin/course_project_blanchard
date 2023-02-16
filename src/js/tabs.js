// ТАБЫ СТРАН
document.querySelectorAll('.catalog__tab-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path
    document.querySelectorAll('.catalog__tab-btn').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('catalog__tab-btn_active')
    });
    document.querySelectorAll('.catalog__content').forEach(function (tabContent) {
      tabContent.classList.remove('catalog__content_active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content_active');
    document.querySelector(`[data-path="${path}"]`).classList.add('catalog__tab-btn_active');
    $('.accordion .catalog__accord-item').accordion('refresh');
    $('.accordion .catalog__accord-item:first-child').accordion('refresh');
  });
});

// ТАБЫ ХУДОЖНИКОВ
let accordBtn = document.querySelectorAll('.accord__btn');
let france = document.querySelectorAll('.catalog__left-france');
let german = document.querySelectorAll('.catalog__left-german');
let italy = document.querySelectorAll('.catalog__left-italy');
let russia = document.querySelectorAll('.catalog__left-russia');
let belgium = document.querySelectorAll('.catalog__left-belgium');

accordBtn.forEach(function (name) {
  name.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path;
    accordBtn.forEach(function (tabsBtn) {
      tabsBtn.classList.remove('accord__btn-active')
    });
    france.forEach(function (f) {
      f.classList.remove('catalog__left-active')
    });
    german.forEach(function (g) {
      g.classList.remove('catalog__left-active')
    });
    italy.forEach(function (i) {
      i.classList.remove('catalog__left-active')
    });
    russia.forEach(function (r) {
      r.classList.remove('catalog__left-active')
    });
    belgium.forEach(function (b) {
      b.classList.remove('catalog__left-active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-active');
    document.querySelector(`[data-path="${path}"]`).classList.add('accord__btn-active');
  });
});