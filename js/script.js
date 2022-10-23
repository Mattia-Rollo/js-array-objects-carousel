"use strict"

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Il clima è continentale nordico e risente della presenza del mare solo nelle estreme regioni meridionali. Le estati sono brevi e temperate, gli inverni sono freddi e lunghi.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Il Perù è uno dei Paesi più variegati al mondo. Un Paese multiculturale, ricco di tradizioni, con una gastronomia squisita e vaste riserve naturali.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Cile',
        description: `Il Cile è una striscia di terra nell'America Meridionale, lunga più di 4.000 km tra i 17° e i 56° sud e stretta fra l'Oceano Pacifico e le Ande, che fanno da confine con la Bolivia e l'Argentina. Notevole è, quindi, la varietà dei suoi climi e dei suoi paesaggi.`
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Argentina senza dubbio la natura occupa un posto rilevante: dalla cordigliera delle Ande ai laghi glaciali, passando per le distese di Pampa e le famose cascate di Iguazu, il Paese del tango è capace di offrire ai viaggiatori paesaggi straordinari'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'La Colombia è l\'unico paese del Sud America con coste sia sull\'Oceano Pacifico che sul Mar dei Caraibi. Entrambe le coste sono assolutamente affascinanti. Le romantiche spiagge di sabbia non sono qui una rarità e sono un luogo perfetto per una vacanza e relax.'
    },
];


// quando clicco avanti cambia immagine e poi ritorna indietro
// a ogni click aumenta index del array così da poter cambiare oggetto a ogni click


// const wrapper = document.getElementById('wrapper');
const box = document.getElementById('box');


const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');

let index = 1;

//inizializzo una variabile slides così da poter aggiungiere un blocco immagine-descrizione 
let slides = '';
// imageHtml.innerHTML = `<img src="${images[index-i].url}" class="d-none">`;

//creo un ciclo for per crearmi in una volta sola tutti i box dove andranno le immagini
// e li salvo in una variabile in modo da poter usare innerHtml una volta sola
for(let i = 0; i < images.length; i++){
    
    slides += `
    <div id="" class="mySlides">
        <div id="image" class='fade show'>
            <img id="image" src="${images[i].url}" alt="" class="" >
        </div>
        <div id="contentText" class="text-white">
            <h1 id="title" class="p-2">${images[i].title}</h1>
            <p id="description" class="">${images[i].description}</p>
        </div>
    </div>`;
}

box.innerHTML = slides;

// let seconds = 2;

// let intervall = setInterval(plusSlides, seconds * 1000);

// console.log(box);

// const imageHtml = document.getElementById('image');
// const title = document.getElementById('title');
// const description = document.getElementById('description');

// console.log(imageHtml);

// imageHtml.src = images[index-1].url;
// title.innerText = images[index-1].title;
// description.innerText = images[index-1].description;

// var output = $('h1');
// var isPaused = false;
// var time = 0;
// var t = window.setInterval(function() {
  
    // }, 1000);
    
    // //with jquery
    // $('.pause').on('click', function(e) {
        //   e.preventDefault();
        //   isPaused = true;
        // });
        
        // $('.play').on('click', function(e) {
            //   e.preventDefault();
            //   isPaused = false;
            // });
var isPaused = false;
var time = 3;
let rev = false;

let interval;

let checkPlay = false;

// con questa funzione posso resettare setInterval prima che arrivi alla fine dei 3 secondi, annullando lo slide automatico
//e posso avere un controllo sull'intervallo e farlo ripartire subito dopo in modo che ripara a contare da zero
// se voglio solo che si blocchi al click dell frecca next allora la funzione non servirebbe perchè  all'interno del setInterval abbiamo già una condizione per stoppare e far
// ripartire le slide; 
function setResetInterval(bool){

    if(bool){
          interval = setInterval(function(){
        //   el.css("background", "red");
        // setTimeout(function(){
        //   el.css("background", "blue");
        // var t = setInterval(function() {
            // console.log(isPaused);
            // console.log(timer);
            if(rev && !isPaused){
                minusSlides();
            } else
            if(!isPaused) {
                // output.text("Seconds: " + time);
                // console.log(time);
                plusSlides();
                
                
            }else{
                // pause.style.color = 'red'
            }
            
        },time * 1000);
        // return true;
    }else{
      clearInterval(interval); 
    //   pause.style.color = 'red';
    //   isPaused = true;
    //   return false;
    }
}

