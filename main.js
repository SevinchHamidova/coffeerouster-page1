const elmenuBtn = document.querySelector(".js-menu-btn");
// console.log(elmenuBtn);
elmenuBtn.addEventListener("click", () =>{
    elmenuBtn.closest(".site-header").classList.toggle("open");
    elmenuBtn.closest("body").classList.toggle("unscroll");
})