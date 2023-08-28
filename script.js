document.addEventListener("DOMContentLoaded", function() {
    const questionBtns = document.querySelectorAll(".question-btn");
    const menuToggle = document.querySelector(".menu-toggle");
    const slideOutMenu = document.querySelector(".slide-out-menu");

    questionBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle("show-answer");
        });
    });

    menuToggle.addEventListener("click", function() {
        slideOutMenu.classList.toggle("menu-open");
    });

    document.addEventListener("click", function(event) {
        if (!slideOutMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            slideOutMenu.classList.remove("menu-open");
        }
    });
});
