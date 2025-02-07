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
    let googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSfZWsdFjoSBIiyW1wCxJ1mmcqG926XfYMZKAIYs1-0545cX7g/viewform?usp=header";  

    let formParams = new URLSearchParams();
    formData.forEach((value, key) => {
        formParams.append(key, value);
    });

    fetch(googleFormURL, {
        method: "POST",
        body: formParams,
        mode: "no-cors"
    })
    .then(() => {
        alert("Your request has been submitted successfully! We'll contact you soon.");
        document.getElementById("contactForm").reset();
    })
    .catch(() => {
        alert("Something went wrong! Please try again.");
    });
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
    