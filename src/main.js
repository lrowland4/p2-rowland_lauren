const colorList = document.querySelector('#colors');
const colorList2 = document.querySelector('#numbers');
const colorList3 = document.querySelector('#numbers2');
const colorButtons = document.querySelectorAll('#colors #rb #red, #colors #rb #blue, #colors #gy #yellow, #colors #gy #green');
const colorButtons2 = document.querySelectorAll('#numbers #starter #red, #numbers #starter #blue, #numbers #alldone #green, #numbers #alldone #yellow');
const colorButtons3 = document.querySelectorAll('#numbers2 #lastnum #red, #numbers2 #lastnum #blue, #numbers2 #finalnum #green, #numbers2 #finalnum #yellow');


///////////////////////////////////////



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




///////////////////////////////////////

function wrapper(){

	const changeColor = () => {
  	 colorList.classList.toggle('black');
    

  }; 


  const loopThrough = () => {

  	let thisButtonText = this.childNodes[0].nodeValue;
  	let thisButtonLength = thisButtonText.length;


    for (let i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function() {
      	changeColor();
       }, i * 500);

    }

    setTimeout(function() {
     colorList.classList.add('hide');
     colorList2.classList.remove('hide');
     colorList2.classList.add('show');
   }, thisButtonLength * 1000);



  };
  loopThrough();
};



///////////////////////////////////////////////////////////////////



function wrapper2(){
  const changeColor2 = () => {
     colorList2.classList.toggle('black');
  }; 

  const loopThrough2 = () => {
    let thisNumber = this.childNodes[0].nodeValue;
    let numberValue = Number(thisNumber);


    for (let i = 0; i < numberValue * 2; i++) {
      setTimeout(function() {
        changeColor2();
       }, i * 500);

    }

    setTimeout(function() {
     colorList2.classList.add('hide');
     colorList2.classList.remove('show');
     colorList3.classList.remove('hide');
     colorList3.classList.add('show');
   }, numberValue * 1000);



  };
  loopThrough2();
};





///////////////////////////////////////////////////////////////////



function wrapper3(){
  const changeColor3 = () => {
     colorList3.classList.toggle('black');
  }; 

  const loopThrough3 = () => {
    let thisNumber = this.childNodes[0].nodeValue;
    let numberValue = Number(thisNumber);


    for (let i = 0; i < numberValue * 2; i++) {
      setTimeout(function() {
        changeColor3();
       }, i * 500);

    }

    setTimeout(function() {
     colorList3.classList.add('hide');
     colorList3.classList.remove('show');
     fortuneOptions.classList.add('slide-in');
   }, numberValue * 1000);



  };
  loopThrough3();
};

////////////////////////////////////////////


for(let i = 0; i < colorButtons.length; i++) {
	colorButtons[i].addEventListener('click', wrapper);

};


for(let i = 0; i < colorButtons.length; i++) {
  colorButtons2[i].addEventListener('click', wrapper2);

};

for(let i = 0; i < colorButtons.length; i++) {
  colorButtons3[i].addEventListener('click', wrapper3);

};

////////////////////////////////////////////

