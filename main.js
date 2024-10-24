// Card Setup and game mode
const easyModeCards = ['😺', '😺', '😹', '😹', '😻', '😻', '🙀', '🙀'];
const hardModeCards = ['🌮', '🌮', '🍕', '🍕', '🍣', '🍣', '🍧', '🍧', '🍿', '🍿', '🍦', '🍦'];
// game varitabes 
let gameMode = [];
let board = document.getElementById('game-board');
let firstCard = null;
let secondCard = null;
let lockBoard = false;

//Event Listener
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
        cardElement.dataset.cardValue = card; // Store the card value in a data attribute
        cardElement.addEventListener('click', flipCard); // Add click event listener
        board.appendChild(cardElement); // Add card to the board
    });
}

function flipCard() {
    if (lockBoard || this === firstCard) return; // Prevent clicking the same card
    this.textContent = this.dataset.cardValue; // Show the card value
    this.classList.add('flipped'); // Add flipped class for styling

    if (!firstCard) {
        firstCard = this; // Store the first card
        return;
    }

    secondCard = this; // Store the second card
    lockBoard = true; // Lock the board to prevent further clicks

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.cardValue === secondCard.dataset.cardValue;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}
