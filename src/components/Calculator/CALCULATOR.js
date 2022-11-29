import React from 'react'
import Buttons from './Buttons'
import './calc.css'
import { useState } from 'react'

function CALCULATOR() {
    const buttonsArr = [
        'AC', '⌫', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', '='
    ]
    const [expression, setExpression] = useState('')
    console.log(expression)
    return (
        <div className='main'>
            <p className='screen'>{expression}</p>
            <div className='btn-container'>
                {buttonsArr.map((btnChar, idx) => {
                    return <Buttons
                        key={idx}
                        btnChar={btnChar}
                        setExpression={setExpression}
                    />
                })}
            </div>
        </div>
    )
}

export default CALCULATOR

