'use strict';

var colorList = document.querySelector('#colors');
var colorList2 = document.querySelector('#numbers');
var colorList3 = document.querySelector('#numbers2');
var colorButtons = document.querySelectorAll('#colors #rb #red, #colors #rb #blue, #colors #gy #yellow, #colors #gy #green');
var colorButtons2 = document.querySelectorAll('#numbers #starter #red2, #numbers #starter #blue2, #numbers #alldone #green2, #numbers #alldone #yellow2');
var colorButtons3 = document.querySelectorAll('#numbers2 #lastnum #red3, #numbers2 #lastnum #blue3, #numbers2 #finalnum #green3, #numbers2 #finalnum #yellow3');

///////////////////////////////////////


var theFortunes = ['You will be very rich.', 'You will be very poor.', 'You will have 10 children.', 'You will have 2 children.', 'You will marry someone famous.', 'You will live in a small house.', 'You will live in a Mansion.', 'You will soon come into a lot of money.', 'You will soon lose a lot of money.', 'You are admired by everyone.'];

var button = document.getElementsByTagName('button')[0];
var yourFortune = document.querySelector('#fortune-wrapper p span');

var fortuneTextPlaceholder = document.createTextNode('');
yourFortune.appendChild(fortuneTextPlaceholder);

theFortunes.sort(function (a, b) {
  return 0.5 - Math.random();
});

var fortuneText = document.createTextNode(theFortunes[0]);
yourFortune.appendChild(fortuneText);

///////////////////////////////////////

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

///////////////////////////////////////////////////////////////////


function wrapper3() {
  var _this3 = this;

  var changeColor3 = function changeColor3() {
    colorList3.classList.toggle('black');
  };

  var loopThrough3 = function loopThrough3() {
    var thisNumber = _this3.childNodes[0].nodeValue;
    var numberValue = Number(thisNumber);

    for (var i = 0; i < numberValue * 2; i++) {
      setTimeout(function () {
        changeColor3();
      }, i * 500);
    }

    setTimeout(function () {
      colorList3.classList.add('hide');
      colorList3.classList.remove('show');
      yourFortune.classList.add('fortune-show');
    }, numberValue * 1000);
  };
  loopThrough3();
};

////////////////////////////////////////////


for (var i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener('click', wrapper);
};

for (var _i = 0; _i < colorButtons.length; _i++) {
  colorButtons2[_i].addEventListener('click', wrapper2);
};

for (var _i2 = 0; _i2 < colorButtons.length; _i2++) {
  colorButtons3[_i2].addEventListener('click', wrapper3);
};

////////////////////////////////////////////