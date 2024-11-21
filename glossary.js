document.addEventListener('DOMContentLoaded', () => {
    const termBoxes = document.querySelectorAll('.term-box');

    termBoxes.forEach(box => {
        box.addEventListener('click', (event) => {
            event.stopPropagation(); // prevents conflicting events
            const description = box.querySelector('.term-description');
            if (description) {
                
                const isVisible = window.getComputedStyle(description).display === 'block';
                description.style.display = isVisible ? 'none' : 'block';
            }
        });
    });
});
