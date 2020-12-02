import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const { isSidebarOpen, closeSideBar } = useGlobalContext()
  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article className='sidebar-sublinks' key={index}>
                <h4>{page}</h4>
                {links.map((links, innerIndex) => {
                  const { label, icon, url } = links
                  return (
                    <a href={url} key={innerIndex}>
                      {icon}
                      {label}
                    </a>
                  )
                })}
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
