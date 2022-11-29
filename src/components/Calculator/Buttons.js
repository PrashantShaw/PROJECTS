import React from 'react'

const Buttons = ({ btnChar, setExpression }) => {
    return (
        <button
            className={btnChar === '=' ? 'equal' : btnChar}
            onClick={() => {
                if (btnChar === 'AC') setExpression('')
                else if (btnChar === '⌫') {
                    setExpression(prev => {
                        return prev.slice(0, -1)
                    })
                }
                else if (btnChar === '=') {
                    setExpression(exp => {
                        return String(eval(exp))
                    })
                }
                else setExpression(prev => {
                    return prev + btnChar
                })
            }}
        >
            {btnChar}
        </button>
    )
}

export default Buttons