let currentSlide = 0;
const descriptions = [
    {
        text: "This stunning image captures the grandeur of towering mountains bathed in the warm glow of sunrise. The rugged peaks, draped in a soft layer of snow, rise dramatically against a clear blue sky. As the first rays of sunlight illuminate the landscape, the interplay of light and shadow creates a breathtaking spectacle. This scene not only highlights the beauty of nature but also evokes a sense of adventure and tranquility, inviting viewers to explore the great outdoors.",
        color: "#ff4500" // Orange-red color for this description
    },
    {
        text: "Immerse yourself in the peaceful embrace of a lush green forest, where towering trees create a natural canopy overhead. Sunlight filters through the leaves, casting dappled patterns on the forest floor. This image showcases the intricate details of the foliage, from vibrant green leaves to the textured bark of ancient trees. The serenity of this woodland scene provides a perfect escape from the hustle and bustle of daily life, reminding us of the calming power of nature.",
        color: "#228b22" // Forest Green color
    },
    {
        text: "Witness the breathtaking beauty of a sunset over the ocean, where the sky transforms into a canvas of vibrant colors. Shades of orange, pink, and purple blend seamlessly as the sun dips below the horizon, casting shimmering reflections on the water's surface. This image captures the tranquility and awe-inspiring majesty of the sea at dusk, inviting viewers to pause and appreciate the fleeting beauty of nature's daily spectacle.",
        color: "#ff6347" // Tomato color (red-orange) for sunset
    },
    {
        text: "This captivating image showcases the mesmerizing beauty of a waterfall cascading down rugged cliffs, surrounded by lush greenery. The crystal-clear water tumbles over rocks, creating a soft mist that catches the sunlight, resulting in a dazzling display of rainbows. The surrounding forest, vibrant with life, provides a rich backdrop of varied foliage, enhancing the sense of tranquility and natural wonder.",
        color: "#1e90ff" // Dodger Blue for waterfall
    }
];

function initSlider() {
    const slides = document.querySelectorAll('#slider .slide');
    slides[currentSlide].classList.add('active'); // Show the first slide
    updateDescription();
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('#slider .slide');
    slides[currentSlide].classList.remove('active'); // Remove active class from current slide
    currentSlide = (currentSlide + direction + slides.length) % slides.length; // Calculate new slide index
    slides[currentSlide].classList.add('active'); // Add active class to new slide
    updateDescription(); // Update description with color
}

function updateDescription() {
    const descriptionElement = document.getElementById('slide-description');
    descriptionElement.textContent = descriptions[currentSlide].text;
    descriptionElement.style.color = descriptions[currentSlide].color; // Change color based on slide
}

// Auto-slide feature
setInterval(() => changeSlide(1), 5000); // Change slide every 5 seconds

// Initialize slider on page load
document.addEventListener("DOMContentLoaded", initSlider);

// Event listeners for next and prev buttons
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
