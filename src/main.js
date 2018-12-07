const colorList = document.querySelector('#colors');
const colorList2 = document.querySelector('#numbers');
const colorList3 = document.querySelector('#numbers2');
const colorButtons = document.querySelectorAll('#colors #rb #red, #colors #rb #blue, #colors #gy #yellow, #colors #gy #green');
const colorButtons2 = document.querySelectorAll('#numbers #starter #red2, #numbers #starter #blue2, #numbers #alldone #green2, #numbers #alldone #yellow2');
const colorButtons3 = document.querySelectorAll('#numbers2 #lastnum #red3, #numbers2 #lastnum #blue3, #numbers2 #finalnum #green3, #numbers2 #finalnum #yellow3');


///////////////////////////////////////


const magicFortunes = ['It is certain.','It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

const button = document.getElementsByTagName('button')[0];
const yourFortune = document.querySelector('#fortune-wrapper p span');

const fortuneTextPlaceholder = document.createTextNode('');
yourFortune.appendChild(fortuneTextPlaceholder);


let shakeBall = function() {
  
  magicFortunes.sort(function(a, b){return 0.5 - Math.random()});

  let fortuneText = document.createTextNode(magicFortunes[0]);
    yourFortune.appendChild(fortuneText);

    ourButtonSection.removeChild(button);

    yourFortune.classList.add('fortune-show');


};





button.onclick = shakeBall;








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
     shakeBall.classList.add('slide-in');
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

