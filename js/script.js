"use strict"

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


// quando clicco avanti cambia immagine e poi ritorna indietro
// a ogni click aumenta index del array così da poter cambiare oggetto a ogni click
// 
const wrapper = document.getElementById('wrapper');
const imageHtml = document.getElementById('img-box');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');


let index = 1;


btnNext.addEventListener('click',moveNext);
btnPrev.addEventListener('click',movePrev);

function moveNext(){

    imageHtml.src = images[index].url;
    // console.log(images[index-1].url);
    console.log(index);
    index++;

if(index === images.length){
    index = 1;
}
}


function movePrev(){
    box.style.backgroundImage = `url("${images[index-1].url}")`
// console.log(images[index-1].url);

index--;
if(index === 1){
    index = 4;
    console.log(index);
}
}