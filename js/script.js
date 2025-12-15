/**
 * script.js
 * * Implements a scroll-based fade-in effect for elements with the class 'animate-on-scroll'.
 * This uses the modern Intersection Observer API for performance.
 */
document.addEventListener("DOMContentLoaded", function() {

    // 1. Configuration for the Intersection Observer
    // The observer watches elements and runs a function when they intersect (enter) the viewport.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Check if the element is currently visible in the viewport
            if (entry.isIntersecting) {
                // Add the 'active' class to the element. 
                // This triggers the CSS transition (opacity: 0 -> 1, translateY(20px) -> 0).
                entry.target.classList.add('active');
                
                // IMPORTANT: Stop observing the element after it has animated once to save resources.
                observer.unobserve(entry.target); 
            }
        });
    }, {
        // Options: Triggers the animation when 10% of the element is visible in the viewport.
        threshold: 0.1 
    });

    // 2. Identify and Observe Target Elements
    // Find all elements in the document that have the class 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        // Start watching each element
        observer.observe(el);
    });
});// JavaScript Document