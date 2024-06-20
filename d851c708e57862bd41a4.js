document.addEventListener("DOMContentLoaded", function (event) {
  var formElement = document.querySelector('[data-form-profile]');
  if (formElement) {
    var validator = new FormValidator(formElement);
    var resultBox = formElement.querySelector('.form-body__results');
    formElement.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      validator.submit(function () {
        resultBox.setAttribute('data-success', true);
        setTimeout(function () {
          resultBox.removeAttribute('data-success');
        }, 2000);
      }, function () {
        console.log('error');
      });
    });
  }
  var formAuth = document.querySelector('[data-form-auth]');
  if (formAuth) {
    var _validator = new FormValidator(formAuth);
    formAuth.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      _validator.submit(function () {
        var template = document.querySelector("#login-success");
        var item = template.content.cloneNode(true);
        formAuth.closest('.auth-body__wrapper').replaceWith(item);
      }, function () {
        console.log('error');
      });
    });
  }
});