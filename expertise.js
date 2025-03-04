// Navbar Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});



document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
    const fullText = button.previousElementSibling;
    const previewText = button.previousElementSibling.previousElementSibling;
    if (fullText.style.display === 'none' || fullText.style.display === '') {
    fullText.style.display = 'block';
    previewText.style.display = 'none';
    button.textContent = 'Read Less';
    } else {
    fullText.style.display = 'none';
    previewText.style.display = 'block';
    button.textContent = 'Read More';
    }
    });
    });

    
    document.querySelector("a[href]")



    // Typewriter Effect
const typewriterText = document.getElementById("typewriter-text");
const services = [
"Web Development & Design",
"UI/UX Design",
"Domain Hosting & Registration",
"Digital Marketing",
"Mobile App Development",
"Graphic Design",
"E-Commerce Solutions",
"Content Writing",
"Training & Workshops",
"Video Editing & Animations",
"IT Support & Services",
"Creative Consulting",
];
let charIndex = 0;
let serviceIndex = 0;
let isDeleting = false;
function typeWriterEffect() {
const currentService = services[serviceIndex];
if (isDeleting) {
typewriterText.textContent = currentService.substring(0, charIndex--);
if (charIndex < 0) {
isDeleting = false;
serviceIndex = (serviceIndex + 1) % services.length;
setTimeout(typeWriterEffect, pauseAfterDeleting);
return;
}
} else {
typewriterText.textContent = currentService.substring(0, charIndex++);
if (charIndex > currentService.length) {
isDeleting = true;
setTimeout(typeWriterEffect, 2500);
}
}
setTimeout(typeWriterEffect, isDeleting ? 200 : 300);
}
typeWriterEffect();
// Slider Functionality
let sliderPosition = 0;
const sliderWrapper = document.querySelector(".slider-wrapper");
const sliderItems = document.querySelectorAll(".slider-item");
function slide() {
sliderPosition = (sliderPosition + 1) % sliderItems.length;
sliderWrapper.style.transform = `translateX(-${sliderPosition * (100 / 4)}%)`;
}
setInterval(slide, 3000);

document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get the email entered by the user
    const email = document.getElementById("email").value;
    // Prepare the email content
    const subject = encodeURIComponent("New Newsletter Subscription");
    const body = encodeURIComponent(`Hello, \n\nYou have a new newsletter subscriber:
    \nEmail: ${email}\n\nBest regards, \nYour Website`);
    // Open email client (Gmail) with pre-filled details
    window.location.href = `mailto:dukembusyo@gmail.com?subject=${subject}&body=${body}`;
    // Show success message
    document.getElementById("success-message").classList.remove("hidden");
    // Clear the input field after submission
    document.getElementById("email").value = "";
    });

    

    document.getElementById("newsletter-form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Get the email entered by the user
        const email = document.getElementById("email").value;
        // Prepare the email content
        const subject = encodeURIComponent("New Newsletter Subscription");
        const body = encodeURIComponent(`Hello, \n\nYou have a new newsletter subscriber:
        \nEmail: ${email}\n\nBest regards, \nYour Website`);
        // Open email client (Gmail) with pre-filled details
        window.location.href = `mailto:dukembusyo@gmail.com?subject=${subject}&body=${body}`;
        // Show success message
        document.getElementById("success-message").classList.remove("hidden");
        // Clear the input field after submission
        document.getElementById("email").value = "";
        });
    
    
        // Dynamic Year Update
    document.getElementById("current-year").textContent = new Date().getFullYear();
    
    // Newsletter Form Handling
    document.getElementById("newsletter-form").addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("success-message").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("success-message").classList.add("hidden");
        }, 4000);
    });
    
    // Live Chat Toggle
    document.getElementById("chat-header").addEventListener("click", function () {
        const chatBox = document.getElementById("chat-box");
        chatBox.style.display = chatBox.style.display === "none" || chatBox.style.display === "" ? "flex" : "none";
    });
    
    // Send Chat Message (Placeholder)
    document.getElementById("chat-send").addEventListener("click", function () {
        alert("Your message has been sent! A representative will reply soon.");
    });
    
        
    
    




    document.addEventListener("DOMContentLoaded", function () {
        let dropdown = document.querySelector(".dropdown");
        let menu = dropdown.querySelector(".dropdown-menu");
    
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            let isVisible = menu.style.display === "block";
            menu.style.display = isVisible ? "none" : "block";
            menu.style.opacity = isVisible ? "0" : "1";
            menu.style.visibility = isVisible ? "hidden" : "visible";
        });
    
        document.addEventListener("click", function (event) {
            if (!dropdown.contains(event.target)) {
                menu.style.display = "none";
                menu.style.opacity = "0";
                menu.style.visibility = "hidden";
            }
        });
    });
    
    
   
