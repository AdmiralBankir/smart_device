'use strict';
(function () {
  var modal = document.querySelector('.modal');
  var overlay = document.querySelector('.overlay');
  var callBtn = document.querySelector('.page-header__call-btn');
  var closeBtn = modal.querySelector('.modal__button-close');

  callBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--active');
    overlay.classList.add('overlay--active');
  });

  closeBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--active');
    overlay.classList.remove('overlay--active');
  });
})();
