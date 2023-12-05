const gameContainer = document.getElementById("game-container");
const attemptsElement = document.getElementById("attempts");
let attempts = 0;
let firstCard = null;
let secondCard = null;
let photoUrls = [
    'images/fatbike.jpg',
    'images/mountainbike.jpg',
    'images/roadbike.jpg',
    'images/tricycle.jpg',
    'images/unicycle.jpg',
    'images/fatbike.jpg',
    'images/mountainbike.jpg',
    'images/roadbike.jpg',
    'images/tricycle.jpg',
    'images/unicycle.jpg'
];

// Shuffle the photo URLs
shuffleArray(photoUrls);

// Create the game board
photoUrls.forEach((url, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;

    // Create an image element for each card with a default image
    const image = document.createElement("img");
    image.src = 'images/gofish.jpg';
    image.alt = "Card";
    card.appendChild(image);

    card.addEventListener("click", handleCardClick);
    gameContainer.appendChild(card);
});

function handleCardClick(event) {
    const clickedCard = event.currentTarget;
    const imageElement = clickedCard.querySelector("img");

    if (clickedCard === firstCard || clickedCard.classList.contains("matched")) {
        return; // Ignore clicks on the same card or matched cards
    }

    if (!clickedCard.classList.contains("flipped")) {
        // Show the actual image
        imageElement.src = photoUrls[clickedCard.dataset.index];
    }

    clickedCard.classList.add("flipped");

    if (!firstCard) {
        firstCard = clickedCard;
    } else {
        secondCard = clickedCard;
        attempts++;
        attemptsElement.textContent = `Attempts: ${attempts}`;

        if (firstCard.dataset.index === secondCard.dataset.index) {
            // Same card, ignore
        } else if (firstCard.querySelector("img").src === secondCard.querySelector("img").src) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            resetCards();
        } else {
            setTimeout(() => {
                // Hide the images and flip the cards back
                firstCard.querySelector("img").src = 'images/gofish.jpg';
                secondCard.querySelector("img").src = 'images/gofish.jpg';
                resetCards();
            }, 1000);
        }
    }

    checkGameCompletion();
}

function resetCards() {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    firstCard = null;
    secondCard = null;
}

function checkGameCompletion() {
    if (document.querySelectorAll(".matched").length === photoUrls.length) {
        // Game completed, update the attempts in JSON format
        const playerData = JSON.parse(localStorage.getItem("playerData")) || {};
        playerData.attempts = attempts;
        localStorage.setItem("playerData", JSON.stringify(playerData));

        // Redirect to the final page
        window.location.href = "final_page.html";
    }
}

// Shuffle function to shuffle photo URLs
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


