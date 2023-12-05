// Arrays for blank and actual images
const blankImages = new Array(10).fill('images/gofish.jpg'); 
const actualImages = [];
const uniqueImages = [
    'images/fatbike.jpg',
    'images/mountainbike.jpg',
    'images/roadbike.jpg',
    'images/tricycle.jpg',
    'images/unicycle.jpg'
];


// Array for actual images
//const actualImages = [];

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Add each unique image twice to the actualImages array
uniqueImages.forEach(image => {
    actualImages.push(image, image);
});

// Shuffle the actualImages array
shuffleArray(actualImages);

// Path for your blank image
const blankImagePath = 'images/gofish.jpg';
//const blankImages = new Array(10).fill(blankImagePath);

// Display blank images and set up click functionality
function displayBlankImages() {
    const container = document.getElementById('game-container');
    container.innerHTML = '';

    blankImages.forEach((_, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = blankImages[index];
        imgElement.setAttribute('data-index', index);
        imgElement.classList.add('image');
        imgElement.addEventListener('click', toggleImage);
        container.appendChild(imgElement);
    });
}

// Function to toggle between the actual image and the blank image
function toggleImage(event) {
    const imgElement = event.target;
    const index = imgElement.getAttribute('data-index');
    
    if (imgElement.src.includes(blankImagePath)) {
        imgElement.src = actualImages[index];
    } else {
        imgElement.src = blankImagePath;
    }
}

displayBlankImages();