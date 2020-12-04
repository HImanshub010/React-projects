import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  cart: cartItems,
  amount: 0,
  total: 0.0,
  loading: false,
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'LOADING' })
      const response = await fetch(url)
      const data = await response.json()
      dispatch({ type: 'DISPLAY_CART', payload: data })
    }
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' })
  })

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
