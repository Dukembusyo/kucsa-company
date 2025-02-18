// Navbar Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Enhanced Search Functionality
document.getElementById("searchBtn").addEventListener("click", function () {
    let query = document.getElementById("searchInput").value.toLowerCase();
    removeHighlights(); // Remove old highlights before a new search
    searchAndHighlight(query);
});

function searchAndHighlight(query) {
    if (!query.trim()) return; // Ignore empty search

    let elements = document.body.getElementsByTagName("*");

    for (let element of elements) {
        if (element.children.length === 0 && element.textContent.toLowerCase().includes(query)) {
            let regex = new RegExp(`(${query})`, "gi");
            element.innerHTML = element.innerHTML.replace(regex, `<span class="highlight">$1</span>`);
        }
    }
}

function removeHighlights() {
    document.querySelectorAll(".highlight").forEach(el => {
        el.outerHTML = el.innerHTML; // Remove highlight while keeping the text
    });
}


const slides = document.querySelectorAll(".slide");
const typedTextElements = document.querySelectorAll(".typed-text");
const cursorElements = document.querySelectorAll(".cursor");

const typewriterTexts = [
    "Web Development",
    "UI/UX Design",
    "SEO Optimization",
    "E-Commerce Solutions",
    "Social Media Marketing",
    "Cloud Hosting",
    "Mobile App Development",
    "Digital Marketing",
    "Custom Solutions",
    "Business Automation"
];

let textIndex = 0; 
let charIndex = 0; 
let currentSlideIndex = 0;
let typingSpeed = 100;  // Speed of typing (milliseconds)
let erasingSpeed = 50;  // Speed of erasing (milliseconds)
let pauseBeforeErase = 2000; // Time before erasing starts
let pauseBeforeType = 1000; // Time before new text starts typing

function typeText() {
    let currentTypedText = typedTextElements[currentSlideIndex];
    let currentCursor = cursorElements[currentSlideIndex];

    if (charIndex === 0) {
        currentTypedText.textContent = ""; // Ensure it starts fresh
    }

    let currentText = typewriterTexts[textIndex % typewriterTexts.length];

    if (charIndex < currentText.length) {
        currentTypedText.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(() => eraseText(currentTypedText), pauseBeforeErase);
    }

    // Blink Cursor Effect
    currentCursor.style.opacity = (charIndex % 2 === 0) ? "1" : "0";
}

function eraseText(element) {
    if (charIndex > 0) {
        element.textContent = element.textContent.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(() => eraseText(element), erasingSpeed);
    } else {
        textIndex++;
        setTimeout(typeText, pauseBeforeType);
    }
}

// Start Typing Effect on Page Load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500);
});

function changeSlide() {
currentSlideIndex = (currentSlideIndex + 1) % slides.length;
const sliderContainer = document.querySelector(".slider-container");
sliderContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
setTimeout(() => {
charIndex = 0;
typeText();
}, 500);
}
document.addEventListener("DOMContentLoaded", () => {
typeText();
setInterval(changeSlide, 7000); // Slide changes every 7 seconds
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




document.getElementById('searchBtn').addEventListener('click', function () {
    performSearch();
});

document.getElementById('searchInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    let searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchTerm === '') {
        alert('Please enter a search term.');
        return;
    }

    resetHighlights();

    let elementsToSearch = document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, a, li');
    let found = false;
    let firstMatch = null;

    elementsToSearch.forEach(element => {
        if (element.textContent.toLowerCase().includes(searchTerm)) {
            highlightText(element, searchTerm);
            if (!firstMatch) {
                firstMatch = element;
            }
            found = true;
        }
    });

    if (found) {
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    } else {
        alert('No matches found.');
    }
}

function highlightText(element, searchTerm) {
    let innerHTML = element.innerHTML;
    let regex = new RegExp(`(${searchTerm})`, 'gi');
    element.innerHTML = innerHTML.replace(regex, '<span class="highlight">$1</span>');
}

function resetHighlights() {
    document.querySelectorAll('.highlight').forEach(element => {
        element.outerHTML = element.innerHTML;
    });
}

    


// Function to toggle the dropdown menu
function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

// Event listener for the dropdown button
var dropbtn = document.querySelector('.dropbtn');
dropbtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    toggleDropdown();
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});
