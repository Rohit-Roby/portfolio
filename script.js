// ========================================
// PORTFOLIO - INTERACTIVE FEATURES
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MOBILE MENU TOGGLE ==========
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinkItems = document.querySelectorAll('.nav-link');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // ========== SMOOTH SCROLL NAVIGATION ==========
    const navLinkElements = document.querySelectorAll('.nav-link');
    
    navLinkElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== ACTIVE NAVIGATION STATE ==========
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinkElements.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // ========== SCROLL REVEAL ANIMATIONS ==========
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Unobserve after revealing (one-time animation)
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // ========== NAVBAR BACKGROUND ON SCROLL ==========
    const navbar = document.querySelector('.navbar');
    
    function updateNavbarBackground() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
        }
    }
    
    // ========== SCROLL EVENT LISTENER ==========
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        // Debounce scroll events for better performance
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(function() {
            updateActiveNavLink();
            updateNavbarBackground();
        });
    });
    
    // Initial calls
    updateActiveNavLink();
    updateNavbarBackground();
    
    // ========== SKILL TAG ANIMATIONS ON HOVER ==========
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            // Add a slight random rotation for fun
            const randomRotation = (Math.random() - 0.5) * 5;
            this.style.transform = `scale(1.05) rotate(${randomRotation}deg)`;
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // ========== DYNAMIC TYPING EFFECT FOR HERO (OPTIONAL) ==========
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        heroSubtitle.style.opacity = '1';
        
        let charIndex = 0;
        
        function typeWriter() {
            if (charIndex < originalText.length) {
                heroSubtitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // ========== PROJECT CARDS TILT EFFECT ==========
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `translateY(-10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
    
    // ========== TIMELINE ANIMATIONS ==========
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animation of timeline items
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.2
    });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    });
    
    // ========== PARALLAX EFFECT FOR WAVE DECORATIONS ==========
    const waveTop = document.querySelector('.wave-top');
    const waveBottom = document.querySelector('.wave-bottom');
    
    if (waveTop && waveBottom) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            
            if (scrolled < window.innerHeight) {
                waveTop.style.transform = `translateY(${scrolled * 0.3}px)`;
                waveBottom.style.transform = `translateY(${-scrolled * 0.2}px)`;
            }
        });
    }
    
    // ========== CONTACT ICON ANIMATIONS ==========
    const contactIcons = document.querySelectorAll('.contact-icon');
    
    contactIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'iconBounce 0.5s ease';
            }, 10);
        });
    });
    
    // Add bounce animation keyframes dynamically
    if (!document.getElementById('iconBounceStyle')) {
        const style = document.createElement('style');
        style.id = 'iconBounceStyle';
        style.textContent = `
            @keyframes iconBounce {
                0%, 100% { transform: scale(1) rotate(0deg); }
                25% { transform: scale(1.15) rotate(5deg); }
                50% { transform: scale(1.1) rotate(-5deg); }
                75% { transform: scale(1.15) rotate(3deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ========== PERFORMANCE OPTIMIZATION ==========
    // Throttle resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        
        resizeTimeout = setTimeout(function() {
            // Recalculate positions if needed
            updateActiveNavLink();
        }, 250);
    });
    
    // ========== ACCESSIBILITY ENHANCEMENTS ==========
    // Add keyboard navigation support
    navLinkElements.forEach(link => {
        link.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                this.click();
            }
        });
    });
    
    // Focus management for mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
    
    // ========== SMOOTH ENTRANCE ANIMATION ==========
    // Fade in the entire page on load
    document.body.style.opacity = '0';
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
    
    console.log('Portfolio initialized successfully! 🚀');
});

// ========== PRELOAD CRITICAL RESOURCES ==========
// Preload fonts for better performance
const fontPreload = document.createElement('link');
fontPreload.rel = 'preload';
fontPreload.as = 'font';
fontPreload.type = 'font/woff2';
fontPreload.crossOrigin = 'anonymous';

// ========== UTILITY FUNCTIONS ==========

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = document.createElement('script');
    smoothScrollPolyfill.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.head.appendChild(smoothScrollPolyfill);
}
