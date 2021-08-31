class TicTacToe {

    constructor() {
        this.currentPlayer = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] === null && this.currentPlayer === 'x') {
            this.field[rowIndex][columnIndex] = 'x';
            this.currentPlayer = 'o';
        } else if(this.field[rowIndex][columnIndex] === null && this.currentPlayer === 'o') {
            this.field[rowIndex][columnIndex] = 'o';
            this.currentPlayer = 'x';
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.noMoreTurns();
    }

    getWinner() {
        if(this.field[0].every(e => e === this.field[0][0] && e !== null)) {
            return this.field[0][0];
        } else if(this.field[1].every(e => e === this.field[1][0] && e !== null)) {
            return this.field[1][1];
        } else if(this.field[2].every(e => e === this.field[2][0] && e !== null)) {
            return this.field[2][2];
        } else if(this.field.every(e => e[0] === this.field[0][0] && e[0] !== null)) {
            return this.field[0][0];
        } else if(this.field.every(e => e[1] === this.field[0][1] && e[1] !== null)) {
            return this.field[0][1];
        } else if(this.field.every(e => e[2] === this.field[0][2] && e[2] !== null)) {
            return this.field[0][2];
        } else if((this.field[0][0] === this.field[1][1]) && 
                  (this.field[1][1] === this.field[2][2]) &&
                  (this.field[2][2] !== null)) {
            return this.field[0][0];
        } else if((this.field[0][2] === this.field[1][1]) && 
                  (this.field[1][1] === this.field[2][0]) &&
                  (this.field[2][0] !== null)) {
            return this.field[0][2];
        } else {
            return null;
        }
    }

    noMoreTurns() {
        return !this.field.some(e => e.some(e => e === null));
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
