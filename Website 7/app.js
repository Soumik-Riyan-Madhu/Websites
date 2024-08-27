document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('header');
    var headerPlaceholder = document.getElementById('header-placeholder');
    var heroSection = document.getElementById('hero');

    // Listen for scroll events
    window.addEventListener('scroll', function () {
        // Get the vertical scroll position
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Check if the scroll position is below the hero section
        if (scrollPosition >= heroSection.offsetHeight) {
            // Add the 'header-transparent' class to make the header transparent
            header.classList.add('header-transparent');
            // Show a placeholder to maintain spacing
            headerPlaceholder.style.display = 'block';
        } else {
            // Remove the 'header-transparent' class to make the header opaque
            header.classList.remove('header-transparent');
            // Hide the placeholder when at the top
            headerPlaceholder.style.display = 'none';
        }
    });
});
