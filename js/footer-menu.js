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
