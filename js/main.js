'use strict';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i['return'] && ((_r = _i['return']()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
if (document.querySelector('.history__slider')) {
  var swiperMassHistory = new Swiper('.history__slider', {
    speed: 800,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.history__slider-btn--next',
      prevEl: '.history__slider-btn--prev',
    },
    a11y: {
      prevSlideMessage: 'Назад',
      nextSlideMessage: 'Вперёд',
    },
  });
  var getEvery = function getEvery(arr, gap) {
    return Array.from(
      {
        length: Math.floor(arr.length / gap),
      },
      function (_, i) {
        return arr[i * gap + gap - 1];
      }
    );
  };
  var slidesHistory = document.querySelectorAll('.history__slide');
  if (window.screen.width <= 768) {
    slidesHistory.forEach(function (el, index, arr) {
      el.addEventListener('click', function () {
        var prevEl = el.previousElementSibling;
        var firstElIndex = index !== 0;
        var endElIndex = index !== Array.from(arr).length - 1;
        if (prevEl && prevEl.classList.contains('active') && endElIndex) {
          swiperMassHistory.slideNext();
        }
        if (el.classList.contains('active') && firstElIndex && endElIndex) {
          swiperMassHistory.slidePrev();
        }
        arr.forEach(function (el) {
          return el.classList.remove('active');
        });
        el.classList.add('active');
      });
    });
  } else {
    var everyFourStart = getEvery(slidesHistory, 4);
    var everyFourEnd = getEvery(Array.from(slidesHistory).reverse(), 4);
    everyFourStart.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        swiperMassHistory.slideNext();
      });
    });
    everyFourEnd.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        swiperMassHistory.slidePrev();
      });
    });
    document.querySelectorAll('.history__year').forEach(function (el, index) {
      el.addEventListener('mouseenter', function () {
        slidesHistory.forEach(function (el) {
          return el.classList.remove('active');
        });
        slidesHistory[index].classList.add('active');
      });
    });
  }
  var swiperMassMedia = new Swiper('.mass-media__slider', {
    speed: 800,
    breakpoints: {
      769: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: '1.8%',
      },
      100: {
        slidesPerGroup: 1,
        slidesPerView: 'auto',
        spaceBetween: '5%',
      },
    },
    navigation: {
      nextEl: '.mass-media__slider-btn--next',
      prevEl: '.mass-media__slider-btn--prev',
    },
    a11y: {
      prevSlideMessage: 'Назад',
      nextSlideMessage: 'Вперёд',
    },
  });
  var swiperVacancies = new Swiper('.vacancies__slider', {
    speed: 800,
    breakpoints: {
      769: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: '1.8%',
      },
      100: {
        slidesPerGroup: 1,
        slidesPerView: 'auto',
        spaceBetween: '4.5%',
      },
    },
    navigation: {
      nextEl: '.vacancies__slider-btn--next',
      prevEl: '.vacancies__slider-btn--prev',
    },
    a11y: {
      prevSlideMessage: 'Назад',
      nextSlideMessage: 'Вперёд',
    },
  });
}
$('#menu-open').on('click', function () {
  $('#menu').toggleClass('active');
});
if (document.querySelector('.hero__slider')) {
  if (window.screen.width <= 768) {
    var swiperHero = new Swiper('.hero__slider', {
      speed: 800,
      slidesPerView: 'auto',
      spaceBetween: '4.6%',
    });
  }
  var swiperProjects = new Swiper('.projects__slider', {
    speed: 800,
    breakpoints: {
      769: {
        slidesPerGroup: 6,
        slidesPerView: 6,
        spaceBetween: '1.515%',
      },
      100: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: '5.7%',
        grid: {
          rows: 2,
        },
      },
    },
    navigation: {
      nextEl: '.projects__slider-btn--next',
      prevEl: '.projects__slider-btn--prev',
    },
    a11y: {
      prevSlideMessage: 'Назад',
      nextSlideMessage: 'Вперёд',
    },
  });
  $('.investment__tab-btn').each(function () {
    $(this).on('click', function () {
      $('.investment__tab, .investment__tab-btn').each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
      $('#'.concat($(this).data('tab'))).addClass('active');
    });
  });
  $('.projects__slide').each(function () {
    $(this).on('click', function () {
      $('.projects__slide, .projects__content-box').each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
      $('[data-projecttabdesc="'.concat($(this).data('projecttab'), '"]')).addClass('active');
    });
  });
  if (window.screen.width > 768) {
    var onWheel = function onWheel(e) {
      e = e || window.event;
      var delta = e.deltaY || e.detail || e.wheelDelta;
      var scroll = Math.sign(delta);
      var activeEl = $('.investment__tab.active');
      var prevEl = activeEl.prev();
      var nextEl = activeEl.next();
      if (scroll === -1 && prevEl.length !== 0) {
        activeEl.removeClass('active');
        prevEl.addClass('active');
      } else if (scroll === 1 && nextEl.length !== 0) {
        activeEl.removeClass('active');
        nextEl.addClass('active');
      }
      if ((scroll === -1 && prevEl.length !== 0) || (scroll === 1 && nextEl.length !== 0))
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      else return;
    };
    var elemWheelVisible = false;
    var elemWheel = document.getElementById('investment');
    var observerInvestment = new IntersectionObserver(
      function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          entry = _ref2[0];
        return (elemWheelVisible = entry.isIntersecting);
      },
      {
        threshold: [1],
      }
    );
    observerInvestment.observe(document.getElementById('investment-box'));
    if (elemWheel.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+, Ch31+
        elemWheel.addEventListener('wheel', onWheel);
      } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elemWheel.addEventListener('mousewheel', onWheel);
      } else {
        // Firefox < 17
        elemWheel.addEventListener('MozMousePixelScroll', onWheel);
      }
    } else {
      // IE8-
      elemWheel.attachEvent('onmousewheel', onWheel);
    }
  }
}
ymaps.ready(init);
function init() {
  var map = new ymaps.Map(
    'map',
    {
      center: [55.75825332522441, 37.61908892590332],
      zoom: 12,
    },
    {
      searchControlProvider: 'yandex#search',
      suppressObsoleteBrowserNotifier: true,
    }
  );
  var placemark = new ymaps.Placemark(
    [55.75825332522441, 37.61908892590332],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'data:image/svg+xml,'.concat(
        encodeURIComponent(
          "<svg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='35' cy='35' r='34.5' stroke='white' stroke-dasharray='6 6'/><mask id='mask0_750_294' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='14' y='14' width='42' height='42'><circle cx='35' cy='35' r='20.5' fill='white' stroke='white' stroke-dasharray='6 6'/></mask><g mask='url(#mask0_750_294)'><line x1='1.76026' y1='27.0143' x2='46.5155' y2='2.56101' stroke='white'/><line x1='3.19869' y1='29.6469' x2='47.954' y2='5.19357' stroke='white'/><line x1='4.63712' y1='32.2797' x2='49.3924' y2='7.82639' stroke='white'/><line x1='6.07555' y1='34.9123' x2='50.8308' y2='10.459' stroke='white'/><line x1='7.51398' y1='37.5451' x2='52.2693' y2='13.0918' stroke='white'/><line x1='8.95242' y1='40.1777' x2='53.7077' y2='15.7243' stroke='white'/><line x1='10.3908' y1='42.8102' x2='55.1461' y2='18.3569' stroke='white'/><line x1='11.8293' y1='45.4431' x2='56.5845' y2='20.9897' stroke='white'/><line x1='13.2677' y1='48.0756' x2='58.023' y2='23.6223' stroke='white'/><line x1='14.7062' y1='50.7082' x2='59.4614' y2='26.2549' stroke='white'/><line x1='16.1446' y1='53.341' x2='60.8999' y2='28.8877' stroke='white'/><line x1='17.583' y1='55.9736' x2='62.3383' y2='31.5202' stroke='white'/><line x1='19.0214' y1='58.6064' x2='63.7767' y2='34.153' stroke='white'/><line x1='20.4599' y1='61.239' x2='65.2151' y2='36.7856' stroke='white'/><line x1='21.8983' y1='63.8715' x2='66.6536' y2='39.4182' stroke='white'/><line x1='23.3367' y1='66.5043' x2='68.092' y2='42.051' stroke='white'/><line x1='24.7752' y1='69.1369' x2='69.5304' y2='44.6836' stroke='white'/><line x1='26.2136' y1='71.7697' x2='70.9689' y2='47.3164' stroke='white'/><line x1='27.652' y1='74.4023' x2='72.4073' y2='49.9489' stroke='white'/><line x1='29.0905' y1='77.0349' x2='73.8457' y2='52.5815' stroke='white'/><line x1='30.5289' y1='79.6677' x2='75.2842' y2='55.2143' stroke='white'/><g filter='url(#filter0_d_750_294)'><rect x='31' y='31' width='8' height='8' rx='4' fill='#E5554F'/></g></g><defs><filter id='filter0_d_750_294' x='25' y='26' width='24' height='24' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'><feFlood flood-opacity='0' result='BackgroundImageFix'/><feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/><feOffset dx='2' dy='3'/><feGaussianBlur stdDeviation='4'/><feComposite in2='hardAlpha' operator='out'/><feColorMatrix type='matrix' values='0 0 0 0 0.883333 0 0 0 0 0.478472 0 0 0 0 0.478472 0 0 0 1 0'/><feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_750_294'/><feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_750_294' result='shape'/></filter></defs></svg>"
        )
      ),
      iconImageSize: [54, 70],
      iconImageOffset: [-3, -42],
    }
  );
  map.geoObjects.add(placemark);
  map
    .panTo([55.75825332522441, 37.61908892590332], {
      flying: true,
    })
    .then(function () {
      map.setZoom(12);
    });

  // Убираем все элементы управления с карты
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('routeButtonControl');
  map.controls.remove('geolocationControl');
  map.controls.remove('routeEditor');
  map.controls.remove('routePanelControl');
  map.controls.remove('masstransit');
  map.controls.remove('rulerControl');
}
if (document.querySelector('.projects-main__tab')) {
  $('.projects-main__tab').each(function () {
    $(this).on('click', function () {
      $('.projects-main__tab').each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
    });
  });
  var swiperProjectsMain = new Swiper('.projects-main__slider', {
    speed: 800,
    loop: true,
    observer: true,
    spaceBetween: '-20%',
    slidesPerView: 9,
  });
  $('.projects-main__card').each(function () {
    $(this).on('mouseover', function () {
      if ($(this).parent().next().children(this).hasClass('active')) {
        swiperProjectsMain.slidePrev();
      } else if ($(this).parent().prev().children(this).hasClass('active')) {
        swiperProjectsMain.slideNext();
      }
      $('.projects-main__content-box, .projects-main__card').each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active hover');
      $('#'.concat($(this).data('project'))).addClass('active');
    });
    $(this).on('mouseout', function () {
      $(this).removeClass('hover');
    });
  });
}

//# sourceMappingURL=main.js.map
