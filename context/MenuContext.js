import { createContext, useState } from "react"

export const MenuContext = createContext()

export const Provider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const value = {
    isMenuOpen,
    setIsMenuOpen
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
