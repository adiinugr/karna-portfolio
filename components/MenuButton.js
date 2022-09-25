import { Spin as Hamburger } from "hamburger-react"

function MenuButton({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="fixed top-8 right-8 z-30 bg-primary p-1 rounded-full text-white hover:bg-white hover:text-primary transition ease-in-out duration-300">
      <Hamburger size={24} toggled={isMenuOpen} toggle={setIsMenuOpen} />
    </div>
  )
}

export default MenuButton
