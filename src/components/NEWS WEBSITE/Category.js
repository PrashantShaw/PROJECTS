import React from 'react'

const Category = ({ setCATEGORY }) => {
    const categoryArr = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
    return (
        <div className='category-div'>
            <h1>LATEST NEWS</h1>
            <div className='btn-div'>
                {categoryArr.map((category, idx) => {
                    return <button key={idx}
                        onClick={() => {
                            setCATEGORY(category)
                        }}>{category.toUpperCase()}</button>
                })}
            </div>
        </div>
    )
}

export default Category