import React, { memo } from 'react'

const Food = ({food}) => {
  console.log('Food.js', food)
  return (
    <div className='snake-food' style={{
        top: `${food[0]}%`,
        left: `${food[1]}%`
    }}></div>
  )
}

export default Food