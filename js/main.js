'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
          }),
    _typeof(obj)
  );
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
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
if (document.querySelector('.articles__slider')) {
  var swiperArticle = new Swiper('.articles__slider', {
    speed: 800,
    breakpoints: {
      769: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: '2.4%',
      },
      100: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: '5%',
      },
    },
    navigation: {
      nextEl: '.articles__slider-btn--next',
      prevEl: '.articles__slider-btn--prev',
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
  document.addEventListener('DOMContentLoaded', function () {
    var bannerVideo = document.getElementById('banner-video');
    if (window.screen.width > 768) {
      var contentHero = document.getElementById('content-hero');
      var playPromise = bannerVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(function (_) {
            setTimeout(function () {
              window.scrollTo({
                top: 0,
              });
              bannerVideo.pause();
              bannerVideo.classList.add('hidden');
              contentHero.classList.add('active');
            }, bannerVideo.duration * 1000 - 100);
          })
          ['catch'](function (error) {
            console.log(error);
          });
      }
    } else bannerVideo.remove();
  });
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
    var _Swiper;
    var onWheel = function onWheel(e) {
      e = e || window.event;
      var delta = e.deltaY || e.detail || e.wheelDelta;
      var scroll = Math.sign(delta);
      var first = $('.investment__tab').first().hasClass('swiper-slide-active');
      var last = $('.investment__tab').last().hasClass('swiper-slide-active');

      // if (first) {
      //   console.log(scroll === -1);
      //   if (scroll === -1) swiperInvestment.mousewheel.disable();
      //   else swiperInvestment.mousewheel.enable();
      // }
      // console.log(scroll);

      if (scroll === -1 || scroll === 1) e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      else return;
    };
    var swiperInvestment = new Swiper(
      '.investment__slider',
      ((_Swiper = {
        speed: 1500,
        slidesPerView: 'auto',
      }),
      _defineProperty(_Swiper, 'slidesPerView', 1),
      _defineProperty(_Swiper, 'allowTouchMove', false),
      _defineProperty(_Swiper, 'mousewheel', {
        sensitivity: 1.5,
      }),
      _defineProperty(_Swiper, 'on', {
        scroll: function scroll(swiper, e) {
          $('.investment__tab-btn').each(function () {
            $(this).removeClass('active left');
          });
          $('.investment__tab')
            .not('.swiper-slide-active')
            .each(function () {
              var tabBtn = $("[data-tab='".concat($(this).attr('id'), "']"));
              tabBtn.addClass('active');
              if ($('.investment__tab').last().hasClass('swiper-slide-active')) tabBtn.addClass('left');
            });
        },
      }),
      _Swiper)
    );
    var elemWheel = document.getElementById('investment');
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
    $('.investment__tab-btn').each(function () {
      $(this).on('click', function () {
        $(this).removeClass('active');
        swiperInvestment.slideTo($('#'.concat($(this).data('tab'))).index());
        $('.investment__tab-btn')
          .not($(this))
          .each(function () {
            $(this).removeClass('left');
            $(this).addClass('active '.concat($('.investment__tab').last().hasClass('swiper-slide-active') ? 'left' : ''));
          });
      });
    });
  } else {
    $('.investment__tab-btn').each(function () {
      $(this).on('click', function () {
        $('.investment__tab, .investment__tab-btn').each(function () {
          $(this).removeClass('active');
        });
        $(this).addClass('active');
        $('#'.concat($(this).data('tab'))).addClass('active');
      });
    });
  }
}
if ($('#additionally-btn').length !== 0) {
  $('#additionally-btn').on('click', function () {
    $(this).toggleClass('active');
    $('#additionally-box').toggleClass('active');
    $(function () {
      $('#industry').selectmenu();
    });
  });
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
  var projectsTab = $('.projects-main__tab-link');
  var projectsDropdownBtn = $('.projects-main__dropdown-btn');
  var projectsDropdown = $('.projects-main__tabs');
  projectsTab.each(function () {
    $(this).on('click', function () {
      projectsTab.each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
      if (window.screen.width < 768) {
        projectsDropdownBtn.children('span').text($(this).text());
        projectsDropdownBtn.removeClass('active');
        projectsDropdownBtn.parent().removeClass('active');
        projectsDropdown.slideUp();
        $('body').css({
          overflow: 'auto',
        });
      }
    });
  });
  if (window.screen.width < 768) {
    projectsDropdownBtn.on('click', function () {
      $(this).toggleClass('active');
      $(this).parent().toggleClass('active');
      projectsDropdown.slideToggle();
      if ($(this).hasClass('active'))
        $('body').css({
          overflow: 'hidden',
        });
      else
        $('body').css({
          overflow: 'auto',
        });
    });
  }
  var swiperProjectsMain = new Swiper('.projects-main__slider', {
    speed: 800,
    loop: true,
    observer: true,
    slidesPerView: 4,
    breakpoints: {
      769: {
        slidesPerView: 4,
        spaceBetween: '-50%',
      },
      100: {
        initialSlide: 5,
        slidesPerView: 4,
        spaceBetween: '-16%',
      },
    },
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
if ($('.smartmoney-investment').length !== 0) {
  var dropdown = function dropdown() {
    $(this).toggleClass('active').next().slideToggle();
    if (dropdownBtn.not('.active').length === 0) dropdownAll.addClass('hidden');
    else dropdownAll.removeClass('hidden');
    if (window.screen.width < 768) {
      var dropdownEl = $(this).next();
      if (dropdownBtn.not('.active').length === 0) {
        $('.smartmoney-investment__dropdown').each(function () {
          $(this).removeClass('active');
        });
        dropdownAll.addClass('active');
      } else {
        if (!$(this).is(dropdownBtn.last()) && $(this).hasClass('active')) {
          $('.smartmoney-investment__dropdown').each(function () {
            $(this).removeClass('active');
          });
          dropdownAll.addClass('hidden');
          dropdownEl.addClass('active');
          setTimeout(function () {
            dropdownAll
              .css({
                top: ''.concat(Math.round(dropdownEl.position().top + dropdownEl.outerHeight()), 'px'),
              })
              .removeClass('hidden')
              .addClass('active');
          }, 500);
        } else if ($(this).not('.active')) {
          $('.smartmoney-investment__dropdown').each(function () {
            $(this).removeClass('active');
          });
          dropdownAll.removeClass('active').removeClass('hidden');
        }
      }
    } else {
      if (dropdownBtn.last().hasClass('active')) dropdownAll.addClass('hidden');
      else dropdownAll.removeClass('hidden');
    }
  };
  var dropdownBtn = $('.smartmoney-investment__tab-box.active')
    .children('.smartmoney-investment__dropdown-box')
    .children('.smartmoney-investment__dropdown-btn');
  var dropdownAll = $('.smartmoney-investment__dropdown--all');
  if (window.screen.width < 768)
    $('.smartmoney-investment__tab-container').css({
      'grid-row': '2',
    });
  $('.smartmoney-investment__tab').each(function (index) {
    $(this).on('click', function () {
      $('.smartmoney-investment__tab, .smartmoney-investment__tab-box').each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
      $("[data-tab-smartmoney='".concat($(this).attr('id'), "']")).addClass('active');
      if (window.screen.width < 768)
        $('.smartmoney-investment__tab-container').css({
          'grid-row': ''.concat(index + 2),
        });
      dropdownBtn = $('.smartmoney-investment__tab-box.active')
        .children('.smartmoney-investment__dropdown-box')
        .children('.smartmoney-investment__dropdown-btn');
      dropdownBtn.each(function () {
        $(this).removeClass('active').next().slideUp();
        $(this).off('click', dropdown);
        $(this).on('click', dropdown);
      });
      dropdownAll.removeClass('hidden').removeClass('active');
    });
  });
  dropdownBtn.each(function () {
    $(this).on('click', dropdown);
  });
  dropdownAll.on('click', function () {
    dropdownBtn.each(function () {
      $(this).addClass('active').next().slideDown();
    });
    $(this).addClass('hidden');
    if (window.screen.width < 768) {
      $(this).addClass('active');
      $('.smartmoney-investment__dropdown').each(function () {
        $(this).removeClass('active');
      });
    }
  });
}

//# sourceMappingURL=main.js.map
