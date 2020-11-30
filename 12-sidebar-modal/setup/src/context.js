import React, { useState, useContext, createContext, Children } from 'react'

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const closeModel = () => {
    setIsModelOpen(false)
  }
  const openModel = () => {
    setIsModelOpen(true)
  }
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModelOpen,
        isSidebarOpen,
        closeModel,
        openModel,
        closeSidebar,
        openSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
