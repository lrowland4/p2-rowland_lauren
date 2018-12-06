const colorButtons = document.querySelectorAll('#colors #rb #red, #colors #rb #blue, #colors #gy #yellow, #colors #gy #green');
const colorList = document.querySelector('#colors');

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

const numberButtons = document.querySelectorAll('#numbers #12 #red, #numbers #12 #blue, #numbers #34 #yellow, #numbers #34 #green');
const numberList = document.querySelector('#numbers');

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
       }, i * 1000);

    }

  };
  loopThrough();
};

for(let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', wrapper);

};

