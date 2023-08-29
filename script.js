document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mainMenu = document.querySelector(".main-menu");

    hamburgerMenu.addEventListener("click", function() {
        mainMenu.classList.toggle("menu-open");
    });
});
