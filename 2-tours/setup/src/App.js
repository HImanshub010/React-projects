import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const newTours = await response.json()

      setTours(newTours)
    } catch (error) {
      setLoading(false)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    )
  }

  if (!tours.length) {
    return (
      <article>
        <div className='title'>
          <h2>No tours</h2>
          <button onClick={fetchData}>Refersh</button>
        </div>
      </article>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
