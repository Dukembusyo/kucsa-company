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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const services = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(el => el.value).join(', ');
    const details = document.getElementById('details').value;
    const howDidYouHear = document.getElementById('howDidYouHear').value;
  
    // Google Form URL (Replace with your actual Google Form link)
    const googleFormURL = "YOUR_GOOGLE_FORM_URL";
  
    // Map form data to Google Form fields
    const formData = new FormData();
    formData.append("entry.1111111111", fullName);   // Replace entry.xxxxxxxx with your Google Form field entry ID
    formData.append("entry.2222222222", email);
    formData.append("entry.3333333333", phone);
    formData.append("entry.4444444444", services);
    formData.append("entry.5555555555", details);
    formData.append("entry.6666666666", howDidYouHear);
  
    // Submit data to Google Form
    fetch(googleFormURL, {
      method: "POST",
      body: formData,
      mode: "no-cors"
    }).then(() => {
      alert("Thank you! Your request has been submitted successfully.");
      document.getElementById("contactForm").reset(); // Clear form after submission
    }).catch(error => {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please try again.");
    });
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
    