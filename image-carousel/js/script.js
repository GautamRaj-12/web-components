const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const carouselNav = document.querySelector('.carousel__nav');
const navIndicators = Array.from(carouselNav.children);

// const slideSize = slides[0].getBoundingClientRect().;
// const slideWidth = slideSize.width;
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

//arrange the slides next to one another
//when I click left,move slides to the left
//when I click right,move slides to the right
//When I click on the nav indicators, move to that slide
