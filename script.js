
// About section js
// Add a scroll event listener for animation on scroll
window.addEventListener("scroll", function() {
    const valueSection = document.getElementById('value');
    const visionSection = document.getElementById('vision');
    const missionSection = document.getElementById('mission');

    const valuePosition = valueSection.getBoundingClientRect().top;
    const visionPosition = visionSection.getBoundingClientRect().top;
    const missionPosition = missionSection.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.3;

    if (valuePosition < screenPosition) {
        valueSection.style.animation = 'fadeInLeft 1.5s forwards';
    }

    if (visionPosition < screenPosition) {
        visionSection.style.animation = 'fadeInRight 1.5s forwards';
    }

    if (missionPosition < screenPosition) {
        missionSection.style.animation = 'fadeInRight 1.5s forwards';
    }
});

// business animation
window.addEventListener('scroll', function() {
    const showcaseSection = document.querySelector('.business-showcase');
    const showcasePosition = showcaseSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (showcasePosition < screenPosition) {
        showcaseSection.style.opacity = '1';
        showcaseSection.style.transform = 'translateY(0)';
        showcaseSection.style.transition = 'all 1s ease-in-out';
    } else {
        showcaseSection.style.opacity = '0';
        showcaseSection.style.transform = 'translateY(100px)';
    }
});