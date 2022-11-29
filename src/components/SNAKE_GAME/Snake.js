import React, { memo } from 'react'

const Snake = ({snakeDot}) => {
    console.log('Snake.js', snakeDot)
    return (
        <>
            {snakeDot.map((dot, idx)=>{
                const style = {
                    top: `${dot[0]}%`,
                    left: `${dot[1]}%`
                }
                return (
                    <div className='snake-dot'
                    style={style} key={idx}></div>
                )
            })}
        </>
    )
}

export default Snake