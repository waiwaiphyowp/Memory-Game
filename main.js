const easyModeCards = ['😺', '😺', '😹', '😹','😻', '😻', '🙀', '🙀'];
const hardModeCards = ['🌮', '🌮', '🍕', '🍕', '🍣', '🍣', '🍧', '🍧', '🍿', '🍿', '🍦', '🍦'];
let gameMode = [];
let board = document.getElementById('game-board');

document.getElementById('easy').addEventListener('click', () => startGame(easyModeCards));
document.getElementById('hard').addEventListener('click', () => startGame(hardModeCards));

function startGame(cards) {
    board.innerHTML = ''; // Clear previous cards
    gameMode = cards; // Set the current game mode
    createBoard(cards); // Create the board with cards
}

function createBoard(cards) {
    cards.sort(() => 0.5 - Math.random()); // Shuffle cards
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = card; // Display card value
        board.appendChild(cardElement); // Add card to the board
    });
}