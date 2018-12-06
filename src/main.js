const colorButtons = document.querySelectorAll('#colors #rb #red, #colors #rb #blue, #colors #gy #yellow, #colors #gy #green, #numbers #starter #red, #numbers #starter #blue, #numbers #alldone #green, #numbers #alldone #yellow');
const colorList = document.querySelector('.colors');
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



