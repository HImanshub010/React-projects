import React from 'react'
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
          const { id, image, name, glass, info } = cocktails
          return (
            <article key={id} className='cocktail'>
              <div className='img-container'>
                <img src={image} alt={name} />
              </div>
              <div className='cocktail-footer'>
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                {/* <Link
                  to='/cocktail'
                  className='btn btn-primary btn-details'
                ></Link> */}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default CocktailList
