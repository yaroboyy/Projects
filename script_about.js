// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll functionality for the navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // get the section ID from the link
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust to make space for fixed navbar
                    behavior: 'smooth' // Smooth scrolling
                });
            }
        });
    });

    // Button functionality for "My Projects" to open a new window or show alert
    const projectButton = document.querySelector('nav button');
    
    if (projectButton) {
        projectButton.addEventListener('click', function() {
            // You can replace the link with your actual project link
            window.open('https://github.com/yaroboyy', '_blank');  // Open GitHub profile in new tab
        });
    }
    // Docs Button functionality
const docsButton = document.querySelector('.docs-button');
if (docsButton) {
    docsButton.addEventListener('click', () => {
        // Redirect to a Docs page or open a document
        window.location.href = 'https://danresume.my.canva.site/'; // Replace with your Docs URL
    });
}

// Projects Button functionality
const projectsButton = document.querySelector('.projects-button');
if (projectsButton) {
    projectsButton.addEventListener('click', () => {
        // Redirect to the Projects page
        window.location.href = 'https://example.com/projects'; // Replace with your Projects URL
    });
}

// About Button functionality
const aboutButton = document.querySelector('.about-button');
if (aboutButton) {
    aboutButton.addEventListener('click', () => {
        // Redirect to the About page
        window.location.href = 'https://example.com/about'; // Replace with your About URL
    });
}


    // Highlight the active section in the navigation as the user scrolls
    const sections = document.querySelectorAll('section, section-one');
    const sectionOffsets = [];

    sections.forEach(section => {
        sectionOffsets.push({
            id: section.id,
            top: section.offsetTop - 50, // Adjust for fixed navbar
            bottom: section.offsetTop + section.offsetHeight
        });
    });

    // Function to check if a section is in view and highlight the navigation link
    function highlightActiveSection() {
        const scrollPosition = window.scrollY;
        navLinks.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const section = document.getElementById(targetId);

            if (section) {
                const sectionOffset = sectionOffsets.find(offset => offset.id === targetId);

                if (scrollPosition >= sectionOffset.top && scrollPosition < sectionOffset.bottom) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }

    // Listen for scroll events to highlight active section
    window.addEventListener('scroll', highlightActiveSection);

    // Trigger once on page load to highlight the current section
    highlightActiveSection();

});
