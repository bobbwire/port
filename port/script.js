document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    // Toggle the menu when clicking on the hamburger button
    mobileMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        mobileMenu.classList.toggle("is-open");
    });

    // Close menu when clicking on a nav link (for better UX)
    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            mobileMenu.classList.remove("is-open");
        });
    });
});
