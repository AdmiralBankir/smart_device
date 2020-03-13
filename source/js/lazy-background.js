'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var lazyloadImages;

  if ('IntersectionObserver' in window) {
    lazyloadImages = document.querySelectorAll('.services__list-item--lazy');
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove('services__list-item--lazy');
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  }
});

