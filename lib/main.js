'use strict';

var colorButtons = document.querySelectorAll('#colors #rb #red, #colors #rb #blue, #colors #gy #yellow, #colors #gy #green');
var colorList = document.querySelector('#colors');

function wrapper() {
  var _this = this;

  var changeColor = function changeColor() {
    colorList.classList.toggle('black');
  };

  var loopThrough = function loopThrough() {

    var thisButtonText = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    for (var i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function () {
        changeColor();
      }, i * 1000);
    }
  };
  loopThrough();
};

for (var i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener('click', wrapper);
};

/////////////////////////////////////////////

var article = document.getElementsByTagName('article')[0];
var section = document.getElementsByTagName('section')[0];

section.addEventListener('click', function slideToggle() {

  article.classList.toggle('hide');
});

/////////////////////////////////////////////

var numberButtons = document.querySelectorAll('#numbers #12 #red, #numbers #12 #blue, #numbers #34 #yellow, #numbers #34 #green');
var numberList = document.querySelector('#numbers');

function wrapper() {
  var _this2 = this;

  var changeColor = function changeColor() {
    colorList.classList.toggle('black');
  };

  var loopThrough = function loopThrough() {

    var thisButtonText = _this2.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    for (var _i = 0; _i < thisButtonLength * 2; _i++) {
      setTimeout(function () {
        changeColor();
      }, _i * 1000);
    }
  };
  loopThrough();
};

for (var _i2 = 0; _i2 < numberButtons.length; _i2++) {
  numberButtons[_i2].addEventListener('click', wrapper);
};