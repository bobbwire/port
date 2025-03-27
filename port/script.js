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

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
//contact form
document.querySelector(".contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  let form = this;
  let formMessage = document.getElementById("form-message");

  fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
  })
  .then(response => response.json())
  .then(data => {
      if (data.ok) {
          formMessage.innerText = "Message sent successfully!";
          form.reset();
      } else {
          formMessage.innerText = "Failed to send. Try again.";
      }
  })
  .catch(error => {
      formMessage.innerText = "Error sending message.";
      console.error(error);
  });
});

//humbermenu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}






