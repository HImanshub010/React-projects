import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    const allCategories = items.map((item) => {
      return item.category
    })
    setCategories(['all', ...new Set(allCategories)])
  }

  useEffect(() => {
    getCategories()
  }, [])

  const fetchItemsFromCategories = (category) => {
    if (category == 'all') {
      return setMenuItems(items)
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories
          categories={categories}
          fetchItem={fetchItemsFromCategories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
