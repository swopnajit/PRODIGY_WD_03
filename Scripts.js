let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const messageElement = document.getElementById('message');

function checkWin() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementsByClassName('cell')[a].classList.add('win');
            document.getElementsByClassName('cell')[b].classList.add('win');
            document.getElementsByClassName('cell')[c].classList.add('win');
            messageElement.innerText = `${currentPlayer} wins!`;
            gameActive = false;
        }
    }
}

function checkDraw() {
    if (!board.includes('')) {
        messageElement.innerText = `It's a draw!`;
        gameActive = false;
    }
}

function handleClick(cellIndex) {
    if (!gameActive || board[cellIndex] !== '') return;

    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;

    checkWin();
    checkDraw();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    messageElement.innerText = '';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('win');
    });
}
