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
/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

/*header*/
/* Hero Background (Unified Background for Header & Home) */
.hero-background {
  background: url("https://www.eschoolnews.com/files/2024/12/k-12-tech-innovation-news.jpeg")
    no-repeat center center/cover;
  height: 100vh; /* Full screen height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  color: white;
}

/* Overlay to Improve Text Visibility */
.hero-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  z-index: 1;
}
.hero-background {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
}

/* Ensure Header and Home Content are Above Overlay */
header,
.home {
  position: relative;
  z-index: 2;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

/* Logo */
.logo img {
  height: 50px;
}

/* Navigation */
.nav-links {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 0;
}

.nav-links li {
  display: inline-block;
  font-size: 13PX;
}

/* Round Navigation Buttons */
.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  color: black;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: 0.3s ease;
  margin-right: 90px;
}

.nav-button:hover {
  background-color: red;
  color: white;
}

/*media for screen*/
/* Ensure Elements Adjust to Screen Size */
@media screen and (max-width: 1024px) {
  header {
    padding: 15px 30px;
  }

  .logo img {
    height: 40px;
  }

  .nav-links {
    gap: 10px;
  }

  .nav-button {
    width: 45px;
    height: 45px;
    font-size: 12px;
    margin-right: 20px;
  }
}

@media screen and (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .nav-button {
    width: 40px;
    height: 40px;
    font-size: 12px;
    margin-right: 0;
  }

  .hero-background {
    height: 80vh; /* Reduce height on smaller screens */
    padding: 20px;
  }
}

@media screen and (max-width: 480px) {
  .hero-background {
    height: 70vh;
  }

  .logo img {
    height: 35px;
  }

  .nav-button {
    width: 35px;
    height: 35px;
    font-size: 10px;
  }

  .nav-links {
    gap: 10px;
  }
}


/* Home Section */
.home {
  text-align: center;
  padding-top: 150px;
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

/* About Section */
/* About Section */
/* About Section (Smaller Size) */
.about-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px; /* Reduced padding */
  background-color: #f5f5f5;
  height: 70vh; /* Reduced height */
}

/* Circular Image with Red Ring */
.about-image-container {
  position: relative;
  display: inline-block;
}

.about-image {
  width: 350px; /* Reduced size */
  height: 450px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid red; /* Red ring */
}

/* Thicker Vertical Line */
.vertical-line {
  width: 40px; /* Increased thickness */
  min-height: 70%; /* Reduced height */
  background-color: red; /* Keep it red */
  margin: 0 20px; /* Adjust spacing */
  display: block;
}

/* About Content (Smaller Width) */
.about-content {
  max-width: 500px; /* Reduce width */
  margin-left: auto; /* Keep it right-aligned */
}

