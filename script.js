document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Generic Image Carousels ---
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        let currentIndex = 0;

        if (images.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            return;
        }

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });
        }
        showImage(currentIndex);
    });

    // --- Testimonial Slider ---
    const testimonials = document.querySelectorAll('.testimonial');
    const prevTestimonialBtn = document.getElementById('prev-testimonial');
    const nextTestimonialBtn = document.getElementById('next-testimonial');
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    if (testimonials.length > 0) {
        showTestimonial(currentTestimonialIndex);

        if (prevTestimonialBtn) {
            prevTestimonialBtn.addEventListener('click', () => {
                currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
                showTestimonial(currentTestimonialIndex);
            });
        }

        if (nextTestimonialBtn) {
            nextTestimonialBtn.addEventListener('click', () => {
                currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
                showTestimonial(currentTestimonialIndex);
            });
        }
    }

    // --- Tab Functionality ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    if (tabLinks.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const tabId = link.getAttribute('data-tab');

                tabLinks.forEach(innerLink => innerLink.classList.remove('active'));
                link.classList.add('active');

                tabContents.forEach(content => {
                    content.classList.toggle('active', content.id === `tab-${tabId}`);
                });
            });
        });
    }

    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    }
});
