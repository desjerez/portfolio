const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
    navbar.classList.toggle("display");
    menu.classList.toggle("menu");
});

var typed = new Typed(".auto-type", {
    strings: ["College Student", "BS Computer Science", "MS Cybersecurity", "Seeking internship opportunity"],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
});