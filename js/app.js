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

let arrowLeft = document.getElementsByClassName('carousel-arrow arrow-left')
let arrowRight = document.getElementsByClassName('carousel-arrow arrow-right');

arrowRight[0].addEventListener( "click",
    
    function myFunction() {
        let firstSlide = slideEl[activeSlide]
        firstSlide.classList.remove('active')
        if (activeSlide === 4) {
                activeSlide = 0
            } else {
                activeSlide += 1
            }
        let secondSlide = slideEl[activeSlide]
        secondSlide.classList.add('active')
    }
    
)   

arrowLeft[0].addEventListener( "click",

    function myFunction() {

    let secondSlide = slideEl[activeSlide]
    secondSlide.classList.remove('active')
    if (activeSlide === 0) {
        activeSlide = 4
    } else {
        activeSlide -= 1
    }
    let firstSlide = slideEl[activeSlide]
    firstSlide.classList.add('active')
        
    }
    
) 