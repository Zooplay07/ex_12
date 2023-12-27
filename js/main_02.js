// 마우스를 아래로 스크롤 하면 Home 부분이 점점 투명처리 됩니다. //

const home = document.querySelector(".home_container");
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', function() {
    home.style.opacity = 1 - (window.scrollY / homeHeight);
})


const photo_01 = document.querySelector(".testimonial_img");
const bubble_01 = document.querySelector(".testimonial_bubble");

photo_01.addEventListener("click", function() {
    bubble_01.style.color = "#f00"
})

const text_001 = document.querySelector(".footer_title");
const text_002 = document.querySelector(".footer_text_01");

document.addEventListener("click", function() {

    text_002.style.color="#f00";


})

