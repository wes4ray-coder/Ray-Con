// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-links a, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !phone || !message) {
                alert('Please fill in all required fields (Name, Phone, and Project Details).');
                return;
            }
            
            // Simulate form submission (in a real implementation, this would send to a server)
            alert(`Thank you, ${name}! We've received your request for ${service || 'construction services'}. We'll contact you at ${phone} within 24 hours to discuss your project.`);
            
            // Reset form
            this.reset();
        });
    }

    // Header background change on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        } else {
            header.style.backgroundColor = '';
        }
    });

    // Gallery item click handling (placeholder for future lightbox functionality)
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // In a real implementation, this would open a lightbox with the full image
            const placeholder = this.querySelector('.placeholder-image p');
            if (placeholder) {
                alert(`This would show the full ${placeholder.textContent} in a lightbox gallery.`);
            }
        });
        
        // Add cursor pointer to indicate clickability
        item.style.cursor = 'pointer';
    });

    // Service card hover effects (additional interactivity)
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(243, 156, 18, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Mobile menu toggle functionality (for future mobile menu implementation)
    function initMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        
        // This would be expanded for a full mobile hamburger menu
        if (window.innerWidth <= 768) {
            console.log('Mobile view detected - menu behavior would be adjusted here');
        }
    }
    
    // Initialize mobile menu handling
    initMobileMenu();
    
    // Re-initialize on window resize
    window.addEventListener('resize', initMobileMenu);

    // Add loading animation (fade in effect)
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initially hide sections and observe them
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
    
    // Show hero section immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});

// Utility function for future API integrations
function sendContactForm(formData) {
    // This would be implemented to send data to a backend service
    // For now, it's just a placeholder
    console.log('Contact form data:', formData);
    
    // Example of what this might look like with a real backend:
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for your message! We\'ll be in touch soon.');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try calling us directly.');
    });
    */
}

// Phone number click handling (for mobile devices)
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumbers = document.querySelectorAll('a[href^="tel:"]');
    
    phoneNumbers.forEach(phone => {
        phone.addEventListener('click', function() {
            // Analytics tracking could be added here
            console.log('Phone number clicked:', this.href);
        });
    });
});