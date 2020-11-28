import React, { useEffect } from 'react'

const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [list])
  return <article className={`alert alert-${type}`}>{msg}</article>
}

export default Alert
