'use strict';
(function () {
  var formElement = document.getElementById('tel');
  var popupElement = document.getElementById('popup-tel');

  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var formMask = IMask(formElement, maskOptions);
  var popupMask = IMask(popupElement, maskOptions);
})();
