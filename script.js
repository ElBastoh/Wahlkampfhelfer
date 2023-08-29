document.addEventListener("DOMContentLoaded", function() {
    const questionBtns = document.querySelectorAll(".question-btn");

    questionBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle("show-answer");
        });
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const slideOutMenu = document.querySelector(".slide-out-menu");

    menuToggle.addEventListener("click", function() {
        slideOutMenu.classList.toggle("menu-open");
    });

    document.addEventListener("click", function(event) {
        if (!slideOutMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            slideOutMenu.classList.remove("menu-open");
        }
    });
});