/* About Me Title */
.about-title {
  font-size: 28px; /* Slightly smaller */
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

/* H3 Subtitle (Blue & Red Gradient) */
.about-subtitle {
  font-size: 22px;
  font-weight: bold;
  background: linear-gradient(to right, blue, red);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 15px;
}

/* Paragraphs (Smaller font size) */
.about-content p {
  font-size: 16px; /* Reduced font size */
  line-height: 1.5;
  color: black;
  margin-bottom: 15px; /* Less spacing */
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

/*about me media element*/
/* Responsive Design for About Section */
@media screen and (max-width: 1024px) {
  .about-container {
    flex-direction: column;
    height: auto;
    padding: 40px 20px;
    text-align: center;
  }

  .about-image {
    width: 280px;
    height: 360px;
  }

  .vertical-line {
    width: 10px;
    min-height: 50px;
    margin: 10px 0;
  }

  .about-content {
    max-width: 600px;
    margin-left: 0;
    text-align: center;
  }

  .about-title {
    font-size: 26px;
    align-items: center;
  }

  .about-subtitle {
    font-size: 20px;
  }

  .about-content p {
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  .about-container {
    padding: 30px 15px;
    flex-direction: column;
    text-align: center;
  }

  .about-image {
    width: 250px;
    height: 330px;
  }

  .vertical-line {
    display: none; /* Hide for smaller screens */
  }

  .about-title {
    font-size: 24px;
  }

  .about-subtitle {
    font-size: 18px;
  }

  .about-content {
    max-width: 500px;
    text-align: center;
  }

  .about-content p {
    font-size: 16px;
  }
}

@media screen and (max-width: 480px) {
  .about-container {
    padding: 20px;
  }

  .about-image {
    width: 200px;
    height: 280px;
  }

  .about-title {
    font-size: 22px;
  }

  .about-subtitle {
    font-size: 16px;
  }

  .about-content p {
    font-size: 15px;
  }
}





/* Buttons Section */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 45px;
  margin-top: 45px;
}

.btn {
  background-color: rgb(97, 30, 30);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background-color: rgb(63, 27, 27);
}

h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
}

/* About Me Section */
.about-container {
  display: flex;
  justify-content: center;
  gap: 30px; /* Increased gap between boxes */
  max-width: 900px;
  margin: 0 auto;
}

.about-box {
  width: 45%;
  padding: 20px;
  background-color: #0073e6;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  line-height: 1.6;
  text-align: justify;
  font-family: Georgia, "Times New Roman", Times, serif;
}

/* Skills Section */
.skills {
  text-align: center;
  padding: 50px 20px;
  background-color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.skills ul {
  list-style: none;
  padding: 0;
}

.skills ul li {
  display: inline-block;
  margin: 10px;
  background: #0073e6;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
}
.proj{
  color: white;
  font-size: 40px;
}

/* Projects Section */
.projects {
  text-align: center;
  padding: 50px 20px;
  background-color: #0a0a0a;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.project-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.project-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  gap: 10px;
}

.project-card img {
  width: 100%;
  border-radius: 10px;
}

/* Contact Section */




/* Footer */
footer {
  text-align: center;
  background: #333;
  color: white;
  padding: 15px;
  margin-top: 20px;
}
/*home page paragraph*/
#profession {
  font-size: 24px;
  font-weight: bold;
  color: #f5f5f5;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 10px;
  background-color: #0073e6;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
/*about me paragraph*/
#me {
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
}
/* CTA Buttons */
/* Center the CTA Buttons */
.cta-buttons {
  display: flex;
  justify-content: center; /* Centers the buttons horizontally */
  gap: 40px; /* Adds space between the buttons */
  margin-top: 0px;
}

/* Common Button Styling */
.cta-buttons .btn {
  display: inline-block;
  background-color: red;
  color: white;
  padding: 12px 20px;
  margin: 10px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s ease;
}

/* Hover Effect */
.cta-buttons .btn:hover {
  background-color: darkred;
}
/* Carousel Section */
/* Carousel Section */
/* Carousel Section */
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px; /* <-- Adjust this value to make the circle bigger */
  height: 300px; /* <-- Adjust this value to make the circle bigger */
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background: none; /* Removes any background */
  margin-top: 45px;
}

/* Ensure the images fully cover the circle */
.carousel-images {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Make sure images fully fit the circle */
.carousel-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image fills the circle */
  border-radius: 50%; /* Keeps the circular shape */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 1; /* Ensures images are on top */
}

/* Image rotation animation */
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.carousel-img:nth-child(1) {
  animation: fadeInOut 9s infinite;
}

.carousel-img:nth-child(2) {
  animation: fadeInOut 9s infinite;
  animation-delay: 3s;
}

.carousel-img:nth-child(3) {
  animation: fadeInOut 9s infinite;
  animation-delay: 6s;
}

.download-cv-button {
  display: inline-block;
  padding: 12px 20px;
  background-color: red; /* Red background */
  color: white; /* White text */
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px; /* Rounded corners */
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
  margin-top: 0px;
  margin-bottom: 15px;
}

.download-cv-button:hover {
  background-color: darkred; /* Darker red on hover */
  transform: scale(1.05); /* Slight zoom effect */
}

.download-cv-button:active {
  background-color: crimson; /* Lighter red when clicked */
  transform: scale(0.98);
}
 
/*humberger menu*/

/*testimonials*/
.testimonial-container {
  text-align: center;
  padding: 20px 10px;
}

.testimonial-heading {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

.testimonial-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
}

.testimonial {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 180px;
  background: black;
  background-image: url("");
  padding: 20px;
  border-radius: 70%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  gap: 0px;
}

.testimonial:hover {
  transform: scale(1.05);
}

.testimonial img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.testimonial p {
  font-size: 11px;
  color: white;
  text-align: center;
  text-align: justify;
}

.testimonial h3 {
  margin-top: 5px;
  color: white;
  font-size: 16px;
}

