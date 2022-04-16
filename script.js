const gameBoard = (() => {
    board = ['X','O','O','X','O','X','O','X','X'];

    const renderBoard = () => {
        let i = 0;
        const tiles = document.querySelectorAll('.tile');
        console.log(tiles);
        tiles.forEach((tile) => {
            tile.textContent = board[i];
            i++;
        })
    }

    return {board, renderBoard};

})();

gameBoard.renderBoard();
const gameFlow = (() => {
    const playerX = Player('X');
    const playerO = Player('Y');

})

const Player = (sign) => {
    return {sign};
};