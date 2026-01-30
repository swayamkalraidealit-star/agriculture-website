// --- Mini Slideshow Logic ---
window.changeMiniSlide = function(n, slideshowId) {
    console.log('changeMiniSlide called with n:', n, 'slideshowId:', slideshowId);
    const slideshow = document.getElementById(slideshowId);
    if (!slideshow) {
        console.log('Slideshow not found:', slideshowId);
        return;
    }
    
    const miniSlides = slideshow.querySelectorAll('.mini-slide');
    console.log('Found slides:', miniSlides.length);
    if (miniSlides.length === 0) {
        console.log('No mini slides found');
        return;
    }
    
    // Find currently active slide
    let activeIndex = Array.from(miniSlides).findIndex(s => s.classList.contains('active'));
    console.log('Current active index:', activeIndex);
    
    // If no active slide, start at 0
    if (activeIndex === -1) {
        activeIndex = 0;
    }
    
    // Remove active class from current slide
    miniSlides[activeIndex].classList.remove('active');
    
    // Calculate new index
    activeIndex += n;
    
    // Wrap around
    if (activeIndex >= miniSlides.length) activeIndex = 0;
    if (activeIndex < 0) activeIndex = miniSlides.length - 1;
    
    console.log('New active index:', activeIndex);
    
    // Add active class to new slide
    miniSlides[activeIndex].classList.add('active');
};

document.addEventListener('DOMContentLoaded', () => {
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
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });
    }

    // Auto Play
    let slideTimer = null;
    if (slides.length > 0) {
        slideTimer = setInterval(nextSlide, slideInterval);
    }

    function resetTimer() {
        if (slideTimer) clearInterval(slideTimer);
        if (slides.length > 0) {
            slideTimer = setInterval(nextSlide, slideInterval);
        }
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

    // --- About Modal Logic ---
    const aboutModal = document.getElementById("about-modal");
    const aboutBtn = document.getElementById("read-more-btn");
    const aboutCloseSpan = document.getElementsByClassName("about-close-btn")[0];

    if (aboutBtn) {
        aboutBtn.onclick = function(e) {
            e.preventDefault();
            aboutModal.style.display = "block";
        }
    }

    if (aboutCloseSpan) {
        aboutCloseSpan.onclick = function() {
            aboutModal.style.display = "none";
        }
    }



    // --- Export and Import Documentation Modal ---
    const impExpDocsModal = document.getElementById("imp-exp-docs-modal");
    const impExpDocsBtn = document.getElementById("imp-exp-docs-box");
    const impExpDocsClose = document.querySelector(".imp-exp-docs-close-btn");

    if (impExpDocsBtn) {
        impExpDocsBtn.onclick = () => impExpDocsModal.style.display = "block";
    }
    if (impExpDocsClose) {
        impExpDocsClose.onclick = () => impExpDocsModal.style.display = "none";
    }

    // --- Import of Germplasm Modal ---
    const germplasmModal = document.getElementById("germplasm-import-modal");
    const germplasmBtn = document.getElementById("germplasm-import-box");
    const germplasmClose = document.querySelector(".germplasm-import-close-btn");

    if (germplasmBtn) {
        germplasmBtn.onclick = () => germplasmModal.style.display = "block";
    }
    if (germplasmClose) {
        germplasmClose.onclick = () => germplasmModal.style.display = "none";
    }

    // --- Seed License Modal ---
    const seedLicenseModal = document.getElementById("seed-license-modal");
    const seedLicenseBtn = document.getElementById("seed-license-box");
    const seedLicenseClose = document.querySelector(".seed-license-close-btn");

    if (seedLicenseBtn) {
        seedLicenseBtn.onclick = () => seedLicenseModal.style.display = "block";
    }
    if (seedLicenseClose) {
        seedLicenseClose.onclick = () => seedLicenseModal.style.display = "none";
    }

    // --- DSIR R&D Modal ---
    const dsirModal = document.getElementById("dsir-rnd-modal");
    const dsirBtn = document.getElementById("dsir-rnd-box");
    const dsirClose = document.querySelector(".dsir-rnd-close-btn");

    if (dsirBtn) {
        dsirBtn.onclick = () => dsirModal.style.display = "block";
    }
    if (dsirClose) {
        dsirClose.onclick = () => dsirModal.style.display = "none";
    }

    // --- Plant Variety Protection Modal ---
    const pvpServicesModal = document.getElementById("pvp-services-modal");
    const pvpServicesBtn = document.getElementById("pvp-services-box");
    const pvpServicesClose = document.querySelector(".pvp-services-close-btn");

    if (pvpServicesBtn) {
        pvpServicesBtn.onclick = () => pvpServicesModal.style.display = "block";
    }
    if (pvpServicesClose) {
        pvpServicesClose.onclick = () => pvpServicesModal.style.display = "none";
    }

    // --- Product Gallery Modal Logic ---
    const galleryModal = document.getElementById("product-gallery-modal");
    console.log('Checking for gallery modal:', galleryModal ? 'FOUND' : 'NOT FOUND');
    console.log('Product cards found:', document.querySelectorAll('.product-card').length);
    
    if (galleryModal) {
        console.log('Gallery modal exists, setting up...');
        const galleryClose = document.querySelector(".gallery-close-btn");
        const galleryGrid = document.getElementById("gallery-images");
        const galleryProductName = document.getElementById("gallery-product-name");

        const productImages = {
            'nylon-nets': {
                name: 'Nylon Cage & Shade Nets',
                images: ['images/product_images/nylon_cage_nets.jpg']
            },
            'pollination-bags': {
                name: 'Pollination & Selfing Bags',
                images: ['images/pollination_bags/bag1.jpg', 'images/pollination_bags/bag2.jpg']
            },
            'lab-harvest': {
                name: 'Lab & Harvest Supplies',
                images: ['images/product_images/Seed%20Harvesting%20Bag%20%20-%20Fine%20Quality%2024%20mesh.jpg', 'images/product_images/lab_harvest_bags.jpg', 'images/product_images/seedling_tray.jpg', 'images/product_images/plant_stakes.jpg']
            },
            'brown-selfing': {
                name: 'Brown Selfing Bags',
                images: ['images/brown_selfing_bags/bag1.jpg', 'images/brown_selfing_bags/bag2.jpg', 'images/brown_selfing_bags/bag3.jpg']
            },
            'harvest-bags': {
                name: 'Harvesting Bags (Nylon/Cloth)',
                images: ['images/harvesting_bags/bag1.jpg', 'images/harvesting_bags/bag2.jpg', 'images/harvesting_bags/bag3.jpg', 'images/harvesting_bags/bag4.jpg', 'images/harvesting_bags/bag5.jpg']
            },
            'agri-labels': {
                name: 'Agricultural Labels',
                images: ['images/labels/label1.jpg', 'images/labels/label2.jpg', 'images/labels/label3.jpg']
            }
        };

        function openGallery(productId) {
            const product = productImages[productId];
            if (!product) return;

            galleryProductName.innerText = product.name;
            galleryGrid.innerHTML = '';

            product.images.forEach(imgSrc => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.innerHTML = `<img src="${imgSrc}" alt="${product.name}">`;
                galleryGrid.appendChild(item);
            });

            galleryModal.style.display = "block";
        }

        // Set up click handlers for product cards
        const cards = document.querySelectorAll('.product-card');
        console.log('Attaching click handlers to', cards.length, 'cards');
        
        cards.forEach((card, idx) => {
            console.log('Card', idx, ':', card.getAttribute('data-product-id'));
            card.addEventListener('click', function(e) {
                console.log('CLICK EVENT FIRED');
                // Skip if clicking on buttons
                if (e.target.closest('.mini-prev, .mini-next')) {
                    console.log('Clicked on mini button');
                    return;
                }
                
                const productId = card.getAttribute('data-product-id');
                console.log('Card clicked, productId:', productId);
                if (productId) {
                    console.log('Opening gallery for:', productId);
                    openGallery(productId);
                }
            });
        });

        // Close button handler
        if (galleryClose) {
            galleryClose.addEventListener('click', () => {
                galleryModal.style.display = "none";
            });
        }
    } else {
        console.log('Gallery modal not found on this page');
    }

    // Update window.onclick to handle all modals
    window.onclick = function(event) {
        const galleryModal = document.getElementById("product-gallery-modal");
        const modals = [modal, aboutModal, impExpDocsModal, germplasmModal, seedLicenseModal, dsirModal, pvpServicesModal, galleryModal];
        modals.forEach(m => {
            if (m && event.target == m) {
                m.style.display = "none";
            }
        });
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
// ... rest of the file

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
    // Auto-rotate mini-slideshows
    setInterval(() => {
        document.querySelectorAll('.mini-slideshow').forEach(slideshow => {
            if (slideshow.id) {
                window.changeMiniSlide(1, slideshow.id);
            }
        });
    }, 4000);

});