import { useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"

import { MenuContext } from "/context/MenuContext"

function MenuList({ isMenuOpen, className, menuData }) {
  const { setIsMenuOpen } = useContext(MenuContext)

  const router = useRouter(null)

  return (
    <AnimatePresence initial={false} mode="wait">
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-20%", transition: { duration: "0.35" } }}
          transition={{ type: "spring", stiffness: "100", duration: "0.76" }}
          className={`fixed top-14 right-14 w-64 px-8 py-6 bg-skin-gray z-10 rounded-2xl overflow-hidden ${className}`}
        >
          {menuData.map((menu) => (
            <Link key={menu.id} href={menu.path}>
              <div
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium py-2 px-6 my-4 rounded-xl flex items-center cursor-pointer overflow-hidden hover:bg-skin-button-bg-base hover:text-skin-button-base transition ease-in-out duration-300 ${
                  router.pathname === menu.path
                    ? "bg-skin-button-bg-base text-skin-button-base"
                    : "text-skin-base"
                }`}
              >
                {menu.icon}
                <p>{menu.text}</p>
              </div>
            </Link>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default MenuList
