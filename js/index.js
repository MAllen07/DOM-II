// Your code goes here



//load

window.addEventListener("load", function(event) {
    alert("Now loaded!");
    });
//mouseover//
const nav = document.querySelectorAll('a');
const navHover = function(e){
    e.target.style.color = 'orange';
    e.preventDefault();
}
const navHoverNot = function(e){
    e.target.style.color = '';
}
nav.forEach (item => {item.addEventListener('mouseover', navHover)});
nav.forEach (item => {item.addEventListener('mouseleave', navHoverNot)});





// logo heading

const head = document.querySelector('.logo-heading');
const headingZoom = function(e){
    e.target.style.fontSize = '10rem';
}
head.addEventListener('click', headingZoom);

//wheel
const adventureAwaits = document.querySelector('.inverse-content .text-content');
adventureAwaits.addEventListener('wheel', function () {
    adventureAwaits.style.display = 'flex';
});

//bottom button//
const button = document.querySelectorAll('.btn');
const buttonClicked = function(e) {
    e.target.style.backgroundColor = 'grey';
    e.target.style.color = 'blue';
}
button.forEach(item => {item.addEventListener('click', buttonClicked)});


//background color scroll //
const body = document.querySelector('body')
body.addEventListener('keyup', function() {
    body.style.background = 'grey';
})










//footer//
const footerText = document.querySelector('.footer p');
footerText.addEventListener('mouseover', function() {
    footerText.style.color = 'red';
})

