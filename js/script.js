"use strict";

// setTimeout(() => {
//     // console.log("HELLO WORLD");
//     // box.style.backgroundColor = 'red'
// }, 2000);






// setTimeout(() => {
//     box.style.marginRight = '0'
// }, 5000);

const box = document.querySelector('.box');
const X = document.querySelector('.box i')

setTimeout(() => {
    box.style.display = 'block';
}, 5000);

X.addEventListener('click', () => {
    box.style.display = 'none';
})