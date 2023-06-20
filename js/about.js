'use strict';

$('#menu-open').on('click', function () {
  $('#menu').toggleClass('active');
});
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
var everyFourStart = getEvery(slidesHistory, window.screen.width <= 768 ? 2 : 4);
var everyFourEnd = getEvery(Array.from(slidesHistory).reverse(), window.screen.width <= 768 ? 2 : 4);
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

//# sourceMappingURL=about.js.map
