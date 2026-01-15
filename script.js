document.addEventListener('DOMContentLoaded', () => {

    // --- Carousel Logic ---
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    const slideInterval = 5000;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Button Events
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    // Auto Play
    let slideTimer = setInterval(nextSlide, slideInterval);

    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, slideInterval);
    }

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%'; /* Pushes it below the fixed header */
            navLinks.style.left = '0';
            navLinks.style.backgroundColor = '#1b5e20';
            navLinks.style.width = '100%';
            navLinks.style.padding = '20px';
            navLinks.style.borderTop = '1px solid #fdd835';
            navLinks.style.borderTop = '1px solid #fdd835';
        }
    });

    // --- Contact Modal Logic ---
    const modal = document.getElementById("contact-modal");
    const btn = document.getElementById("open-contact-btn");
    const span = document.getElementsByClassName("close-btn")[0];

    // Open Modal
    btn.onclick = function(e) {
        e.preventDefault(); // Prevent default anchor jump
        modal.style.display = "block";
    }

    // Close Modal (x)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close Modal (Outside Click)
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            fetch('https://n8n.intelligens.app/webhook/send_mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    contactForm.reset();
                    modal.style.display = "none";
                } else {
                    // Alert specific server error
                    alert(`Server Error: ${response.status} ${response.statusText}. Please try again.`);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Alert specific network/CORS error
                alert(`Submission Failed: ${error.message}. This might be a CORS or Network issue.`);
            })
            .finally(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});