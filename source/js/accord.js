'use strict';
(function () {
  var pageFooter = document.querySelector('.page-footer');

  var footerNavList = pageFooter.querySelector('.page-footer__navigation ul');
  var navToogle = document.querySelector('.page-footer__navigation .accord-btn');

  var footerAddrList = pageFooter.querySelector('.page-footer__office-location address');
  var addrToggle = document.querySelector('.page-footer__office-location .accord-btn');


  pageFooter.classList.remove('page-footer--nojs');
  navToogle.classList.remove('accord-btn--opened');


  navToogle.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (navToogle.classList.contains('accord-btn--opened')) {
      footerNavList.style.display = 'none';
      navToogle.classList.remove('accord-btn--opened');
    } else {
      footerNavList.style.display = 'flex';
      navToogle.classList.add('accord-btn--opened');
    }
  });

  addrToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (addrToggle.classList.contains('accord-btn--opened')) {
      footerAddrList.style.display = 'none';
      addrToggle.classList.remove('accord-btn--opened');
    } else {
      footerAddrList.style.display = 'flex';
      addrToggle.classList.add('accord-btn--opened');
    }
  });

})();
