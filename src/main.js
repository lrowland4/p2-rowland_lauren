const colorButtons = document.querySelectorAll('#colors #rb #red, #colors #rb #blue, #colors #gy #yellow, #colors #gy #green, #numbers #starter #red, #numbers #starter #blue, #numbers #alldone #green, #numbers #alldone #yellow');
const colorList = document.querySelector('#colors');
const numberList = document.querySelector('#number');

function wrapper(){

	const changeColor = () => {
  	 colorList.classList.toggle('black');
     numberList.classList.toggle('black');

  };


  const loopThrough = () => {

  	let thisButtonText = this.childNodes[0].nodeValue;
  	let thisButtonLength = thisButtonText.length;


    for (let i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function() {
      	changeColor();
       }, i * 1000);

    }

  };
  loopThrough();
};

for(let i = 0; i < colorButtons.length; i++) {
	colorButtons[i].addEventListener('click', wrapper);

};


/////////////////////////////////////////////

const article = document.getElementsByTagName('article')[0];
const section = document.getElementsByTagName('section')[0];

section.addEventListener('click', function slideToggle(){
  
  article.classList.toggle('hide');
});


/////////////////////////////////////////////

let fortuneOptions = ['You will be very rich.', 'You will be very poor.', 'You will have 10 children.', 'You will have 2 children.', 'You will marry someone famous.', 'You will live in a small house.', 'You will live in a Mansion.', 'You will soon come into a lot of money.', 'You will soon lose a lot of money.', 'You are admired by everyone.'];

const choice = document.getElementsByClassName('choice') [0];
const theFortune = document.querySelector('#numbers starter alldone');

const fortuneTextPlaceholder = document.createTextNode('');
yourFortune.appendChild(fortuneTextPlaceholder);



const choiceSelection = document.getElementById('generator-button');


let fortuneTeller = function() {
  
  fortuneOptions.sort(function(a, b){return 0.5 - Math.random()});

  var fortuneText = document.createTextNode(fortuneOptions[0]);
    fortuneTextPlaceholder.appendChild(fortuneText);

    ourButtonSection.removeChild(button);

    theFortune.classList.add('fortune-show');


};



button.onclick = fortuneTeller;
























