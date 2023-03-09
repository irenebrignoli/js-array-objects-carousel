
const imgCarousel = [
  {
      image: 'img/1.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/2.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/3.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/4.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/5.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];



/*
const imgCarousel = [
  'img/1.webp',
  'img/2.webp',
  'img/3.webp',
  'img/4.webp',
  'img/5.webp'
];
*/

const imgListDom = document.querySelector('.img-list');
const circleContainerDom = document.querySelector('.circle-container');

let sliderContent = ''; //creo un contenuto per la mia lista di img
let circleContent = ''; //creo un contenuto per la il cicrlce container

for(let i = 0; i < imgCarousel.length; i++){

  let currentObject = imgCarousel[i];

  const newImgBox = `<div class="img-box">
                      <img src="${currentObject.image}" class="image" alt="image${[i]}">
                      <div class="info-box">
                        <h1 class="title-box">${currentObject.title}</h1>
                        <div class="text-box">${currentObject.text}</div>
                      </div>
                     </div>`;
  sliderContent += newImgBox;

  const newcircle = `<div class="circle"></div>`;
  circleContent += newcircle;
  
}

imgListDom.innerHTML = sliderContent;
circleContainerDom.innerHTML = circleContent;

const imgsBoxDom = document.getElementsByClassName('img-box');
const circleDom = document.getElementsByClassName('circle');


//attiviamo le img nel carousel

let imageOn = 0; //creo una variabile per andare a modificare lo stato attivo dell img
imgsBoxDom [imageOn].classList.add('show'); //se è in ON gli do la classe show
circleDom [imageOn].classList.add('circle-current');

const prevDom = document.querySelector('#prev'); //collego i pulsanti al dom
const nextDom = document.querySelector('#next');

//creo l'evento click per far girare le img

nextDom.addEventListener('click',

  function(){

    if (imageOn < imgsBoxDom.length - 1 ){ //se il valore di imagOn è minore della lunghezza totale raggiunta

      imgsBoxDom [imageOn].classList.remove('show'); //nascondi img
      circleDom [imageOn].classList.remove('circle-current');
      
      imageOn++;

      imgsBoxDom [imageOn].classList.add('show'); //mostra prossima img
      circleDom [imageOn].classList.add('circle-current');

      prevDom.classList.remove('hide'); //mostra pulsante per tornare indietro

      if (imageOn == imgsBoxDom.length - 1){ //se il valore di imagOn è uguale alla lunghezza totale della lista 
        nextDom.classList.add('hide'); //nascondi pulsante next
      }

    }

  }

);

prevDom.addEventListener('click',

  function(){

    if(imageOn > 0){

      imgsBoxDom [imageOn].classList.remove('show');
      circleDom [imageOn].classList.remove('circle-current');

      imageOn--;

      imgsBoxDom [imageOn].classList.add('show');
      circleDom [imageOn].classList.add('circle-current');

      nextDom.classList.remove('hide');

      if (imageOn == 0){
        prevDom.classList.add('hide');
      }
    }
  }


)



