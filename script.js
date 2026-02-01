// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Filter projects
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Contact Form Submission with Netlify Function
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validation
        if (!name || !email || !message) {
            showAlert('Please fill in all fields', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('Please enter a valid email address', 'error');
            return;
        }

        // Show loading
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            const functionURL = window.location.origin + '/.netlify/functions/send-email';

            const response = await fetch(functionURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            });

            const data = await response.json();

            if (data.success) {
                showAlert('Message sent successfully! I will reply soon.', 'success');
                contactForm.reset();
            } else {
                showAlert(`Failed to send: ${data.error || 'Unknown error'}`, 'error');
            }

        } catch (error) {
            console.error('Error:', error);
            showAlert('Network error. Please try again.', 'error');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Show alert function
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create alert element
    const alert = document.createElement('div');
    alert.className = `custom-alert ${type}`;
    alert.innerHTML = `
        <p>${message}</p>
        <button class="close-alert"><i class="fas fa-times"></i></button>
    `;

    // Add styles
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        max-width: 400px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    `;

    if (type === 'success') {
        alert.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
        alert.style.color = '#64ffda';
        alert.style.border = '1px solid rgba(100, 255, 218, 0.3)';
    } else {
        alert.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
        alert.style.color = '#ff6b6b';
        alert.style.border = '1px solid rgba(255, 107, 107, 0.3)';
    }

    // Close button styles
    const closeBtn = alert.querySelector('.close-alert');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        font-size: 1rem;
        padding: 0;
    `;

    // Add close functionality
    closeBtn.addEventListener('click', () => {
        alert.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alert.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => alert.remove(), 300);
        }
    }, 5000);

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(alert);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Skills animation when in view
const skillsSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.level-fill');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate skill bars
            skillBars.forEach(bar => {
                const targetWidth = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 300);
            });
        }
    });
}, { threshold: 0.3 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {

    // Add fade-in animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

