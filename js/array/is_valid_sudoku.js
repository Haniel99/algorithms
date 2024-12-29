/**
 *
 */
class Solution {
    /**
     * @param {char[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Validar fila y columna
        for (let i = 0; i < board.length; i++) {
            const rowMap = new Map();
            const colMap = new Map();
            for (let j = 0; j < board.length; j++) {
                const rowElement = board[i][j];
                const colElement =  board[j][i];
                if (rowElement != ".") {
                    if (rowMap.has(rowElement)) {
                        return false;
                    } else {
                        rowMap.set(rowElement, j);
                    }
                }

                if (colElement!=".") {
                    if (colMap.has(colElement)) {
                        return false;
                    } else {
                        colMap.set(colElement, j);
                    }
                }
            }
        }
        //Complejidad n^2
        
        return true;
    }
}

const sol = new Solution();
let board =
    [["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

console.log(sol.isValidSudoku(board));

