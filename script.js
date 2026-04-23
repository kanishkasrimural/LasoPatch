document.addEventListener('DOMContentLoaded', () => {
    // Determine active navigation link based on current path
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') !== '#' && currentPath.includes(link.getAttribute('href'))) {
            // Remove active from all
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active to current
            link.classList.add('active');
        }
    });

    // Mobile menu styling (to be expanded later if a hamburger menu is added)
    // For now we just implement sticky nav styling on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 10px 30px rgba(61, 90, 46, 0.1)';
            navbar.style.padding = '0.75rem 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1rem 0';
        }
    });

    // Update cart counter (simulated)
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        // Retrieve cart logic from local storage later if needed.
        // Currently statically set to 0 in HTML or dynamically updated here
    }
});
