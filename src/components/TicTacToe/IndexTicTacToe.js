import Game from "./Game"

function TicTacToe(){
    // to find the winner
    function winner(mat) {
        const winArr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (const arr of winArr) {
            let [a, b, c] = arr
            if (mat[a] && (mat[a] === mat[b] && mat[a] === mat[c])) {
                return mat[a]
            }
        }
        return null
    }
    return <>
        <Game winner={winner}/>    
    </>
}

export default TicTacToe
