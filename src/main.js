const colorButtons = document.querySelectorAll('#colors #rb #red, #colors #rb #blue, #colors #gy #yellow, #colors #gy #green, #numbers #starter #reds, #numbers #starter #blues, #numbers #alldone #greens, #numbers #alldone #greens');
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



