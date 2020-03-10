'use strict';
(function () {
  var modal = document.querySelector('.modal');
  var form = modal.querySelector('form');
  var overlay = document.querySelector('.overlay');
  var callBtn = document.querySelector('.page-header__call-btn');
  var closeBtn = modal.querySelector('.modal__button-close');

  var userName = modal.querySelector('input[name=user-name]');
  var userPhone = modal.querySelector('input[name=user-phone-number]');
  var userQuestion = modal.querySelector('textarea[name=user-question]');

  var isStorageSupport = true;
  var storageName = '';
  var storagePhone = '';

  try {
    storageName = localStorage.getItem('userName');
    storagePhone = localStorage.getItem('userPhone');
  } catch (err) {
    isStorageSupport = false;
  }

  callBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--active');
    overlay.classList.add('overlay--active');

    if (storageName && storagePhone) {
      userName.value = storageName;
      userPhone.value = storagePhone;
      userQuestion.focus();
    } else {
      userName.focus();
    }
  });

  closeBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--active');
    overlay.classList.remove('overlay--active');
  });

  form.addEventListener('submit', function () {
    if (isStorageSupport) {
      localStorage.setItem('userName', userName.value);
      localStorage.setItem('userPhone', userPhone.value);
    }
  });
})();
