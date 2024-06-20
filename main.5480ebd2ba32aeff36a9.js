/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/header */ "./src/js/header.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_circle_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-circle-progress */ "./node_modules/js-circle-progress/dist/circle-progress.js");
/* harmony import */ var _js_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/catalog */ "./src/js/catalog.js");
/* harmony import */ var _js_catalog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_catalog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_lk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/lk */ "./src/js/lk.js");
/* harmony import */ var _js_lk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_lk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inputmask_lib_inputmask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inputmask/lib/inputmask.js */ "./node_modules/inputmask/lib/inputmask.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");








swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectCards, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Controller]);
document.addEventListener("DOMContentLoaded", function (event) {
  var header = document.querySelector('.header');
  new _js_header__WEBPACK_IMPORTED_MODULE_2__.SeasonsHeader(header);
  var inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
      var _this$closest;
      // Добавляем класс при фокусировке
      (_this$closest = this.closest('.form-input')) === null || _this$closest === void 0 || _this$closest.setAttribute('data-focused', true);
    });
    input.addEventListener("blur", function () {
      var _this$closest2;
      // Удаляем класс при снятии фокуса
      (_this$closest2 = this.closest('.form-input')) === null || _this$closest2 === void 0 || _this$closest2.removeAttribute('data-focused');
    });
  });
  var timerElements = document.querySelectorAll('.timer');
  if (timerElements.length) {
    timerElements.forEach(function (timerElement) {
      var timestamp = parseInt(timerElement.getAttribute('data-timestamp'), 10) * 1000;
      var dayElement = timerElement.querySelector('.day');
      var hourElement = timerElement.querySelector('.hour');
      var minElement = timerElement.querySelector('.min');
      var secElement = timerElement.querySelector('.sec');
      var dayLabelElement = timerElement.querySelector('.day-label');
      var hourLabelElement = timerElement.querySelector('.hour-label');
      var minLabelElement = timerElement.querySelector('.min-label');
      var secLabelElement = timerElement.querySelector('.sec-label');
      var getDeclension = function getDeclension(number, words) {
        number = Math.abs(number) % 100;
        var lastDigit = number % 10;
        if (number > 10 && number < 20) {
          return words[2];
        }
        if (lastDigit > 1 && lastDigit < 5) {
          return words[1];
        }
        if (lastDigit == 1) {
          return words[0];
        }
        return words[2];
      };
      var updateTimer = function updateTimer() {
        var now = new Date().getTime();
        var distance = timestamp - now;
        if (distance < 0) {
          dayElement.textContent = '0';
          hourElement.textContent = '0';
          minElement.textContent = '0';
          secElement.textContent = '0';
          dayLabelElement.textContent = 'ДНЕЙ';
          hourLabelElement.textContent = 'ЧАС';
          minLabelElement.textContent = 'МИН';
          secLabelElement.textContent = 'СЕК';
          clearInterval(interval);
          return;
        }
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);
        dayElement.textContent = days;
        hourElement.textContent = hours;
        minElement.textContent = minutes;
        secElement.textContent = seconds;
        dayLabelElement.textContent = getDeclension(days, ['ДЕНЬ', 'ДНЯ', 'ДНЕЙ']);
        hourLabelElement.textContent = getDeclension(hours, ['ЧАС', 'ЧАСА', 'ЧАСОВ']);
        minLabelElement.textContent = getDeclension(minutes, ['МИНУТА', 'МИНУТЫ', 'МИНУТ']);
        secLabelElement.textContent = getDeclension(seconds, ['СЕКУНДА', 'СЕКУНДЫ', 'СЕКУНД']);
      };
      var interval = setInterval(updateTimer, 1000);
      updateTimer();
    });
  }
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".welcome .swiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      prevEl: '.welcome__navigation .seasons-nav__arrow--left',
      nextEl: '.welcome__navigation .seasons-nav__arrow--right'
    }
  });
  var sectionsWithProducts = document.querySelectorAll('.popular__content .swiper');
  if (sectionsWithProducts.length) {
    sectionsWithProducts.forEach(function (sectionWithProducts) {
      new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sectionWithProducts, {
        grid: {
          rows: 1 // Устанавливаем количество строк
        },
        spaceBetween: 0,
        slidesPerView: "auto",
        breakpoints: {
          1241: {
            grid: {
              rows: 1 // Устанавливаем количество строк
            },
            spaceBetween: 16,
            slidesPerView: 4
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
            grid: {
              rows: 2 // Устанавливаем количество строк
            }
          }
        }
      });
    });
  }
  function scrollToElementWithHeaderOffset(element, header) {
    var headerHeight = document.querySelector('header').offsetHeight; // Высота хедера
    var elementPosition = element.getBoundingClientRect().top; // Позиция элемента относительно верхней границы окна
    var offsetPosition = elementPosition - headerHeight; // Позиция с учетом высоты хедера

    // Прокручиваем страницу на нужное расстояние
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  var tabsBlock = document.querySelectorAll('[data-tabs]');
  if (tabsBlock.length) {
    tabsBlock.forEach(function (tabsBlock) {
      var btns = tabsBlock.querySelectorAll('[data-tab]');
      var blocks = tabsBlock.querySelectorAll('[data-tab-block]');
      var _iterator = _createForOfIteratorHelper(btns),
        _step;
      try {
        var _loop = function _loop() {
          var btn = _step.value;
          btn.addEventListener('click', function () {
            var id = parseInt(btn.getAttribute('data-tab'));
            var _iterator2 = _createForOfIteratorHelper(blocks),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var block = _step2.value;
                if (parseInt(block.getAttribute('data-tab-block')) === id) {
                  block.setAttribute('data-active', '');
                  scrollToElementWithHeaderOffset(block);
                } else {
                  block.removeAttribute('data-active');
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            btn.setAttribute('data-active', '');
            var _iterator3 = _createForOfIteratorHelper(btns),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var otherBtn = _step3.value;
                if (parseInt(otherBtn.getAttribute('data-tab')) !== id) {
                  otherBtn.removeAttribute('data-active');
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }
  var sectionsProducts = document.querySelectorAll('.section-products');
  if (sectionsProducts.length > 0) {
    sectionsProducts.forEach(function (sectionsProduct) {
      var id = sectionsProduct.getAttribute('data-tab-block');
      var swiper = document.querySelector("[data-tab-block='".concat(id, "'] .swiper"));
      new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](swiper, {
        spaceBetween: 16,
        slidesPerView: "auto",
        navigation: {
          prevEl: "[data-tab-block='".concat(id, "'] .seasons-nav__arrow--left"),
          nextEl: "[data-tab-block='".concat(id, "'] .seasons-nav__arrow--right")
        }
      });
    });
  }
  var doProportionIcon = function doProportionIcon(icons) {
    var _iterator4 = _createForOfIteratorHelper(icons),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var icon = _step4.value;
        var widthAttr = icon.getAttribute('width');
        var widthReal = icon.clientWidth;
        var heightAttr = icon.getAttribute('height');
        var heightReal = widthReal / widthAttr * heightAttr;
        icon.style.height = "".concat(heightReal, "px");
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  };
  var icons = document.querySelectorAll('.icon-pr');
  if (icons.length) {
    doProportionIcon(icons);
    window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function () {
      doProportionIcon(icons);
    }, 300));
  }
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".product-description__thumb-slider .swiper", {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 3,
    direction: "horizontal",
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        spaceBetween: 12,
        direction: "vertical"
      }
    }
  });
  var swiper2 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".product-description__big-slider .swiper", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper
    },
    navigation: {
      prevEl: '.product-description__big-slider .seasons-nav__arrow--left',
      nextEl: '.product-description__big-slider .seasons-nav__arrow--right'
    }
  });
  var modalSwitcher = function modalSwitcher() {
    // v3 дописана динамическая вставка контейнера modals с оверлеем
    var modalBackground = document.querySelector('.modals');
    if (!modalBackground) {
      modalBackground = document.createElement('div');
      modalBackground.classList.add('modals');
      document.querySelector('footer').prepend(modalBackground);
    }
    modalBackground = document.querySelector('.modals');
    var body = document.querySelector('body');
    var modal = null;
    var renderModal = function renderModal(templateId) {
      var template = document.querySelector("#".concat(templateId));
      var item = template.content.cloneNode(true);
      var wrapper = document.createElement('div');
      var closeIcon = document.createElement('div');
      closeIcon.classList.add('modal__close-button');
      wrapper.appendChild(closeIcon);
      wrapper.classList.add('modal');
      wrapper.setAttribute('data-hidden', true);
      wrapper.appendChild(item);
      modalBackground.appendChild(wrapper);
      setTimeout(function () {
        wrapper.removeAttribute('data-hidden');
      }, 100);
      modal = wrapper;
      var form = wrapper.querySelector('.form');
      if (form) {
        var validator = new FormValidator(form);
        form.addEventListener('submit', function (e) {
          validator.submit(function () {}, function () {
            e.preventDefault();
            e.stopImmediatePropagation();
          });
        });
      }
      closeIcon.addEventListener('click', closeModal);
    };
    var overlayOn = function overlayOn(_ref) {
      var target = _ref.target;
      if (!target.classList.contains('modal') && !target.closest('.modal')) {
        closeModal();
      }
    };
    var modalOpen = function modalOpen(item) {
      var templateId = item.getAttribute('data-btn-modal');
      if (document.querySelector("#".concat(templateId))) {
        modalBackground.classList.add('modals--active');
        body.classList.add('lock');
        renderModal(templateId);
        document.addEventListener('click', overlayOn);
      }
    };
    var closeModal = function closeModal() {
      modal.setAttribute('data-hidden', true);
      document.removeEventListener('click', overlayOn);
      setTimeout(function () {
        modalBackground.classList.remove('modals--active');
        modal.parentNode.removeChild(modal);
      }, 100);
    };
    var openButtons = document.querySelectorAll('[data-btn-modal]');
    if (openButtons.length) {
      var _iterator5 = _createForOfIteratorHelper(openButtons),
        _step5;
      try {
        var _loop2 = function _loop2() {
          var item = _step5.value;
          item.addEventListener('click', function (evt) {
            if (item.hasAttribute('data-btn-modal')) {
              evt.preventDefault();
              evt.stopImmediatePropagation();
              modalOpen(item);
            }
          });
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  };
  modalSwitcher();
  var reviewSuccess = "<div class=\"result-modal\">\n            <div class=\"result-modal__icon\">\n            <svg width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M31.9987 10.6666C20.2166 10.6666 10.6654 20.2178 10.6654 31.9999C10.6654 43.782 20.2166 53.3333 31.9987 53.3333C43.7808 53.3333 53.332 43.782 53.332 31.9999C53.332 20.2178 43.7808 10.6666 31.9987 10.6666ZM5.33203 31.9999C5.33203 17.2723 17.2711 5.33325 31.9987 5.33325C46.7263 5.33325 58.6654 17.2723 58.6654 31.9999C58.6654 46.7275 46.7263 58.6666 31.9987 58.6666C17.2711 58.6666 5.33203 46.7275 5.33203 31.9999ZM44.437 23.3402C45.5378 24.3186 45.6369 26.0041 44.6585 27.1049L30.4362 43.1049C29.9302 43.6742 29.2048 43.9999 28.4431 43.9999C27.6814 43.9999 26.9561 43.6742 26.4501 43.1049L19.3389 35.1049C18.3605 34.0041 18.4596 32.3186 19.5604 31.3402C20.6611 30.3617 22.3467 30.4609 23.3251 31.5616L28.4431 37.3194L40.6723 23.5616C41.6507 22.4609 43.3363 22.3617 44.437 23.3402Z\" fill=\"#1eb2e8\"></path>\n            </svg>\n            </div>\n            <div class=\"result-modal__title\">\u041E\u0442\u0437\u044B\u0432 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D!</div>\n            <div class=\"result-modal__desc\">\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0443\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F!</div>\n        </div>";
  document.querySelector('body').addEventListener('submit', function (evt) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
    var type = evt.target.getAttribute('data-form');
    if (type === 'review') {
      var tempContainer = document.createElement('div');
      tempContainer.innerHTML = reviewSuccess;
      evt.target.closest('.review-modal__wrapper').replaceWith(tempContainer.firstChild);
    }
  });

  // temp
  var viewBoxxxx = document.querySelector('.delivery-box');
  if (viewBoxxxx) {
    var viewBoxItems = viewBoxxxx.querySelectorAll('.delivery-box__choice');
    viewBoxItems.forEach(function (viewBoxItem) {
      viewBoxItem.addEventListener('click', function (evt) {
        if (!viewBoxItem.classList.contains('delivery-box__choice--active')) {
          var activeCur = viewBoxxxx.querySelector('.delivery-box__choice--active');
          if (activeCur) {
            activeCur === null || activeCur === void 0 || activeCur.classList.remove('delivery-box__choice--active');
          }
          viewBoxItem.classList.add('delivery-box__choice--active');
        }
      });
    });
  }
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".auth-banner__slider.swiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.auth-banner__pagination',
      type: 'bullets'
    }
  });
});

