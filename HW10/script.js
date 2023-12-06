class CanvasObject {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
    }

    // Add a method to move the object autonomously
    moveAutonomously() {
        // Example: move the object in a random direction
        this.x += Math.random() * 2 - 1; // Move left or right randomly
        this.y += Math.random() * 2 - 1; // Move up or down randomly
    }

    // Collision detection with another object
    collidesWith(other) {
        return this.x < other.x + other.size &&
               this.x + this.size > other.x &&
               this.y < other.y + other.size &&
               this.y + this.size > other.y;
    }
}

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let object1 = new CanvasObject(50, 50, 30, "blue"); // User controlled
let object2 = new CanvasObject(300, 300, 30, "red"); // Autonomously moving

let keys = {}; // To track pressed keys

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // User-controlled movement
    if (keys['ArrowUp']) object1.y -= 2;
    if (keys['ArrowDown']) object1.y += 2;
    if (keys['ArrowLeft']) object1.x -= 2;
    if (keys['ArrowRight']) object1.x += 2;

    // Keep object1 within canvas boundaries
    object1.x = Math.max(0, Math.min(canvas.width - object1.size, object1.x));
    object1.y = Math.max(0, Math.min(canvas.height - object1.size, object1.y));

    // Autonomous movement
    object2.moveAutonomously();
    // Keep object2 within canvas boundaries
    object2.x = Math.max(0, Math.min(canvas.width - object2.size, object2.x));
    object2.y = Math.max(0, Math.min(canvas.height - object2.size, object2.y));

    // Collision detection and response
    if (object1.collidesWith(object2)) {
        canvas.style.backgroundColor = 'lightgreen'; // Change background color
        object1.size += 1; // Increase size of object1
        object2.size -= 1; // Decrease size of object2
    } else {
        canvas.style.backgroundColor = ''; // Reset background color
    }

    object1.draw(context);
    object2.draw(context);

    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", function(event) {
    keys[event.key] = true;
});

document.addEventListener("keyup", function(event) {
    keys[event.key] = false;
});

gameLoop();



document.addEventListener('DOMContentLoaded', function() {
    // Start the game loop and other initializations here

    let music = document.getElementById("backgroundMusic");
    let pauseButton = document.getElementById("pauseButton");

    // Start playing music when the page loads
    music.play();

    pauseButton.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            pauseButton.textContent = 'Pause Music'; // Change button text to 'Pause Music'
        } else {
            music.pause();
            pauseButton.textContent = 'Play Music'; // Change button text to 'Play Music'
        }
    });
});

