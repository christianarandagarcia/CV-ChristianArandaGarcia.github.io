// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Add a hover effect to all section titles
    const sectionHeaders = document.querySelectorAll('section h2');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('mouseover', () => {
            header.style.color = '#2E7D32';
            header.style.cursor = 'pointer';
        });

        header.addEventListener('mouseout', () => {
            header.style.color = '#4CAF50';
        });
    });

    // Add a smooth scrolling effect for navigation links (if applicable)
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example dynamic feature: Display current year in the footer
    const footer = document.querySelector('footer');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML += `<p>&copy; ${year} Christian Aranda Garcia. Tots els drets reservats.</p>`;
    }
});
