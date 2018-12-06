'use strict';

var colorButtons = document.querySelectorAll('#colors #rb #red, #colors #rb #blue, #colors #gy #yellow, #colors #gy #green, #numbers #starter #red, #numbers #starter #blue, #numbers #alldone #green, #numbers #alldone #yellow');
var colorList = document.querySelector('#colors');
var numberList = document.querySelector('#number');

function wrapper() {
  var _this = this;

  var changeColor = function changeColor() {
    colorList.classList.toggle('black');
    numberList.classList.toggle('black');
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

var fortuneOptions = ['You will be very rich.', 'You will be very poor.', 'You will have 10 children.', 'You will have 2 children.', 'You will marry someone famous.', 'You will live in a small house.', 'You will live in a Mansion.', 'You will soon come into a lot of money.', 'You will soon lose a lot of money.', 'You are admired by everyone.'];

var choice = document.getElementsByClassName('choice')[0];
var theFortune = document.querySelector('#numbers starter alldone');

var fortuneTextPlaceholder = document.createTextNode('');
yourFortune.appendChild(fortuneTextPlaceholder);

var choiceSelection = document.getElementById('generator-button');

var fortuneTeller = function fortuneTeller() {

  fortuneOptions.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  var fortuneText = document.createTextNode(fortuneOptions[0]);
  fortuneTextPlaceholder.appendChild(fortuneText);

  ourButtonSection.removeChild(button);

  theFortune.classList.add('fortune-show');
};

button.onclick = fortuneTeller;