const formSubmit = (selector, nextStep = null, successFunc = null, errorFunc = null) => {
  const form = document.querySelector(`${selector}`);
  if (form) {
    const validator = new FormValidator(form);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      const fd = new FormData(form);

      validator.submit(() => {
        if (nextStep) {
          const item = nextStep.content.cloneNode(true);
          form.closest('[data-replace-wrapper]')?.replaceWith(item);
        }
        if (successFunc) {
          successFunc(fd);
        }
      }, () => {
        if (errorFunc) {
          errorFunc();
        }
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", (event) => {

  formSubmit('[data-form-reg1]', document.getElementById('registration-approve'), () => {
    formSubmit('[data-form-reg-approve]', document.getElementById('reg-success'));
  });
  formSubmit('[data-form-reg2]', document.getElementById('registration-approve'), () => {
    formSubmit('[data-form-reg-approve]', document.getElementById('reg-success'));
  });

  formSubmit('[data-form-recovery]', document.getElementById('recovery-success'), () => {
  });

  formSubmit('[data-form-auth]', document.getElementById('login-success'), () => {
  });


  formSubmit('[data-form-profile]', null, () => {
    const resultBox = document.querySelector('.form-body__results');
    resultBox.setAttribute('data-success', true);
    setTimeout(() => {
      resultBox.removeAttribute('data-success');
    }, 2000);
  });


  //way 1
  new Modal('bdbd2').setAdditionalLogicAfterSubmit((wrapper) => {
    formSubmit('[data-form="new-manager"]', document.getElementById('managerAdded'), () => {
    });
  });

  function initManagerMap() {
    var myPlacemark,
        myMap = new ymaps.Map('modal-map', {
          center: [55.753994, 37.622093],
          zoom: 9
        }, {
          searchControlProvider: 'yandex#search'
        });

    // Слушаем клик на карте.
    myMap.events.add('click', function (e) {
      var coords = e.get('coords');

      if (myPlacemark) {
        myPlacemark.geometry.setCoordinates(coords);
      } else {
        myPlacemark = createPlacemark(coords);
        myMap.geoObjects.add(myPlacemark);
        myPlacemark.events.add('dragend', function () {
          getAddress(myPlacemark.geometry.getCoordinates());
        });
      }
      getAddress(coords);
    });

    function createPlacemark(coords) {
      return new ymaps.Placemark(coords, {
        iconCaption: 'поиск...'
      }, {
        preset: 'islands#violetDotIconWithCaption',
        draggable: true
      });
    }

    function getAddress(coords) {
      if (!myPlacemark) return;

      myPlacemark.properties.set('iconCaption', 'поиск...');
      ymaps.geocode(coords).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);

        if (!firstGeoObject) {
          console.error('Геокодирование не вернуло результатов');
          return;
        }

        var address = firstGeoObject.getAddressLine();
        myPlacemark.properties.set({
          iconCaption: [
            firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
          ].filter(Boolean).join(', '),
          balloonContent: address
        });

        document.getElementById('addressInput').value = address;
      }).catch(function (err) {
        console.error('Ошибка при геокодировании: ', err);
      });
    }

    // Обрабатываем изменение значения в input
    var addressInput = document.getElementById('addressInput');
    addressInput.addEventListener('input', function () {
      var address = this.value;
      if (address.length > 3) {
        ymaps.suggest(address).then(function (items) {
          var datalist = document.getElementById('addressSuggestions');
          datalist.innerHTML = '';
          items.forEach(function (item) {
            var option = document.createElement('option');
            option.value = item.value;
            datalist.appendChild(option);
          });
        });
      }
    });


    const addressChanged = (address) => {
      ymaps.geocode(address).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);
        if (!firstGeoObject) {
          console.error('Геокодирование не вернуло результатов');
          return;
        }
        var coords = firstGeoObject.geometry.getCoordinates();
        if (myPlacemark) {
          myPlacemark.geometry.setCoordinates(coords);
        } else {
          myPlacemark = createPlacemark(coords);
          myMap.geoObjects.add(myPlacemark);
        }
        myMap.setCenter(coords, 14);
        getAddress(coords);
      }).catch(function (err) {
        console.error('Ошибка при геокодировании адреса: ', err);
      });
    }

    addressInput.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        var address = this.value;
        addressChanged(address);
      }
    });


    addressInput.addEventListener('change', function () {
      var address = this.value;
      addressChanged(address);

    });
  }


  new Modal('delivery-modal').setAdditionalLogicAfterSubmit((wrapper) => {
    const map = wrapper.querySelector('#modal-map');
    if (map) {
      ymaps.ready(initManagerMap);
    }
    formSubmit('[data-form="choose-delivery"]', document.getElementById('deliveryChoosed'), () => {
    });
    formSubmit('[data-form="choose-delivery2"]', document.getElementById('deliveryChoosed'), () => {
    });
  }).modalOpen();

  new Modal('new-address').setAdditionalLogicAfterSubmit((wrapper) => {
    const map = wrapper.querySelector('#modal-map');
    if (map) {
      ymaps.ready(initManagerMap);
    }
    formSubmit('[data-form="new-address"]', document.getElementById('addressSuccess'), () => {
    });
  });


  //way 2
  new Modal('fff1').setAdditionalLogicAfterSubmit((wrapper) => {
    formSubmit('[data-form="review"]', null, (fd) => {
      const reviewSuccess = `<div class="result-modal">
            <div class="result-modal__icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.9987 10.6666C20.2166 10.6666 10.6654 20.2178 10.6654 31.9999C10.6654 43.782 20.2166 53.3333 31.9987 53.3333C43.7808 53.3333 53.332 43.782 53.332 31.9999C53.332 20.2178 43.7808 10.6666 31.9987 10.6666ZM5.33203 31.9999C5.33203 17.2723 17.2711 5.33325 31.9987 5.33325C46.7263 5.33325 58.6654 17.2723 58.6654 31.9999C58.6654 46.7275 46.7263 58.6666 31.9987 58.6666C17.2711 58.6666 5.33203 46.7275 5.33203 31.9999ZM44.437 23.3402C45.5378 24.3186 45.6369 26.0041 44.6585 27.1049L30.4362 43.1049C29.9302 43.6742 29.2048 43.9999 28.4431 43.9999C27.6814 43.9999 26.9561 43.6742 26.4501 43.1049L19.3389 35.1049C18.3605 34.0041 18.4596 32.3186 19.5604 31.3402C20.6611 30.3617 22.3467 30.4609 23.3251 31.5616L28.4431 37.3194L40.6723 23.5616C41.6507 22.4609 43.3363 22.3617 44.437 23.3402Z" fill="#1eb2e8"></path>
            </svg>
            </div>
            <div class="result-modal__title">Отзыв отправлен!</div>
            <div class="result-modal__desc">Спасибо за уделенное время!</div>
        </div>`;
      const tempContainer = document.createElement('div');
      tempContainer.innerHTML = reviewSuccess;
      wrapper.querySelector('.modal-form__wrapper')?.replaceWith(tempContainer.firstChild);
    });
  });


});
