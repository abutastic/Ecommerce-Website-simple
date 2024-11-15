// --------------- Navbar

const barIcon = document.getElementById("bar");
const navBar = document.getElementById("navbar");
const closeIcon = document.getElementById("closeBtn");

barIcon.addEventListener("click", () => {
    navBar.classList.add("active")
});

closeIcon.addEventListener("click", () => {
    navBar.classList.remove("active")
})
