import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people[index]

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <FaChevronLeft
          className='next-btn'
          onClick={() => setIndex((index + 1) % people.length)}
        />
        <FaChevronRight
          className='prev-btn'
          onClick={() =>
            setIndex(
              (index - 1 >= 0 ? index - 1 : people.length - 1) % people.length
            )
          }
        />
      </div>
      <button
        className='random-btn'
        onClick={() => setIndex(Math.floor(Math.random() * people.length))}
      >
        Suprise Me
      </button>
    </article>
  )
}

export default Review
