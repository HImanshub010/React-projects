import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#f15025')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const colorList = new Values(color).all(10)
      console.log(colorList)
      setList(colorList)
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return (
    <>
      <section className='container'>
        <h2>RGB color Generater</h2>
        <p>Click on the color to copy Hex code</p>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name=''
            id=''
            placeholder={color}
            value={color}
            className={error ? 'error' : null}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((colors, index) => {
          return (
            <SingleColor
              key={index}
              {...colors}
              index={index}
              hexColor={colors.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
