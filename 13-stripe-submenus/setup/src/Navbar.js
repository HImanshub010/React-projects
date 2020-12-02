import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Navbar = () => {
  const { openSideBar, openSubMenu } = useGlobalContext()
  const handleMouseOver = (e) => {
    console.log(e.target)
    const page = e.target.textContent
    const pageLocation = e.target.getBoundingClientRect()
    const center = (pageLocation.left + pageLocation.right) / 2
    const bottom = pageLocation.bottom - 3

    openSubMenu(page, { center, bottom })
  }

  return (
    <nav>
      <div className='nav'>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} alt='stripe' />
            <button className='btn toggle-btn' onClick={openSideBar}>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <button className='link-btn' onMouseOver={handleMouseOver}>
                products
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={handleMouseOver}>
                developers
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={handleMouseOver}>
                company
              </button>
            </li>
          </ul>
          <button className='btn'>sign in</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
