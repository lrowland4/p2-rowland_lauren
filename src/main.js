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

