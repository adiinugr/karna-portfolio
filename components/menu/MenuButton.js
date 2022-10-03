import { Spin as Hamburger } from "hamburger-react"

function MenuButton({ isMenuOpen, setIsMenuOpen, className }) {
  return (
    <button
      className={`fixed top-8 right-8 z-30 bg-skin-button-bg-base p-1 rounded-full text-skin-button-base hover:bg-skin-button-bg-inverted hover:text-skin-button-inverted transition ease-in-out duration-300" ${className}`}
    >
      <Hamburger size={24} toggled={isMenuOpen} toggle={setIsMenuOpen} />
    </button>
  )
}

export default MenuButton
