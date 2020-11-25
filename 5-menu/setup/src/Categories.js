import React from 'react'

const Categories = ({ categories, fetchItem }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <div className='filter-btn' onClick={() => fetchItem(category)}>
            {category}
          </div>
        )
      })}
    </div>
  )
}

export default Categories
