const colorList = document.querySelector('#colors');
const colorList2 = document.querySelector('#numbers');
const colorList3 = document.querySelector('#numbers2');
const colorButtons = document.querySelectorAll('#colors #rb #red, #colors #rb #blue, #colors #gy #yellow, #colors #gy #green');
const colorButtons2 = document.querySelectorAll('#numbers #starter #red, #numbers #starter #blue, #numbers #alldone #green, #numbers #alldone #yellow');
const colorButtons3 = document.querySelectorAll('#numbers2 #lastnum #red, #numbers2 #lastnum #blue, #numbers2 #finalnum #green, #numbers2 #finalnum #yellow');




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


