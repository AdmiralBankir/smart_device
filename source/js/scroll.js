'use strict';
(function () {
  var anchors = document.querySelectorAll('a[href*="#"]');
  anchors.forEach(function (anchor) {
    var id = anchor.getAttribute('href').substr(1);
    var block = document.getElementById(id);
    if (block) {
      block.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
})();
