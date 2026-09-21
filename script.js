// ================================
// MOBILE MENU
// ================================

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};


// ================================
// CLOSE MENU AFTER CLICKING LINK
// ================================

let navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    };
});


// ================================
// ACTIVE NAVBAR LINK ON SCROLL
// ================================

let sections = document.querySelectorAll("section");

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(section => {

        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(
                '.navbar a[href*="' + id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
};


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
    ".home-content, .home-img, .about-content, .about-img, .services-box, .skills-card, .contact-content"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// CONTACT FORM
// ================================
let form = document.querySelector("#contactForm");
let submitBtn = document.querySelector("#submitBtn");
let formStatus = document.querySelector("#formStatus");
let iframe = document.querySelector("#hidden_iframe");
let isSubmitting = false;
if (form) {
    form.addEventListener("submit", function() {
        isSubmitting = true;
        if (submitBtn) {
            submitBtn.innerHTML = 'Sending... <i class="bx bx-loader-alt bx-spin"></i>';
            submitBtn.disabled = true;
        }
    });
    if (iframe) {
        iframe.addEventListener("load", function() {
            if (isSubmitting) {
                isSubmitting = false;
                if (submitBtn) {
                    submitBtn.innerHTML = 'Send Message <i class="bx bx-send"></i>';
                    submitBtn.disabled = false;
                }
                if (formStatus) {
                    formStatus.textContent = "Thank you! Your message has been sent successfully.";
                    formStatus.classList.add("show-success");
                    setTimeout(function() {
                        formStatus.classList.remove("show-success");
                    }, 6000);
                }
                form.reset();
            }
        });
    }
}