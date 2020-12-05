import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { searchText, setSearchText } = useGlobalContext()
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favourite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