/***/ }),

/***/ "./src/js/catalog.js":
/*!***************************!*\
  !*** ./src/js/catalog.js ***!
  \***************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", function (event) {
  var filterBox = document.querySelector('.catalog-sort');
  if (filterBox) {
    var filterBoxTop = filterBox.querySelector('.catalog-sort__current');
    var filterBoxList = filterBox.querySelector('.catalog-sort__body');
    var filterBoxItems = filterBox.querySelectorAll('.catalog-sort__item-to-choose');
    var clickOutBoxHandler = function clickOutBoxHandler(_ref) {
      var target = _ref.target;
      if (!target.classList.contains('catalog-sort__current') && !target.closest('.catalog-sort__current')) {
        filterBoxList.removeAttribute('data-active');
      }
    };
    filterBoxItems.forEach(function (filterBoxItem) {
      filterBoxItem.addEventListener('click', function (evt) {
        if (!filterBoxItem.hasAttribute('data-active')) {
          var activeCur = filterBoxList.querySelector('[data-active]');
          activeCur === null || activeCur === void 0 || activeCur.removeAttribute('data-active');
          filterBoxItem.setAttribute('data-active', true);
          filterBoxTop.textContent = filterBoxItem.textContent;
        }
      });
    });
    filterBoxTop.addEventListener('click', function (evt) {
      if (filterBoxList.getAttribute('data-active')) {
        filterBoxList.removeAttribute('data-active');
      } else {
        filterBoxList.setAttribute('data-active', true);
        document.addEventListener('click', clickOutBoxHandler);
      }
    });
  }
  var viewBox = document.querySelector('.catalog-view');
  if (viewBox) {
    var catalog = viewBox.closest('.catalog__wrapper');
    var viewBoxItems = viewBox.querySelectorAll('.catalog-view__way');
    viewBoxItems.forEach(function (viewBoxItem) {
      viewBoxItem.addEventListener('click', function (evt) {
        if (!viewBoxItem.hasAttribute('data-active')) {
          var activeCur = viewBox.querySelector('[data-active]');
          if (activeCur) {
            var catalogClass = activeCur.getAttribute('data-class');
            activeCur === null || activeCur === void 0 || activeCur.removeAttribute('data-active');
            if (catalogClass) {
              catalog.classList.remove("".concat(catalogClass));
            }
          }
          var newCatalogClass = viewBoxItem.getAttribute('data-class');
          if (newCatalogClass) {
            catalog.classList.add("".concat(newCatalogClass));
          }
          viewBoxItem.setAttribute('data-active', true);
        }
      });
    });
  }
  var catalogMoreBtns = document.querySelectorAll('.catalog-filter__more');
  if (catalogMoreBtns.length) {
    catalogMoreBtns.forEach(function (catalogMoreBtn) {
      var itemsBlock = catalogMoreBtn.closest('.catalog-filter__items');
      catalogMoreBtn.addEventListener('click', function () {
        var collapsedStatus = itemsBlock.getAttribute('data-collapsed');
        if (collapsedStatus === 'true') {
          itemsBlock.setAttribute('data-collapsed', false);
          catalogMoreBtn.textContent = catalogMoreBtn.getAttribute('data-hide');
        } else {
          itemsBlock.setAttribute('data-collapsed', true);
          catalogMoreBtn.textContent = catalogMoreBtn.getAttribute('data-show');
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeasonsHeader: function() { return /* binding */ SeasonsHeader; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var SeasonsHeader = /*#__PURE__*/function () {
  function SeasonsHeader(header) {
    var _this = this;
    _classCallCheck(this, SeasonsHeader);
    _defineProperty(this, "_clickOutBurger", function (_ref) {
      var target = _ref.target;
      if (!_this._header.hasAttribute('data-animating')) {
        if (!target.classList.contains('header') && !target.closest('header')) {
          _this._closeBurger();
        }
      }
    });
    this._header = header;
    this._scrolledLogic = this._scrolledLogic.bind(this);
    this._clickOutCatalog = this._clickOutCatalog.bind(this);
    this._body = document.querySelector('body');
    this._burgerIcon = this._header.querySelector('.header__burger-icon');
    this._burger = this._header.querySelector('.header-burger');
    this._headerTopWraper = this._header.querySelector('.header__top');
    this._deliveryBox = this._header.querySelector('.delivery-box');
    this._main = document.querySelector('main');
    this._catalogBtn = this._header.querySelector('.header__catalog-btn');
    this._catalog = this._header.querySelector('.header-catalog');
    this._catalogCategories = this._header.querySelectorAll('[data-catalog-tab]');
    this._categoriesItems = new Map();
    this._addHandlers();
    this._isDesktop = window.innerWidth >= 992;
    this._isMobile = window.innerWidth < 768;
    this._lastScrollTop = 0;
    this._scrollThreshold = 150;
    this._scrolledLogic();
    if (this._isMobile) {
      this._burger.prepend(this._deliveryBox);
    }
  }
  _createClass(SeasonsHeader, [{
    key: "_openBurger",
    value: function _openBurger() {
      var _this2 = this;
      this._header.setAttribute('data-open', true);
      this._burgerIcon.setAttribute('data-open', true);
      this._body.classList.add('blocked');
      document.addEventListener('click', this._clickOutBurger);
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.slideDown)(this._burger, 300, function () {
        _this2._header.removeAttribute('data-animating');
      });
    }
  }, {
    key: "_resetStylesForDesktop",
    value: function _resetStylesForDesktop() {
      this._burger.style = '';
      this._burgerIcon.removeAttribute('data-open');
      this._header.removeAttribute('data-open');
      this._body.classList.remove('blocked');
      this._isDesktop = true;
    }
  }, {
    key: "_closeBurger",
    value: function _closeBurger() {
      var _this3 = this;
      this._burgerIcon.removeAttribute('data-open');
      document.removeEventListener('click', this._clickOutBurger);
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.slideUp)(this._burger, 300, function () {
        _this3._header.removeAttribute('data-animating');
        _this3._header.removeAttribute('data-open');
        _this3._body.classList.remove('blocked');
      });
    }
  }, {
    key: "_addHandlers",
    value: function _addHandlers() {
      var _this4 = this;
      this._burgerIcon.addEventListener('click', function () {
        if (!_this4._header.hasAttribute('data-animating')) {
          _this4._header.setAttribute('data-animating', true);
          if (_this4._header.hasAttribute('data-open')) {
            _this4._closeBurger();
          } else {
            _this4._openBurger();
          }
        }
      });
      window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        _this4._isDesktop = window.innerWidth >= 992;
        if (window.innerWidth < 768 && !_this4._isMobile) {
          _this4._burger.prepend(_this4._deliveryBox);
        } else if (_this4._isMobile && window.innerWidth >= 768) {
          _this4._headerTopWraper.prepend(_this4._deliveryBox);
        }
        if (window.innerWidth < 992) {
          _this4._closeCatalog();
        }
        _this4._isMobile = window.innerWidth < 768;
        if (_this4._isDesktop) {
          _this4._resetStylesForDesktop();
        }
      }, 100));
      window.addEventListener('scroll', this._scrolledLogic);
      this._catalogBtn.addEventListener('click', function () {
        if (!_this4._catalog.hasAttribute('data-animating')) {
          _this4._catalog.setAttribute('data-animating', true);
          if (_this4._catalog.hasAttribute('data-open')) {
            _this4._closeCatalog();
          } else {
            _this4._openCatalog();
          }
          _this4._catalog.removeAttribute('data-animating');
        }
      });
      this._catalogCategories.forEach(function (cat, ind) {
        var id = cat.getAttribute('data-catalog-tab');
        var subCat = _this4._header.querySelector("[data-catalog-box=\"".concat(id, "\"]"));
        if (subCat) {
          _this4._categoriesItems.set(cat, {
            submenuElement: subCat,
            timeoutId: null,
            open: ind === 0
          });
          cat.addEventListener('mouseenter', _this4._categoryMouseEnterHandler.bind(_this4, cat));
          cat.addEventListener('mouseleave', _this4._categoryMouseLeaveHandler.bind(_this4, cat));
        }
      });
    }
  }, {
    key: "_closeSubcat",
    value: function _closeSubcat(category) {
      var submenu = this._categoriesItems.get(category);
      var submenuElement = submenu.submenuElement;
      if (submenuElement) {
        submenuElement.classList.remove('header-catalog__sub--active');
        category.classList.remove('header-catalog__category--active');
        submenu.open = false;
      }
    }
  }, {
    key: "_openSubCat",
    value: function _openSubCat(category) {
      var submenu = this._categoriesItems.get(category);
      var submenuElement = submenu.submenuElement;
      if (submenuElement) {
        submenuElement.classList.add('header-catalog__sub--active');
        category.classList.add('header-catalog__category--active');
        submenu.open = true;
      }
    }
  }, {
    key: "_closeAllSubCategories",
    value: function _closeAllSubCategories() {
      var _iterator = _createForOfIteratorHelper(this._categoriesItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            category = _step$value[0],
            submenu = _step$value[1];
          if (submenu.open === true) {
            this._closeSubcat(category);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_categoryMouseEnterHandler",
    value: function _categoryMouseEnterHandler(category) {
      var _this5 = this;
      if (this._categoriesItems.has(category)) {
        var submenu = this._categoriesItems.get(category);
        submenu.timeoutId = setTimeout(function () {
          _this5._closeAllSubCategories();
          _this5._openSubCat(category);
        }, 50);
      }
    }
  }, {
    key: "_categoryMouseLeaveHandler",
    value: function _categoryMouseLeaveHandler(category) {
      var submenu = this._categoriesItems.get(category);
      if (submenu.timeoutId) {
        clearTimeout(submenu.timeoutId);
        submenu.timeoutId = null;
      }
    }
  }, {
    key: "_openFirstCategory",
    value: function _openFirstCategory() {
      var i = 0;
      var _iterator2 = _createForOfIteratorHelper(this._categoriesItems),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            category = _step2$value[0],
            submenu = _step2$value[1];
          if (i === 0) {
            this._openSubCat(category);
          }
          i++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "_closeCatalog",
    value: function _closeCatalog() {
      this._catalog.removeAttribute('data-open');
      this._catalogBtn.removeAttribute('data-active');
      this._body.classList.remove('overlayed');
      this._closeAllSubCategories();
      this._openFirstCategory();
    }
  }, {
    key: "_clickOutCatalog",
    value: function _clickOutCatalog(_ref2) {
      var target = _ref2.target;
      if (!this._catalog.hasAttribute('data-animating')) {
        if (!target.classList.contains('header') && !target.closest('header')) {
          this._closeCatalog();
        }
      }
    }
  }, {
    key: "_openCatalog",
    value: function _openCatalog() {
      this._catalog.setAttribute('data-open', true);
      this._catalogBtn.setAttribute('data-active', true);
      this._body.classList.add('overlayed');
      document.addEventListener('click', this._clickOutCatalog);
    }
  }, {
    key: "_alignHeader",
    value: function _alignHeader() {
      var doPadding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this._main) {
        if (doPadding) {
          var height = this._header.getBoundingClientRect().height;
          if (window.innerWidth >= 992) {
            height += this._header.querySelector('.header__top').getBoundingClientRect().height;
          }
          this._main.style.paddingTop = "".concat(height, "px");
        } else {
          this._main.style.paddingTop = "0";
        }
      }
    }
  }, {
    key: "_scrolledLogic",
    value: function _scrolledLogic() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > this._scrollThreshold) {
        if (scrollTop < this._lastScrollTop) {
          this._header.classList.add('header--scrolled-up');
          this._header.classList.remove('header--scrolled-down');
        } else {
          this._header.classList.add('header--scrolled-down');
          this._header.classList.remove('header--scrolled-up');
        }
        this._alignHeader();
      } else {
        this._header.classList.remove('header--scrolled-up');
        this._header.classList.remove('header--scrolled-down');
        this._alignHeader(false);
      }
      this._lastScrollTop = scrollTop;
    }
  }]);
  return SeasonsHeader;
}();

