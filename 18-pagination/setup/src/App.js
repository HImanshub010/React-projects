import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch()

  if (loading) {
    return (
      <main>
        <div className='section-title'>
          <h1>loading ...</h1>
        </div>
      </main>
    )
  } else {
    return (
      <main>
        <div className='section-title'>
          <h1>pagination</h1>
          <div className='underline'></div>
        </div>
        <Follower data={data} />
      </main>
    )
  }
}

export default App
