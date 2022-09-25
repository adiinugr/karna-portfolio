import { FiBriefcase, FiGlobe, FiHome, FiMail, FiUser } from "react-icons/fi"

const menuData = [
  {
    id: 1,
    text: "Home",
    icon: <FiHome size={20} className="mr-2" />,
    path: "/"
  },
  {
    id: 2,
    text: "About",
    icon: <FiUser size={20} className="mr-2" />,
    path: "/about"
  },
  {
    id: 3,
    text: "Portfolio",
    icon: <FiBriefcase size={20} className="mr-2" />,
    path: "/portfolio"
  },
  {
    id: 4,
    text: "Contact",
    icon: <FiMail size={20} className="mr-2" />,
    path: "/contact"
  },
  {
    id: 5,
    text: "Blog",
    icon: <FiGlobe size={20} className="mr-2" />,
    path: "/blogs"
  }
]

export default menuData
