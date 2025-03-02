document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show the button when the user scrolls down 100px from the top
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});