/***/ }),

/***/ "./src/js/lk.js":
/*!**********************!*\
  !*** ./src/js/lk.js ***!
  \**********************/
/***/ (function() {

var orderSettingBoxes = document.querySelectorAll('.order-settings-box');
if (orderSettingBoxes.length) {
  orderSettingBoxes.forEach(function (orderSettingBox) {
    var orderSettingBoxTop = orderSettingBox.querySelector('.order-settings-box__icon');
    var orderSettingBoxList = orderSettingBox.querySelector('.order-settings-box__list');
    var orderSettingBoxItems = orderSettingBox.querySelectorAll('.order-settings-box__list a');
    var clickOutBoxHandler = function clickOutBoxHandler(_ref) {
      var target = _ref.target;
      if (!target.classList.contains('order-settings-box__icon') && !target.closest('.order-settings-box__icon')) {
        orderSettingBoxList.removeAttribute('data-active');
      }
    };
    orderSettingBoxItems.forEach(function (orderSettingBoxItem) {
      orderSettingBoxItem.addEventListener('click', function (evt) {
        if (!orderSettingBoxItem.hasAttribute('data-active')) {
          var activeCur = orderSettingBoxList.querySelector('[data-active]');
          activeCur === null || activeCur === void 0 || activeCur.removeAttribute('data-active');
          orderSettingBoxItem.setAttribute('data-active', true);
        }
      });
    });
    orderSettingBoxTop.addEventListener('click', function (evt) {
      if (orderSettingBoxList.getAttribute('data-active')) {
        orderSettingBoxList.removeAttribute('data-active');
      } else {
        orderSettingBoxList.setAttribute('data-active', true);
        document.addEventListener('click', clickOutBoxHandler);
      }
    });
  });
}

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slideDown: function() { return /* binding */ slideDown; },
/* harmony export */   slideUp: function() { return /* binding */ slideUp; }
/* harmony export */ });
/* unused harmony exports slideToggle, modalSwitcher */
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.boxSizing = 'border-box';
  target.style.height = "".concat(target.offsetHeight, "px");
  // eslint-disable-next-line no-unused-expressions
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    callback();
  }, duration);
};

