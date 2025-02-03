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





document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get user input values
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;
    // Prepare email content
    const subject = encodeURIComponent("New Contact Inquiry");
    const body = encodeURIComponent(`Hello,\n\nYou have a new message from:\n\nFull
    Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nService Interested:
    ${service}\n\nMessage:\n${message}\n\nBest regards,\nYour Website`);
    // Open email client (Gmail) with pre-filled details
    window.location.href = `mailto:dukembusyo@gmail.com?subject=${subject}&body=${body}`;
    // Show success message
    document.getElementById("success-message").classList.remove("hidden");
    // Clear the input fields after submission
    document.getElementById("contact-form").reset();
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
    