console.log("works!")

let slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

let activeSlide = 0
const slideEl = document.getElementsByClassName('slide')
console.log(slideEl)

let arrowLeft = document.getElementsByClassName('.carosello__arrow.arrow-left')
let arrowRight = document.getElementsByClassName('.carosello__arrow.arrow-right');

arrowRight.addEventListener ( "click",

    function myFunction() {
        let firstSlide = slideEl[0]
        firstSlide.classList.remove('active')
        let secondSlide = slideEl[1]
        secondSlide.classList.add('active')
    }
)   