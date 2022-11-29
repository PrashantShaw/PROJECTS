import './TicTacToe.css'

function Square(props) {
    return <button className="XO-btn"
        onClick={props.onClickHandler}>
        {props.value}
    </button>
}

function Board(props) {

    // RENDERING SQUARE BUTTONS
    function renderSquare(i) {
        return (
            < Square
                onClickHandler={() => props.clickHandler(i)}
                value={props.value[i]} />
        )
    }

    // RENDERING 3X3 SQUARES
    return <div className='board'>
        <div className='row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>

    </div>
}

export { Board }