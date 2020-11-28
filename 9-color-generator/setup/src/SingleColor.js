import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  // console.log('bdcg>>>>>>', bcg)
  const hexValue = `#${hexColor}`
  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => {
      clearTimeout(alertTimeout)
    }
  }, [alert])
  return (
    <article
      className={`color`}
      className={index >= 10 ? 'color-light' : null}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
      style={{ background: `rgb(${bcg})` }}
    >
      <p className='percent-value'>Weight: {weight}%</p>
      <p className='color-value'>{hexValue}</p>
      <p className='alert'>{alert && 'Copied to clipboard'}</p>
    </article>
  )
}

export default SingleColor
