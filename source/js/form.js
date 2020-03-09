/*eslint-disable*/
'use strict';
(function () {
  window.addEventListener('DOMContentLoaded', function () {
    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {

        var range = elem.createTextRange();

        range.collapse(true);

        range.moveEnd('character', pos);

        range.moveStart('character', pos);

        range.select();

      }

    }

    function mask(event) {

      var matrix = '+7(___)___-__-__';

      var i = 0;

      var def = matrix.replace(/\D/g, '');

      var val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
        if (this.value.length === 2) {
          this.value = '';
        }

      } else {
        setCursorPosition(this.value.length, this);
      }

    }

    var input = document.querySelector('form input[type=tel]');
    var checkbox = document.querySelector('form input[type=checkbox]');
    var btn = document.querySelector('form button[type=submit]');

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        btn.removeAttribute('disabled');
      } else {
        btn.setAttribute('disabled', true);
      }
    });

    input.addEventListener('input', mask, false);

    input.addEventListener('focus', mask, false);

    input.addEventListener('blur', mask, false);



  });

})();
