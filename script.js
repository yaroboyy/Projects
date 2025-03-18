// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the ID from href attribute
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for nav height
                behavior: 'smooth'
            });
        }
    });
});

// Contact Me button (this is just a simple example, can be expanded)
const contactButton = document.querySelector('.contact .items .item button');
if (contactButton) {
    contactButton.addEventListener('click', () => {
        window.location.href = 'mailto:daniilarosik461@gmail.com'; // Use your actual email // Scroll to the Contact section
    });
}
// Define the URL to redirect to
const projectsUrl = 'https://github.com/yaroboyy'; // Replace with the actual URL of your projects

// Add an event listener to the "Explore my projects" button
document.getElementById('explore-projects-button').addEventListener('click', () => {
    window.location.href = projectsUrl; // Redirect to the projects URL
});


// Add event listener for the "Portfolio" link
document.getElementById('portfolio-link').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    window.location.href = 'https://danresume.my.canva.site/'; // Redirect to the portfolio URL
});

// Add event listener for the "View My Work" button
document.getElementById('view-work-button').addEventListener('click', () => {
    window.location.href = 'https://github.com/yaroboyy' ; // Redirect to the portfolio URL
});
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
        window.location.href = 'https://github.com/yaroboyy'; // Replace with your About URL
    });
}



// Github Button to open your GitHub profile
const githubButton = document.querySelector('.hero .left-section .top .buttons button.git');
if (githubButton) {
    githubButton.addEventListener('click', () => {
        window.open('https://github.com/yaroboyy', '_blank'); // Change to your GitHub URL
    })};
    

// Social Media Icons (Example: Opening Social Media Links in a New Tab)
document.querySelectorAll('.hero .left-section .bottom .icons i').forEach(icon => {
    icon.addEventListener('click', () => {
        const iconClass = icon.className;

        if (iconClass.includes('ri-snapchat-line')) {
            window.open('https://www.snapchat.com/add/your-username', '_blank'); // Change to your Snapchat
        } else if (iconClass.includes('ri-twitter-x-line')) {
            window.open('https://twitter.com/your-username', '_blank'); // Change to your Twitter
        } else if (iconClass.includes('ri-instagram-line')) {
            window.open('https://www.instagram.com/your-username', '_blank'); // Change to your Instagram
        }
    });
});

// Explore Projects button
const exploreProjectsButton = document.querySelector('.projects .inner > button');
if (exploreProjectsButton) {
    exploreProjectsButton.addEventListener('click', () => {
        window.location.href = '#projects'; // Scroll to Projects section (or could link to external page)
    });
}

// Hire Me button functionality
const hireButton = document.querySelector('.hero .left-section .top .buttons button.doc');
if (hireButton) {
    hireButton.addEventListener('click', () => {
        window.location.href = 'mailto:daniilarosik461@gmail.com'; // Use your actual email // Scroll to the Contact section
    });
}


// Handle Image Hover Effects in Projects Section (Adding Basic Hover Animations)
document.querySelectorAll('.projects .inner .items .item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});
