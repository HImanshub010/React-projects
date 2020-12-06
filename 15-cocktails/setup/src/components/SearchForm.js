import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { searchText, setSearchText } = useGlobalContext()
  const inputRef = useRef()
  const handleChange = (e) => {
    setSearchText(inputRef.current.value)
  }
  useEffect(() => {
    inputRef.current.focus()
  }, [])
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
            ref={inputRef}
            onChange={handleChange}
            // onInput={(e) => setSearchText(e.target.value)}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
