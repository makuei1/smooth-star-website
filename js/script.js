/**
 * Smooth Star Leadership Institute - Interactivity Script
 * Focus: Navigation, Scroll effects, and UI enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect
    // Adds a shadow and changes background opacity when scrolling
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'bg-white');
            navbar.style.transition = 'all 0.3s ease-in-out';
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });

    // 2. Smooth Scrolling for Navigation Links
    // Ensures internal links slide smoothly to their targets
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const navCollapse = document.querySelector('.navbar-collapse');
                if (navCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                    bsCollapse.hide();
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Scroll Reveal Animation
    // Simple Intersection Observer to fade in cards as they appear
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select cards and sections to animate
    const animatedElements = document.querySelectorAll('.card, .about-section img, .col-lg-3');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        revealObserver.observe(el);
    });

   
});
