import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight, FaChevronRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const fetchPerson = async () => {
    const response = await fetch(url)
    const items = await response.json()
    setJobs(items)
    setLoading(false)
  }

  useEffect(() => {
    fetchPerson()
  }, [])
  if (loading) {
    return (
      <div className='loading'>
        <h3>Loading...</h3>
      </div>
    )
  }

  const { id, title, dates, duties, company } = jobs[value]
  return (
    <section className='section'>
      <div className='title'>
        <h2>Expierence</h2>
        <div className='underline'></div>
      </div>
      <div className='job-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className='job-btn'
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
          <article className='jobs-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className='job-desc'>
                  <FaChevronRight className='job-icon'></FaChevronRight>
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
      </div>
    </section>
  )
}

export default App
