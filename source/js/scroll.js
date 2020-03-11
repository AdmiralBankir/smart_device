'use strict';
(function () {

  var setAnchorScroll = function (anchor) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();
      var id = anchor.getAttribute('href').substr(1);
      var block = document.getElementById(id);
      if (block) {
        block.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  };

  var anchors = document.querySelectorAll('a[href*="#"]');

  for (var i = 0; i < anchors.length; i++) {
    setAnchorScroll(anchors[i]);
  }

})();
