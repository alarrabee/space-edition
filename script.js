// Select all planet articles
document.querySelectorAll('.planet').forEach(planet => {
    // Toggle the flipped class on mouse enter
    planet.addEventListener('mouseenter', () => {
        planet.classList.add('flipped');
    });

    // Remove the flipped class on mouse leave
    planet.addEventListener('mouseleave', () => {
        planet.classList.remove('flipped');
    });
});