setResetInterval(true);
  

// console.log(setResetInterval());
const play = document.getElementsByClassName('play')[0];
const pause = document.getElementsByClassName('pause')[0];
const reverse = document.getElementsByClassName('reverse')[0];
const faArrow = reverse.getElementsByTagName('i')[0];


// console.log(pause)
reverse.addEventListener('click', function() {
    if(!rev){
    rev = true;
    faArrow.classList.remove('fa-arrow-right');
    faArrow.classList.add('fa-arrow-left');
    }else{
    rev = false;
    faArrow.classList.remove('fa-arrow-left');
    faArrow.classList.add('fa-arrow-right');
    }
});

play.addEventListener('click', function(){
    if(isPaused) {
        //la riga sotto va  eliminata nel caso voglio solo un delay
        // setResetInterval(true);
        isPaused = false;
        pause.style.color = 'white';
        pause.style.border = '2px solid white'
    }else{
        isPaused = false;
        // setResetInterval(false);
        pause.style.color = 'white' 
        pause.style.border = '2px solid white'
        
    }
    // setResetInterval(false);
});
pause.addEventListener('click', function() {
    if(!isPaused){
        isPaused = true;
        //la riga sotto va  eliminato nel caso voglio solo un delay
        // setResetInterval(false);
        pause.style.color = 'red'
        pause.style.borderColor = 'red'
    }else{
        isPaused = false;
        //la riga sotto va  eliminato nel caso voglio solo un delay
        // setResetInterval(true);
        pause.style.color = 'white'
        pause.style.borderColor = 'white'
    }
});




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides() {
    showSlides(slideIndex += 1);
    // isPaused = true;
    // checkPausa = true; 

}
function minusSlides() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    //   console.log(slides[0]);
    let thumbnails = document.getElementsByClassName("thumbnail");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    thumbnails[slideIndex-1].className += " active";
}


//questa funzione sotto mi permette di avere due tipi di comportamento al click del btnNext, così com'è mi blocca lo scorrimento automatico, 
//mentre se volessi avere un delay in modo da visualizzare meglio la slide successiva, così che il timer rincominci a contare da zero, devo fare un 
//setResetInterval(true) dopo il setResetInterval(false) già presente sotto
// e devo eliminare isPuased = true;
function stopAutoSlide(){
    setResetInterval(false);
    // isPaused = true;
    // pause.style.color = 'red';
    setTimeout(setResetInterval(true),1000);
}

//bottoni per cambiare immagine al box centrale
btnNext.addEventListener('click', plusSlides);
btnNext.addEventListener('click', stopAutoSlide);

btnPrev.addEventListener('click', minusSlides);
btnPrev.addEventListener('click', stopAutoSlide);

// console.log(slideIndex);



// function moveNext(){
//     index += 1;
//     console.log(index);
//     if(index > images.length){
//         index = 1;
//     }
//     imageHtml.src = images[index-1].url
//     title.innerText = images[index-1].title;
//     description.innerText = images[index-1].description;
// }


// // for(let i = 0; i < images.length ; i++) {

// // }

// function movePrev(){
// index--;
// if(index < 1){
//     index = images.length;
//     console.log(index);
// }
//     imageHtml.src = images[index-1].url
//     title.innerText = images[index-1].title;
//     description.innerText = images[index-1].description;
//     console.log(index);
// }


// function currentSlide(n) {
//     index = n;
//     imageHtml.src = images[index-1].url
//     title.innerText = images[index-1].title;
//     description.innerText = images[index-1].description;
// }