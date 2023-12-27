/* 프로젝트 클릭하면 해당 프로젝트만 표현하기 */

const categories = document.querySelector(".category");
const projects = document.querySelectorAll(".project");

categories.addEventListener("click", function(event) {

    /* console.log(event); */

    /* 화면에 있는 버튼을 클릭한 뒤 콘솔화면을 확인합니다. */

    const filter = event.target.dataset.category;

    console.log(filter); 

    projects.forEach((project) => {
       /* console.log(project.dataset.type); */

        if(filter === "all" || filter === project.dataset.type) {
            project.style.display= "block";
        } else {
            project.style.display = "none";
        }

        if (filter == null) {
            
            active_button.classList.remove("category_selected");
            return;
        }
    })

    /* 클릭한 버튼에 배경색 넣기 category_selected 설정하기 */
    const active_button = document.querySelector(".category_selected");
    active_button.classList.remove("category_selected");
        /* .category_selected에 마침표는 넣으면 안됩니다. */
    event.target.classList.add("category_selected");

    console.log(event.target);
        /* 콘솔 화면을 확인해보면 클릭한 버튼에
        category_selected가 추가 된 것을 확인 할 수
        있습니다. */

})