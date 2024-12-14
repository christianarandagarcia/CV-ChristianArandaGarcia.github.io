document.addEventListener('DOMContentLoaded', () => {
    // Smooth fade-in effect for sections
    const sections = document.querySelectorAll('section');
    
    const fadeIn = (element) => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s ease-in-out';
        element.style.opacity = 1;
    };

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s ease-in-out';
    });

    const handleScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
                fadeIn(section);
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Navigation menu functionality
    const menuItems = document.querySelectorAll('nav a');
    const sectionsToShow = {
        'about-link': 'about',
        'experience-link': 'experience',
        'education-link': 'education',
        'skills-link': 'skills',
        'contact-link': 'contact'
    };

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = sectionsToShow[item.id];
            
            sections.forEach(section => {
                if (section.id === targetSection) {
                    section.classList.add('show');
                } else {
                    section.classList.remove('show');
                }
            });
        });
    });

    // Ensure home section is always shown on page load
    document.getElementById('home').classList.add('show');
});
