// Mobile Navigation
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLinksLi = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  // Toggle Nav
  navLinks.classList.toggle("active");

  // Burger Animation
  burger.classList.toggle("toggle");

  // Animate Links
  navLinksLi.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Close mobile menu if open
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      burger.classList.remove("toggle");
      navLinksLi.forEach((link) => {
        link.style.animation = "";
      });
    }

    // Smooth scroll to section
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Menu Tab Switching
const tabBtns = document.querySelectorAll(".tab-btn");
const menuCategories = document.querySelectorAll(".menu-category");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    tabBtns.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    // Get category to show from data attribute
    const categoryToShow = btn.getAttribute("data-category");

    // Hide all menu categories
    menuCategories.forEach((category) => {
      category.classList.remove("show");
    });

    // Show selected category
    document
      .querySelector(`.menu-category.${categoryToShow}`)
      .classList.add("show");
  });
});

// Simple Form Validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }

  alert(
    `Thank you, ${name}! Your message has been received. We'll get back to you soon.`
  );
  contactForm.reset();
});
