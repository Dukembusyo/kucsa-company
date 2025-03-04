// // Handling form submission
// document.getElementById("contact-form").addEventListener("submit", function (event) {
//     event.preventDefault();
//     // Display confirmation message
//     document.querySelector(".confirmation-message").style.display = "block";
//     // Reset form
//     document.getElementById("contact-form").reset();
//     });



    // Navbar Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);
    let emailReceiver = "4forcedevelopers@gmail.com";  // Your email

    let mailtoLink = `mailto:${emailReceiver}?subject=New Quote Request&body=`;

    // Append form data to email body
    formData.forEach((value, key) => {
        mailtoLink += `${encodeURIComponent(key)}: ${encodeURIComponent(value)}%0A`;
    });

    // Open user's email client with pre-filled details
    window.location.href = mailtoLink;

    // Show success message
    alert("Your request has been prepared for email submission. Please check your email client.");

    // Reset the form after submission
    this.reset();
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
    
        
    

    function copyToClipboard(id) {
        const text = document.getElementById(id).innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied to clipboard!");
        });
    }
    













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
    