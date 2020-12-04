const Reducer = (state, action) => {
  if (action.type === 'GET_TOTAL') {
    const cartTotal = state.cart.reduce(
      (cartTotal, cartItem) => {
        cartTotal.amount += cartItem.amount
        cartTotal.total += cartItem.amount * cartItem.price
        // console.log(cartTotal, cartItem)
        return cartTotal
      },
      { total: 0.0, amount: 0 }
    )
    return {
      ...state,
      total: cartTotal.total.toFixed(2),
      amount: cartTotal.amount,
    }
  }
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    }
  }
  if (action.type === 'LOADING') {
    return {
      ...state,
      loading: true,
    }
  }
  if (action.type === 'DISPLAY_CART') {
    // console.log('action.payload CART', action.payload)
    return { ...state, cart: [...action.payload], loading: false }
  }

  if (action.type === 'REMOVE') {
    console.log('action.payload', action.payload)
    const newCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    )
    // console.log('New Cart', newCart)
    return {
      ...state,
      cart: newCart,
    }
  }

  if (action.type === 'INCREASE') {
    console.log('action.payload INC', action.payload)
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })
    return { ...state, cart: newCart }
  }

  if (action.type === 'DECREASE') {
    console.log('action.payload DEC', action.payload)
    const newCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount > 0)
    // console.log('NEw CART', newCart)
    return { ...state, cart: newCart }
  }
  throw new Error('no matching action type')
}
export default Reducer
