require('es6-promise').polyfill();

import modal from './modules/modal';
import tabs from './modules/tabs';
import calc from './modules/calc';
import timer from './modules/timer';
import slider from './modules/slider';
import forms from './modules/forms';
import cards from './modules/cards';
import {openModal} from './modules/modal';


document.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(()=> openModal('.modal', modalTimerId), 5000);

  modal('[data-modal]', '.modal', modalTimerId);
  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  calc();
  timer('.timer', '2023-08-11');
  slider({
    slide: '.offer__slide',
    prevArrow: '.offer__slider-prev',
    nextArrow: '.offer__slider-next',
    currentCounter: '#current',
    totalCounter: '#total'
  });
  forms('form', modalTimerId);
  cards();
});






