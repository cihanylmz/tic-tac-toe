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
            checkGame(gameBoard.board);
        }
    }

    const checkGame = (board) => {
        let isOver = false;
        if (board[0] != '' && board[0] == board[1] && board[1] == board[2])
            isOver = true;
        else if (board[3] != '' && board[3] == board[4] && board[4] == board[5])
            isOver = true;
        else if (board[6] != '' && board[6] == board[7] && board[7] == board[8])
            isOver = true;
        else if (board[0] != '' && board[0] == board[4] && board[4] == board[8])
            isOver = true;
        else if (board[2] != '' && board[2] == board[4] && board[4] == board[6])
            isOver = true;
        else {
            let tie = true;
            board.forEach((tile) => {
                if(tile === '')
                    tie = false;
            if (tie === true)
                isOver = true;
            })
        }
        console.log(isOver);
    }
    return {initBoard};
})();

gameFlow.initBoard();

