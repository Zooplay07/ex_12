/* 마우스를 아래로 스크롤 할 때 header에 있는
  메인메뉴 배경 색상 변경하기 */

const header = document.querySelector(".header");
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;
   // headerHeight 는 header의 높이 값을 가지고 있습니다. //

document.addEventListener("scroll", function() {
    /* console.log(window.scrollY); */

    if(window.scrollY > 300 ) {
        header.classList.add("header-dark");

    } else {
        header.classList.remove("header-dark");
    }

})

