'use strict'
const header = document.querySelector("[data-header]");
const backToTopBtn = document.querySelector("[data-back-to-top-btn]");
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
window.addEventListener("scroll", _ => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backToTopBtn.classList.add("active")
  }
  else {
    header.classList.remove("active");
    backToTopBtn.classList.remove("active")
  }
})
navTogglers.forEach(navToggler => {
  navToggler.addEventListener("click", _ => {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active")
  })
})


const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]")
const sliderNextBtn = document.querySelector("[data-slider-next]")
let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"))
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems
let currentSliderPos = 0


const moveSliderItem = function() {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSliderPos].offsetLeft}px)`;
}


const slideNext = function () {
  const slideEnd = currentSliderPos >= totalSlidableItems;
  if(slideEnd) {
    currentSliderPos = 0
  } else {
    currentSliderPos++
  }
  moveSliderItem()
}
sliderNextBtn.addEventListener("click", slideNext);


const slidePrev = function () {
  if(currentSliderPos <= 0) {
    currentSliderPos = totalSlidableItems
  } else {
    currentSliderPos--
  }
  moveSliderItem()
}
sliderPrevBtn.addEventListener("click", slidePrev)



window.addEventListener("resize", function() {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"))
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems
  moveSliderItem()
})