document.addEventListener('DOMContentLoaded', function() {
    // Language toggle functionality
    const langToggle = document.getElementById('langToggle');
    const langOptions = document.querySelectorAll('.lang-option');
    
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Update active state
            langOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Get selected language
            const lang = this.dataset.lang;
            
            // Toggle language visibility
            document.querySelectorAll('.english').forEach(el => {
                el.style.display = lang === 'en' ? 'block' : 'none';
            });
            document.querySelectorAll('.french').forEach(el => {
                el.style.display = lang === 'fr' ? 'block' : 'none';
            });
            
            // Update elements with data attributes
            document.querySelectorAll('[data-en], [data-fr]').forEach(el => {
                if (el.dataset.en && el.dataset.fr) {
                    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.fr;
                }
            });
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    window.location.hash = targetId;
                }
            }
        });
    });
    
    // Scroll arrow functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const scrollToBottomBtn = document.getElementById('scrollToBottom');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
        
        if ((window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 100) {
            scrollToBottomBtn.classList.add('visible');
        } else {
            scrollToBottomBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToBottomBtn.addEventListener('click', function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
    
    // Image modal functionality
            
    function closeModal() {
        document.getElementById('imageModal').classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Close modal when clicking outside the image
    document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('imageModal').classList.contains('active')) {
            closeModal();
        }
    });
    
    // Your existing interactivity code for cards and sections
    const deviceCards = document.querySelectorAll('.device-card');
    deviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = '#f1f7ed';
            card.style.transform = 'translateX(4px) scale(1.01)';
            card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
            card.style.transition = 'all 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = '#e8f5e9';
            card.style.transform = 'translateX(0) scale(1)';
            card.style.boxShadow = 'none';
            card.style.transition = 'all 0.3s ease';
        });
    });

    const archSections = document.querySelectorAll('.arch-section');
    archSections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#f4f8d4';
            section.style.transform = 'translateY(-2px) scale(1.01)';
            section.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
            section.style.transition = 'all 0.3s ease';
        });
        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = '#f0f4c3';
            section.style.transform = 'translateY(0) scale(1)';
            section.style.boxShadow = 'none';
            section.style.transition = 'all 0.3s ease';
        });
    });

    const simSections = document.querySelectorAll('.sim-section');
    simSections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#e0f7fa';
            section.style.borderColor = '#00bcd4';
            section.style.transition = 'all 0.3s ease';
        });
        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = '#d1f4fa';
            section.style.borderColor = 'transparent';
            section.style.transition = 'all 0.3s ease';
        });
    });
});