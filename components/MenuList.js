import { useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import menuData from "../data/menu"

import { MenuContext } from "../context/MenuContext"

function MenuList({ isMenuOpen }) {
  const { setIsMenuOpen } = useContext(MenuContext)

  const router = useRouter()

  return (
    <div
      className={`fixed top-14 right-14 ${
        isMenuOpen ? "w-64 px-8 py-10 border-2" : "w-0 p-0 border-0"
      } bg-gray border-primary z-20 rounded-2xl overflow-hidden transition ease-in-out duration-300`}
    >
      {menuData.map((menu) => (
        <Link key={menu.id} href={menu.path}>
          <div
            onClick={() => setIsMenuOpen(false)}
            className={`bg-primary text-white font-medium py-2 px-6 mb-4 rounded-full flex items-center cursor-pointer overflow-hidden hover:bg-white hover:text-primary transition ease-in-out duration-300 ${
              router.pathname === menu.path ? "active-link" : ""
            }`}
          >
            {menu.icon}
            <p>{menu.text}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuList
