const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const squareSize = 50;
let squareX = canvas.width / 2 - squareSize / 2;
let squareY = canvas.height / 2 - squareSize / 2; 
const speed = 5;

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.fillStyle = 'blue';
    ctx.fillRect(squareX, squareY, squareSize, squareSize); 
}

function updatePosition(direction) {
    if (direction === 'ArrowUp') squareY -= speed;
    if (direction === 'ArrowDown') squareY += speed;
    if (direction === 'ArrowLeft') squareX -= speed;
    if (direction === 'ArrowRight') squareX += speed;

    
    if (squareX < -squareSize) squareX = canvas.width;
    if (squareX > canvas.width) squareX = -squareSize; 
    if (squareY < -squareSize) squareY = canvas.height;
    if (squareY > canvas.height) squareY = -squareSize;

    drawSquare();
}


window.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        updatePosition(e.key); 
    }
});

drawSquare();