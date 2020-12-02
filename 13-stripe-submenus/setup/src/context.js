import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [page, setPage] = useState('')
  const [location, setLocation] = useState({ center: '', bottom: '' })
  const openSideBar = () => {
    setIsSidebarOpen(true)
  }
  const closeSideBar = () => {
    setIsSidebarOpen(false)
  }
  const openSubMenu = (page, location) => {
    setPage(page)
    setLocation(location)
    setIsSubMenuOpen(true)
  }
  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubMenuOpen,
        closeSideBar,
        closeSubMenu,
        openSideBar,
        openSubMenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
