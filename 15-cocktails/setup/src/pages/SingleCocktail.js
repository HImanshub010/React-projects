import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = ({}) => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState({})
  useEffect(() => {
    setLoading(true)
    async function getCocktails() {
      try {
        const response = await fetch(`${url}${id}`)

        const data = await response.json()
        if (data.drinks && data.drinks[0]) {
          const ingredieantsKeys = Object.keys(data.drinks[0]).filter((key) =>
            key.includes('strIngredient')
          )
          const ingredieants = ingredieantsKeys.map(
            (key) => data.drinks[0][key]
          )
          console.log('ingred', ingredieants)
          const {
            strDrink: name,
            strCategory: category,
            strAlcoholic: info,
            strInstructions: instruction,
            strGlass: glass,
            strDrinkThumb: image,
          } = data.drinks[0]
          const newCocktail = {
            name,
            category,
            info,
            instruction,
            glass,
            ingredieants,
            image,
          }
          console.log('newCocktail', newCocktail)
          if (newCocktail) setCocktail(newCocktail)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getCocktails()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!Object.keys(cocktail).length) {
    return <h2 className='section-title'>No Such cocktail found</h2>
  }

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{cocktail.name}</h2>
      <div className='drink'>
        <img src={cocktail.image} alt={cocktail.name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name: </span>
            {cocktail.name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {cocktail.category}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {cocktail.info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {cocktail.glass}
          </p>
          <p>
            <span className='drink-data'>instruction:</span>
            {cocktail.instruction}
          </p>
          <p>
            <span className='drink-data'>ingredieants:</span>
            {cocktail.ingredieants.map((ingre) => {
              if (ingre) {
                return <span>{ingre}</span>
              }
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
