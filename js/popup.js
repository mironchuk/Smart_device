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
