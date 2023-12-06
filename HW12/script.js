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
}

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

let player = new CanvasObject(50, 50, 30, "blue");
let score = 0;

let objects = []; // For non-collidable objects
let collectibles = []; // For collidable collectibles

// Assuming these values are the maximum for random positions
const maxWidth = canvas.width - 30; // Adjust 30 if the size of the objects changes
const maxHeight = canvas.height - 30;




// Load objects from JSON file
//Hosted files are able to be fetched properly w/o browser security issues - JF

fetch('https://raw.githubusercontent.com/Fahroojah/MART-441/main/HW12/objects.json').then(response => response.json()).then(data => {
    data.forEach(() => {
        let x = Math.random() * maxWidth;
        let y = Math.random() * maxHeight;
        objects.push(new CanvasObject(x, y, 30, "green"));
    });
});

// Load collectibles from another JSON file
    fetch('https://raw.githubusercontent.com/Fahroojah/MART-441/main/HW12/collectibles.json').then(response => response.json()).then(data => {
        data.forEach(() => {
            let x = Math.random() * maxWidth;
            let y = Math.random() * maxHeight;
            collectibles.push(new CanvasObject(x, y, 20, "yellow"));
        });
    });

let keys = {};

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Player movement
    if (keys['ArrowUp']) player.y -= 2;
    if (keys['ArrowDown']) player.y += 2;
    if (keys['ArrowLeft']) player.x -= 2;
    if (keys['ArrowRight']) player.x += 2;

    // Keep player within canvas boundaries
    player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));

    // Draw objects and check for collisions with player
    objects.forEach(obj => obj.draw(context));
    collectibles = collectibles.filter(collectible => {
        if (player.collidesWith(collectible)) {
            score += 10; // Increase score
            return false; // Remove collectible
        }
        collectible.draw(context);
        return true;
    });

    player.draw(context);
    requestAnimationFrame(gameLoop);
}

// Add collision detection to CanvasObject class
CanvasObject.prototype.collidesWith = function(other) {
    return this.x < other.x + other.size &&
           this.x + this.size > other.x &&
           this.y < other.y + other.size &&
           this.y + this.size > other.y;
};

document.addEventListener("keydown", event => keys[event.key] = true);
document.addEventListener("keyup", event => keys[event.key] = false);



gameLoop();

