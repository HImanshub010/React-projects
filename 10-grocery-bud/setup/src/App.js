import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getItemFromLocalStorage = () => {
  const list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(list)
  }
  return []
}

function App() {
  const [item, setItem] = useState('')
  const [listItem, setListItem] = useState(getItemFromLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState(-1)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const removeAlert = () => {
    setAlert({ show: false, msg: '', type: '' })
  }
  const removeItem = (id) => {
    const newItemList = listItem.filter((item) => item.id !== id)
    setListItem(newItemList)
    setAlert({
      show: true,
      msg: 'You have successfully deleted item',
      type: 'danger',
    })
  }

  const editItem = (id) => {
    setIsEditing(true)
    setEditingId(id)
    const itemToEdit = listItem.find((item) => item.id === id)
    setItem(itemToEdit.name)
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(listItem))
  }, [listItem])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!item) return
    if (isEditing && item) {
      setListItem(
        listItem.map((groceryItem) => {
          if (groceryItem.id === editingId) {
            return { ...groceryItem, name: item }
          }
          return groceryItem
        })
      )
      setIsEditing(false)
      setItem('')
      setEditingId(null)
      setAlert({
        show: true,
        msg: 'You have successfully edited',
        type: 'success',
      })
      return
    }
    const newItem = { name: item, id: new Date().getTime().toString() }
    // listItem.push(newItem)
    setListItem([...listItem, newItem])
    setItem('')
    setAlert({
      show: true,
      msg: 'You have successfully addded',
      type: 'success',
    })
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={removeAlert} />}
        <h3>Grocery Kart</h3>
        <div className='form-control'>
          <input
            className='grocery'
            type='text'
            name='ite'
            id=''
            value={item}
            placeholder='eg. apple'
            onChange={(e) => setItem(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {listItem.length > 0 && (
        <div className='grocery-container'>
          <List items={listItem} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={() => setListItem([])}>
            clear list
          </button>
        </div>
      )}
    </section>
  )
}

export default App
