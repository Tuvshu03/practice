// Get the canvas and context
const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

// Constants for game settings
const ROWS = 20;
const COLUMNS = 10;
const BLOCK_SIZE = 30;  // Each block is 30px
const COLORS = [
    null, 'red', 'blue', 'green', 'yellow', 'cyan', 'purple', 'orange'
];

// Game board
let board = [];

// The Tetriminos
const TETRIMINOS = [
    [],
    [[1, 1, 1], [0, 1, 0]], // T shape
    [[1, 1, 1, 1]], // I shape
    [[1, 1], [1, 1]], // O shape
    [[1, 1, 0], [0, 1, 1]], // S shape
    [[0, 1, 1], [1, 1, 0]], // Z shape
    [[1, 1, 1], [1, 0, 0]], // L shape
    [[1, 1, 1], [0, 0, 1]]  // J shape
];

let currentPiece;
let currentPosition;
let gameInterval;
let gameOver = false;

// Initialize the board
function initBoard() {
    board = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(0));
}

// Draw the board
function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLUMNS; col++) {
            if (board[row][col] !== 0) {
                ctx.fillStyle = COLORS[board[row][col]];
                ctx.fillRect(col * BLOCK_SIZE, row * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            }
        }
    }
}

// Draw a piece
function drawPiece() {
    for (let row = 0; row < currentPiece.length; row++) {
        for (let col = 0; col < currentPiece[row].length; col++) {
            if (currentPiece[row][col] !== 0) {
                ctx.fillStyle = COLORS[currentPiece[row][col]];
                ctx.fillRect((currentPosition.x + col) * BLOCK_SIZE, (currentPosition.y + row) * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            }
        }
    }
}

// Generate a new piece
function newPiece() {
    const pieceIndex = Math.floor(Math.random() * 7) + 1;
    currentPiece = TETRIMINOS[pieceIndex];
    currentPosition = { x: Math.floor(COLUMNS / 2) - Math.floor(currentPiece[0].length / 2), y: 0 };
}

// Check for collision
function isCollision() {
    for (let row = 0; row < currentPiece.length; row++) {
        for (let col = 0; col < currentPiece[row].length; col++) {
            if (currentPiece[row][col] !== 0) {
                const boardX = currentPosition.x + col;
                const boardY = currentPosition.y + row;
                if (boardY >= ROWS || boardX < 0 || boardX >= COLUMNS || board[boardY][boardX] !== 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Place piece on the board
function placePiece() {
    for (let row = 0; row < currentPiece.length; row++) {
        for (let col = 0; col < currentPiece[row].length; col++) {
            if (currentPiece[row][col] !== 0) {
                const boardX = currentPosition.x + col;
                const boardY = currentPosition.y + row;
                if (boardY >= 0) {
                    board[boardY][boardX] = COLORS.indexOf(COLORS[COLORS.length - 1]) + 1;
                }
            }
        }
    }
    clearLines();
    if (gameOver) {
        clearInterval(gameInterval);
        alert("Game Over!");
    } else {
        newPiece();
    }
}

// Clear completed lines
function clearLines() {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row].every(cell => cell !== 0)) {
            board.splice(row, 1);
            board.unshift(Array(COLUMNS).fill(0));
            row++;
        }
    }
}

// Move piece down
function moveDown() {
    currentPosition.y++;
    if (isCollision()) {
        currentPosition.y--;
        placePiece();
    }
}

// Rotate piece
function rotatePiece() {
    const rotatedPiece = currentPiece[0].map((_, index) =>
        currentPiece.map(row => row[index])
    ).reverse();
    const oldPiece = currentPiece;
    currentPiece = rotatedPiece;
    if (isCollision()) {
        currentPiece = oldPiece;
    }
}

// Move piece left
function moveLeft() {
    currentPosition.x--;
    if (isCollision()) {
        currentPosition.x++;
    }
}

// Move piece right
function moveRight() {
    currentPosition.x++;
    if (isCollision()) {
        currentPosition.x--;
    }
}

// Start the game
function startGame() {
    initBoard();
    newPiece();
    gameInterval = setInterval(() => {
        if (!gameOver) {
            moveDown();
            drawBoard();
            drawPiece();
        }
    }, 500);
}

// Handle user input
document.addEventListener('keydown', (e) => {
    if (gameOver) return;
    if (e.key === 'ArrowLeft') {
        moveLeft();
    } else if (e.key === 'ArrowRight') {
        moveRight();
    } else if (e.key === 'ArrowDown') {
        moveDown();
    } else if (e.key === 'ArrowUp') {
        rotatePiece();
    }
});

// Initialize the game
startGame();
