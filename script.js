function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Remove active class from all links
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        // Add active class to the clicked link
        this.classList.add('active');
        // Close the navigation menu after clicking
        const nav = document.querySelector('nav');
        nav.classList.remove('active');
    });
});