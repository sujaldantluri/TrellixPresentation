document.addEventListener('DOMContentLoaded', () => {
    const industryBoxes = document.querySelectorAll('.industry-box');

    industryBoxes.forEach(box => {
        const description = box.querySelector('.term-description');

        // Hide the description initially
        description.style.display = 'none';

        box.addEventListener('click', () => {
            // Toggle visibility on click
            const isVisible = description.style.display === 'block';
            description.style.display = isVisible ? 'none' : 'block';
        });
    });

    console.log("pain-points.js loaded and event listeners added."); // Debugging line
});
