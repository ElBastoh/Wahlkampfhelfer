document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const slideOutMenu = document.querySelector(".slide-out-menu");

    menuToggle.addEventListener("click", function() {
        slideOutMenu.classList.toggle("menu-open");
    });

    // Schließen des Slide-Out-Menüs bei Klick außerhalb des Menüs
    document.addEventListener("click", function(event) {
        if (!slideOutMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            slideOutMenu.classList.remove("menu-open");
        }
    });
});
