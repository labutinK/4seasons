function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Modal = /*#__PURE__*/function () {
  function Modal(id) {
    var _this = this;
    _classCallCheck(this, Modal);
    _defineProperty(this, "_overlayOn", function (_ref) {
      var target = _ref.target;
      if (!target.classList.contains('modal') && !target.closest('.modal')) {
        _this._closeModal();
      }
    });
    _defineProperty(this, "_closeModal", function () {
      _this._modal.setAttribute('data-hidden', true);
      document.removeEventListener('click', _this._overlayOn);
      _this._body.classList.remove('lock');
      setTimeout(function () {
        _this._modalsBackground.classList.remove('modals--active');
        _this._modal.parentNode.removeChild(_this._modal);
      }, 100);
    });
    _defineProperty(this, "_renderModal", function () {
      var item = _this._template.content.cloneNode(true);
      var wrapper = document.createElement('div');
      var closeIcon = document.createElement('div');
      closeIcon.classList.add('modal__close-button');
      wrapper.appendChild(closeIcon);
      wrapper.classList.add('modal');
      wrapper.setAttribute('data-hidden', true);
      wrapper.appendChild(item);
      _this._modalsBackground.appendChild(wrapper);
      setTimeout(function () {
        wrapper.removeAttribute('data-hidden');
      }, 100);
      _this._modal = wrapper;
      if (_this._addLogic) {
        _this._addLogic(wrapper);
      }
      wrapper.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('modal-close-btn') || evt.target.closest('.modal-close-btn')) {
          evt.preventDefault();
          _this._closeModal();
        }
      });
      closeIcon.addEventListener('click', _this._closeModal);
    });
    this._id = id;
    this._btn = document.querySelector("[data-btn-modal='".concat(id, "']"));
    this._template = document.querySelector("#".concat(id));
    if (this._template) {
      this._overlayOn = this._overlayOn.bind(this);
      this._addLogic = function () {};
      this._modalsBackground = document.querySelector('.modals');
      if (!this._modalsBackground) {
        this._modalsBackground = document.createElement('div');
        this._modalsBackground.classList.add('modals');
        document.querySelector('footer').prepend(this._modalsBackground);
      }
      this._modalsBackground = document.querySelector('.modals');
      this._body = document.querySelector('body');
      this._modal = null;
      if (this._btn) {
        this._btn.addEventListener('click', function (evt) {
          evt.preventDefault();
          evt.stopImmediatePropagation();
          _this.modalOpen();
        });
      }
    }
  }
  _createClass(Modal, [{
    key: "setAdditionalLogicAfterSubmit",
    value: function setAdditionalLogicAfterSubmit(func) {
      this._addLogic = func;
      return this;
    }
  }, {
    key: "modalOpen",
    value: function modalOpen() {
      if (this._template) {
        this._modalsBackground.classList.add('modals--active');
        this._body.classList.add('lock');
        this._renderModal(this._template);
        document.addEventListener('click', this._overlayOn);
        return this;
      }
    }
  }]);
  return Modal;
}();
;