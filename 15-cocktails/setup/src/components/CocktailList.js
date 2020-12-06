import React from 'react'
import { Link } from 'react-router-dom'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, cocktailsList, searchText } = useGlobalContext()
  if (loading) {
    return <Loading />
  }

  if (!cocktailsList.length) {
    return <h2 className='section-title'>No search found for {searchText} </h2>
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {cocktailsList.map((cocktails) => {
          return <Cocktail key={cocktails.id} {...cocktails} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
