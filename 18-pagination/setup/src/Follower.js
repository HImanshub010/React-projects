import React, { useState, useEffect } from 'react'

const Follower = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(0)
  const [subset, setSubset] = useState([])
  const changePageNumber = (e) => {
    e.preventDefault()
    setPageNumber(e.target.textContent - 1)
  }

  const increPageNumber = () => {
    setPageNumber(pageNumber < 9 ? pageNumber + 1 : pageNumber)
  }

  const decreasePageNumber = () => {
    setPageNumber(pageNumber < 1 ? pageNumber : pageNumber - 1)
  }
  useEffect(() => {
    console.log('pageNumber', pageNumber)
    setSubset(data.slice(pageNumber * 10, pageNumber * 10 + 10))
  }, [pageNumber])
  console.log(pageNumber)
  return (
    <section className='followers'>
      <div className='container'>
        {subset.map((person) => {
          const {
            id,
            avatar_url: profilePic,
            login: name,
            html_url: profileUrl,
          } = person
          return (
            <article key={id} className='card'>
              <img src={profilePic} alt={name} />
              <h4>{name}</h4>
              <a href={profileUrl} className='btn'>
                view profile
              </a>
            </article>
          )
        })}
      </div>
      <div className='btn-container'>
        <button className='prev-btn' onClick={decreasePageNumber}>
          prev
        </button>
        {[...Array(10).keys()].map((page, index) => {
          return (
            <button
              className={`page-btn ${
                index === pageNumber ? 'active-btn' : null
              }`}
              onClick={changePageNumber}
            >
              {page + 1}
            </button>
          )
        })}
        <button className='next-btn' onClick={increPageNumber}>
          Next
        </button>
      </div>
    </section>
  )
}
export default Follower
