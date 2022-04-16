const Player = (sign) => {
    const makeMove = (tile) => {
        gameBoard.board.splice(tile.dataset.tile-1, 1);
        gameBoard.board.splice(tile.dataset.tile-1, 0, sign);
    }
    return {makeMove};
};

const gameBoard = (() => {
    board = ['','','','','','','','',''];

    const renderBoard = () => {
        let i = 0;
        const tiles = document.querySelectorAll('.tile');
        tiles.forEach((tile) => {
            tile.textContent = board[i];
            i++;
        })
    }

    return {board, renderBoard};

})();


const gameFlow = (() => {
    const playerX = Player('X');
    const playerO = Player('O');
    let turn = false;
    const tiles = document.querySelectorAll('.tile');
    //let isOver = false;

    const initBoard = () => {
        tiles.forEach((tile) => {
            tile.addEventListener('click', () => {
                makeMove(tile);
            });
        });
    }

    const makeMove = (tile) => {
        if(tile.innerHTML === ''){
            if(turn ? playerX.makeMove(tile) : playerO.makeMove(tile));
            turn = !turn;
            gameBoard.renderBoard();
        }
    }
    return {initBoard};
})();

gameFlow.initBoard();

