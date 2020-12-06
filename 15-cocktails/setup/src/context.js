import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [cocktailsList, setCocktailsList] = useState([])

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchText}`)
      const data = await response.json()
      if (data.drinks) {
        const drinks = data.drinks.map((drink) => {
          const {
            idDrink: id,
            strDrink: name,
            strAlcoholic: info,
            strGlass: glass,
            strDrinkThumb: image,
          } = drink
          return {
            id,
            name,
            info,
            glass,
            image,
          }
        })
        console.log(`drinks for text ${searchText} are ${drinks}`)
        setCocktailsList(drinks)
        setLoading(false)
      } else {
        console.log(
          `drinks for else text ${searchText} are ${JSON.stringify(data)}`
        )
        setCocktailsList([])
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [searchText])

  return (
    <AppContext.Provider
      value={{ loading, searchText, cocktailsList, setSearchText }}
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
