'use strict';

var colorList = document.querySelector('#colors');
var colorList2 = document.querySelector('#numbers');
var colorList3 = document.querySelector('#numbers2');
var colorButtons = document.querySelectorAll('#colors #rb #red, #colors #rb #blue, #colors #gy #yellow, #colors #gy #green');
var colorButtons2 = document.querySelectorAll('#numbers #starter #red, #numbers #starter #blue, #numbers #alldone #green, #numbers #alldone #yellow');
var colorButtons3 = document.querySelectorAll('#numbers2 #lastnum #red, #numbers2 #lastnum #blue, #numbers2 #finalnum #green, #numbers2 #finalnum #yellow');

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
      }, i * 500);
    }

    setTimeout(function () {
      colorList.classList.add('hide');
      colorList2.classList.remove('hide');
      colorList2.classList.add('show');
    }, thisButtonLength * 1000);
  };
  loopThrough();
};

///////////////////////////////////////////////////////////////////


function wrapper2() {
  var _this2 = this;

  var changeColor2 = function changeColor2() {
    colorList2.classList.toggle('black');
  };

  var loopThrough2 = function loopThrough2() {
    var thisNumber = _this2.childNodes[0].nodeValue;
    var numberValue = Number(thisNumber);

    for (var i = 0; i < numberValue * 2; i++) {
      setTimeout(function () {
        changeColor2();
      }, i * 500);
    }

    setTimeout(function () {
      colorList2.classList.add('hide');
      colorList2.classList.remove('show');
      colorList3.classList.remove('hide');
      colorList3.classList.add('show');
    }, numberValue * 1000);
  };
  loopThrough2();
};

////////////////////////////////////////////


for (var i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener('click', wrapper);
};

for (var _i = 0; _i < colorButtons.length; _i++) {
  colorButtons2[_i].addEventListener('click', wrapper2);
};