/* SLIDE DOWN */
var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') {
    display = 'block';
  }
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  // eslint-disable-next-line no-unused-expressions
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.height = "".concat(height, "px");
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    callback();
  }, duration);
};

/* TOOGLE */
var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};
var modalSwitcher = function modalSwitcher() {
  // v3 дописана динамическая вставка контейнера modals с оверлеем
  var modalBackground = document.querySelector('.modals');
  if (!modalBackground) {
    modalBackground = document.createElement('div');
    modalBackground.classList.add('modals');
    document.querySelector('footer').prepend(modalBackground);
  }
  modalBackground = document.querySelector('.modals');
  var body = document.querySelector('body');
  var modals = document.querySelectorAll('.modal');
  var _iterator = _createForOfIteratorHelper(modals),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var modal = _step.value;
      if (!modalBackground.contains(modal)) {
        modalBackground.appendChild(modal);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var modalOpen = function modalOpen(item) {
    var _iterator2 = _createForOfIteratorHelper(modals),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var modal = _step2.value;
        if (!modalBackground.contains(modal)) {
          modalBackground.appendChild(modal);
        }
        if (modal.getAttribute('data-modal') === item.getAttribute('data-btn-modal')) {
          modal.removeAttribute('data-hidden');
        } else {
          modal.setAttribute('data-hidden', '');
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    modalBackground.classList.add('modals--active');
    body.classList.add('lock');
  };
  var closeModals = function closeModals() {
    var _iterator3 = _createForOfIteratorHelper(modals),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var modal = _step3.value;
        modal.setAttribute('data-hidden', '');
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    setTimeout(function () {
      modalBackground.classList.remove('modals--active');
      body.classList.remove('lock');
    }, 300);
  };
  var openButtons = document.querySelectorAll('[data-btn-modal]');
  if (openButtons.length) {
    var _iterator4 = _createForOfIteratorHelper(openButtons),
      _step4;
    try {
      var _loop = function _loop() {
        var item = _step4.value;
        item.addEventListener('click', function (evt) {
          if (item.hasAttribute('data-btn-modal')) {
            evt.preventDefault();
            modalOpen(item);
          }
        });
      };
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var closeBtns = document.querySelectorAll('.modal__close-button');
    var _iterator5 = _createForOfIteratorHelper(closeBtns),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var item = _step5.value;
        item.addEventListener('click', function () {
          closeModals();
        });
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    window.addEventListener('mousedown', function (e) {
      if (!document.querySelector('.modal').contains(e.target) && e.target === modalBackground) {
        closeModals();
      }
    });
  }
};
var accordeons = document.querySelectorAll('.faq-item');
if (accordeons.length) {
  var _iterator6 = _createForOfIteratorHelper(accordeons),
    _step6;
  try {
    var _loop2 = function _loop2() {
      var accordeon = _step6.value;
      var button = accordeon.querySelector('.faq-item__question');
      button.addEventListener('click', function () {
        var _iterator7 = _createForOfIteratorHelper(accordeons),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var otherAccordeon = _step7.value;
            if (otherAccordeon !== accordeon) {
              otherAccordeon.classList.remove('faq-item--active');
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        accordeon.classList.add('faq-item--active');
      });
    };
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
}

// faq-page
var faqs = document.querySelectorAll('.faq-block');
if (faqs.length) {
  var _iterator8 = _createForOfIteratorHelper(faqs),
    _step8;
  try {
    var _loop3 = function _loop3() {
      var accordeon = _step8.value;
      var button = accordeon.querySelector('.faq-block__question');
      var answer = accordeon.querySelector('.faq-block__answer');
      button.addEventListener('click', function () {
        if (accordeon.classList.contains('faq-block--active')) {
          slideUp(answer, 300, function () {});
          accordeon.classList.remove('faq-block--active');
        } else {
          var _iterator9 = _createForOfIteratorHelper(faqs),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var otherAccordeon = _step9.value;
              if (otherAccordeon !== accordeon) {
                otherAccordeon.classList.remove('faq-block--active');
                var otherAnswer = otherAccordeon.querySelector('.faq-block__answer');
                slideUp(otherAnswer, 300, function () {});
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
          slideDown(answer, 300, function () {});
          accordeon.classList.add('faq-block--active');
        }
      });
    };
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
}

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhefo"] = self["webpackChunkhefo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.5480ebd2ba32aeff36a9.js.map