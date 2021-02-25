'use strict';
(function () {

  var footer = document.querySelector('.footer');
  var footerNavToggle = document.querySelector('.footer__toggle--nav');
  var footerContactToggle = document.querySelector('.footer__toggle--contact');
  var footerNavMenu = document.querySelector('.footer__nav');
  var footerContactMenu = document.querySelector('.footer__contact');

  if (footer) {
    footer.classList.remove('footer--nojs');

    var navToggleClickHandler = function (evt) {
      if (footerNavMenu.classList.contains('list--menu-hide')) {
        footerNavMenu.classList.remove('list--menu-hide');
        footerContactMenu.classList.add('list--menu-hide');
      } else {
        footerNavMenu.classList.add('list--menu-hide');
      }
    };
    footerNavToggle.addEventListener('click', navToggleClickHandler);

    var contactToggleClickHandler = function (evt) {
      if (footerContactMenu.classList.contains('list--menu-hide')) {
        footerContactMenu.classList.remove('list--menu-hide');
        footerNavMenu.classList.add('list--menu-hide');
      } else {
        footerContactMenu.classList.add('list--menu-hide');
      }
    };
    footerContactToggle.addEventListener('click', contactToggleClickHandler);
  }
})();

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

'use strict';
(function () {
  var link = document.querySelector('.popup-link');
  var popup = document.querySelector('.popup');
  var close = document.querySelector('.popup__close-button');
  var overlay = document.querySelector('.popup__overlay');
  var body = document.querySelector('body');

  if (popup) {
    var name = document.getElementById('popup-name');
    var tel = document.getElementById('popup-tel');
    var comment = document.getElementById('popup-user-text');

    localStorage.setItem('name', name.value);
    localStorage.setItem('phone-number', tel.value);
    localStorage.setItem('comment', comment.value);

    var openPopupClickHandler = function (evt) {
      if (!popup.classList.contains('popup--show')) {
        evt.preventDefault();
        popup.classList.add('popup--show');
        name.focus();
        body.classList.add('no-scroll');
      }
      link.removeEventListener('click', openPopupClickHandler);
      close.addEventListener('click', closePopupClickHandler);
      overlay.addEventListener('click', closePopupClickHandler);
      window.addEventListener('keydown', escClickHandler);
    }
    link.addEventListener('click', openPopupClickHandler);

    var closePopupClickHandler = function (evt) {
      if (popup.classList.contains('popup--show')) {
        popup.classList.remove('popup--show');
        body.classList.remove('no-scroll');
      }
      close.removeEventListener('click', closePopupClickHandler);
      link.addEventListener('click', openPopupClickHandler);
    }
    close.addEventListener('click', closePopupClickHandler);

    overlay.addEventListener('click', closePopupClickHandler);
    overlay.removeEventListener('click', closePopupClickHandler);


    var escClickHandler = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closePopupClickHandler();
        window.removeEventListener('keydown', escClickHandler);
      }
    };
    window.addEventListener('keydown', escClickHandler);
  }
})();
