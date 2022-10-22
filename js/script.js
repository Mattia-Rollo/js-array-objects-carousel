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
// 
const wrapper = document.getElementById('wrapper');
const imageHtml = document.getElementById('image');

const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');

const title = document.getElementById('title');
const description = document.getElementById('description');

let index = 1;

console.log(index);

btnNext.addEventListener('click',moveNext);
btnPrev.addEventListener('click',movePrev);


//     imageHtml.innerHTML = `<img src="${images[index-i].url}" class="d-none">`;
// for(let i = 1; i < images.length; i++){
//     title.innerText = images[index-i].title;
//     description.innerText = images[index-i].description;
// }



imageHtml.src = images[index-1].url;
title.innerText = images[index-1].title;
description.innerText = images[index-1].description;

function moveNext(){
    index += 1;
    console.log(index);
    if(index > images.length){
        index = 1;
    }
    imageHtml.src = images[index-1].url
    title.innerText = images[index-1].title;
    description.innerText = images[index-1].description;
}


function movePrev(){
index--;
if(index < 1){
    index = images.length;
    console.log(index);
}
    imageHtml.src = images[index-1].url
    title.innerText = images[index-1].title;
    description.innerText = images[index-1].description;
    console.log(index);
}


function currentSlide(n) {
    index = n;
    imageHtml.src = images[index-1].url
    title.innerText = images[index-1].title;
    description.innerText = images[index-1].description;
}