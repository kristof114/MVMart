/**
 * CardVault - Main JavaScript File
 * Contains all client-side functionality for the static website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Close notification bar
    const closeNotificationBtn = document.querySelector('.close-notification');
    const notificationBar = document.querySelector('.notification-bar');
    
    if (closeNotificationBtn && notificationBar) {
        closeNotificationBtn.addEventListener('click', function() {
            notificationBar.style.display = 'none';
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // If menu is now active, display as flex column
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = '#fff';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            } else {
                // Otherwise reset to default (hidden on mobile)
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    }
    
    // Handle window resize for responsive nav
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.padding = '0';
            navLinks.style.boxShadow = 'none';
        } else if (navLinks && !navLinks.classList.contains('active')) {
            navLinks.style.display = 'none';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Only scroll if the target exists
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add a subtle hover effect to testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (testimonialCards) {
        testimonialCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            });
        });
    }
});
