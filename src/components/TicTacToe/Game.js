import { Board } from "./Board"
import { useState } from "react"

function Game(props) {
    const [matrix, setMatrix] = useState(Array(9).fill(null))
    const [XisNext, setXisNext] = useState(true)
    // const [History, setHistory] = useState([])

    // FINDING WINNER
    const winner = props.winner(matrix)

    // ON CLICK HANDLER FUNCTION
    function onClickHandler(i) {
        const current = [...matrix]
        if (winner || current[i]) return
        current[i] = XisNext ? 'X' : 'O'
        setXisNext(!XisNext)
        setMatrix(current)
        // setHistory((prev) => {
        //     return [
        //         ...prev,
        //         current
        //     ]
        // })
    }

    return <div>
        <div className="label">
            {winner ? "Winner : " + winner
                : "To move : " + (XisNext ? 'X' : 'O')}
        </div>
        {/* RENDERING BOARD COMPONENT */}
        <div className="board">
            <Board
                clickHandler={onClickHandler}
                value={matrix} />
        </div>
        <div>
            <ol>

            </ol>
        </div>
    </div>
}

export default Game