/* Responsive layout */
@media (max-width: 768px) {
  .testimonial-section {
      grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .testimonial-section {
      grid-template-columns: repeat(1, 1fr);
  }
}
.testimonial {
  background: rgb(6, 6, 6); /* Change this to any color you like */
}
.stars{
  color: orange;
  font-size: 0.50rem;
}

/* Additional Skills Section */
/* Skills Section */
.skills-section {
  background-color: rgb(252, 252, 252);
  color: white;
  text-align: center;
  padding: 50px 0;
}

/* Section Title */
.section-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #0a0a0a;
}

/* Skills Container */
.skills-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px; /* Increased gap */
  max-width: 1000px;
  margin: auto;
}

/* Skill Box */
.skill-box {
  background-color: #222;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  text-align: left;
  color: white;
}

/* Circular Image */
.skill-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
}

/* Skill Content */
.skill-content {
  flex: 1;
}

/* Skill Bar */
.skill-bar {
  background-color: #444;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
  width: 100%;
  height: 10px;
}

/* Progress */
.progress {
  background-color: blue;
  height: 100%;
  text-align: right;
  padding-right: 5px;
  line-height: 10px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  border-radius: 10px;
}
/*hr*/
hr{
  color: rgb(255, 2, 2);
  background-color: #0073e6;
}.contact {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 60px;
  background-color: #0073e6;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  position: relative;
  flex-wrap: wrap; /* Allows wrapping for responsiveness */
  gap: 50px; /* Added spacing between left and right sections */
}

/* Left Side: Contact Info + Social Media Icons */
.contact-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px; /* Increased spacing for better readability */
  flex: 1;
}

/* Email & Phone - Arranged Vertically */
.contact-info {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 15px; /* More space between email and phone */
}

.contact-info p {
  margin: 0;
  color: white;
  font-size: 16px;
}

/* Social Media Icons - Below Contact Info */
/* Social Media Icons - Now Arranged Horizontally */
.social-icons {
  display: flex;
  flex-direction: row; /* Arranged in a horizontal line */
  gap: 15px; /* Space between icons */
  margin-top: 15px; /* Adds space above */
}

/* Social Icons Styling */
.social-icons a {
  display: inline-block;
  padding: 5px; /* Adds spacing around icons */
}

/* Social Media Icon Images */
.social-icons img {
  width: 45px;
  height: 45px;
  transition: transform 0.3s ease-in-out;
  padding: 5px; /* Adds spacing inside */
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
}

/* Social Icons Hover Effect */
.social-icons img:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.4);
}


/*contact form*/
/* Contact Form - Positioned on the Right */
/* Contact Form - Styled for a Professional Look */
/* Contact Form Container */
.contact-form {
  width: 450px;
  background: rgba(255, 255, 255, 0.1); /* Transparent White Background */
  backdrop-filter: blur(10px); /* Frosted Glass Effect */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  color: white;
  text-align: center;
  transition: 0.3s ease-in-out;
}

/* Contact Form Title */
.contact-form h2 {
  font-size: 24px;
  margin-bottom: 15px;
  color: white;
  text-transform: uppercase;
}

/* Form Inputs */
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  transition: 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  outline: none;
}

/* Placeholder Text */
.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

/* Input Focus Effect */
.contact-form input:focus,
.contact-form textarea:focus {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  outline: none;
}

/* Textarea */
.contact-form textarea {
  height: 120px;
  resize: vertical;
}

/* Submit Button */
.contact-form button {
  background-color: #ff4c4c;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 4px 12px rgba(255, 0, 0, 0.2);
}

/* Button Hover Effect */
.contact-form button:hover {
  background-color: #d60000;
  transform: scale(1.05);
  box-shadow: 0px 6px 16px rgba(255, 0, 0, 0.3);
}


/*my services*/
/* General Section Styling */
.services {
  text-align: center;
  background: #121212; /* Dark Background */
  color: white;
  padding: 50px 0;
}

.services h2 {
  color: white; /* Gold Color for Title */
  font-size: 26px;
  margin-bottom: 30px;
}

/* Service Container */
.service-container {
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
}

/* Service Box */
.service-box {
  background: #0073e6;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0px 6px 12px rgba(00, 00, 255, 0.2); /* Soft glow */
  text-align: center;
  transition: 0.3s ease-in-out;
}

.service-box:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgb(255, 0, 0, 0.4);
}

/* Service Image */
.service-box img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 3px solid red;
}

/* Service Text */
.service-box p {
  font-size: 14px;
  color: #ddd;
  margin-bottom: 10px;
}

.service-box h3 {
  color: blue;
  font-size: 18px;
  margin-top: 10px;
}




