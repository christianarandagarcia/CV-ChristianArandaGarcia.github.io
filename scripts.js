// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth fade-in effect for sections
    const sections = document.querySelectorAll('section');
    
    const fadeIn = (element) => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1.5s ease-in-out';
        element.style.opacity = 1;
    };

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1.5s ease-in-out';
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

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic footer year update
    const footer = document.querySelector('footer');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML += `<p>&copy; ${year} Christian Aranda Garcia. Tots els drets reservats.</p>`;
    }

    // Artistic hover effects for navigation menu
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FF5722';
            link.style.textShadow = '0 0 10px rgba(255, 87, 34, 0.7)';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
            link.style.textShadow = '';
        });
    });
});
