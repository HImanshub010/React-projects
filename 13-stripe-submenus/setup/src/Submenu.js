import React, { useState, useRef, useEffect } from 'react'
import sublinks from './data'

import { useGlobalContext } from './context'
const Submenu = () => {
  const [subMenuLinks, setSubMenuLinks] = useState([])
  const [columns, setCloumns] = useState(2)

  const subMenuContainer = useRef(null)
  const {
    openSubMenu,
    isSubMenuOpen,
    page,
    location: { center, bottom },
  } = useGlobalContext()

  useEffect(() => {
    subMenuContainer.current.style.left = `${center}px`
    subMenuContainer.current.style.top = `${bottom}px`
    console.log(page, center, bottom)
    const result = sublinks.find((sublink) => sublink.page === page)
    // setSubMenuLinks(result.links)
    console.log('result', result)
    if (result) {
      setCloumns(result.links.length > 4 ? 4 : result.links.length)
      setSubMenuLinks(result.links)
    }
  }, [page, center, bottom])

  return (
    <div
      className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`}
      ref={subMenuContainer}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-${columns}`}>
        {subMenuLinks.map((menu, index) => {
          const { label, icon, url } = menu
          return (
            <a href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu
