/* 마우스를 아래로 스크롤 할 때 
  화면의 1/2까지 내려오면 Top 버튼이 숨겼다가
  나타나도록 제작합니다. */

const home=document.querySelector('.home_container');
const homeHeight = home.offsetHeight;
const top_button = document.querySelector(".arrow_up");

document.addEventListener('scroll', function() {

    if(window.scrollY > homeHeight / 2) {
        top_button.style.opacity= 1;
    } else {
        top_button.style.opacity= 0;
    }

})


/* Skills 부분에 스크롤 되면 슬라이드되도록 변경 */ 

const box_some=document.querySelector('#skills');
const someHeight = box_some.offsetHeight;
const skill_content = document.querySelector(".skills_content");

document.addEventListener('scroll', function() {

    if(window.scrollY > someHeight / 2) {
        skill_content.style.marginTop= "0px";
        skill_content.style.opacity= 1;
        skill_content.style.marginRight="0px"
    } else {
        skill_content.style.marginTop= "3000px";
        skill_content.style.opacity= 0.1;
        skill_content.style.marginRight= "1000px";
    }
})




