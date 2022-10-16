const navList = document.querySelector(".links-wrapper");
const navBtn = document.querySelector(".menu");

navBtn.addEventListener("click", () => {
    navList.classList.toggle("active")
})