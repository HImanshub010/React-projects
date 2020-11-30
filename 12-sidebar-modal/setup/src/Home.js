import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  // const { openModel, openSidebar } = useContext(AppContext) both are correct way of using context api in react
  console.log(useGlobalContext())
  const { openModel, openSidebar } = useGlobalContext()
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModel}>
        show-Modal
      </button>
    </main>
  )
}

export default Home
