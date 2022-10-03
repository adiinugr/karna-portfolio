import { FiBriefcase, FiGlobe, FiHome, FiMail, FiUser } from "react-icons/fi"

export const personalDarkMenuData = [
  {
    id: 1,
    text: "Home",
    icon: <FiHome size={20} className="mr-2" />,
    path: "/personal-dark"
  },
  {
    id: 2,
    text: "About",
    icon: <FiUser size={20} className="mr-2" />,
    path: "/personal-dark/about"
  },
  {
    id: 3,
    text: "Portfolio",
    icon: <FiBriefcase size={20} className="mr-2" />,
    path: "/personal-dark/portfolio"
  },
  {
    id: 4,
    text: "Contact",
    icon: <FiMail size={20} className="mr-2" />,
    path: "/personal-dark/contact"
  },
  {
    id: 5,
    text: "Blog",
    icon: <FiGlobe size={20} className="mr-2" />,
    path: "/personal-dark/blogs"
  }
]

export const personalLightMenuData = [
  {
    id: 1,
    text: "Home",
    icon: <FiHome size={20} className="mr-2" />,
    path: "/personal-light"
  },
  {
    id: 2,
    text: "About",
    icon: <FiUser size={20} className="mr-2" />,
    path: "/personal-light/about"
  },
  {
    id: 3,
    text: "Portfolio",
    icon: <FiBriefcase size={20} className="mr-2" />,
    path: "/personal-light/portfolio"
  },
  {
    id: 4,
    text: "Contact",
    icon: <FiMail size={20} className="mr-2" />,
    path: "/personal-light/contact"
  },
  {
    id: 5,
    text: "Blog",
    icon: <FiGlobe size={20} className="mr-2" />,
    path: "/personal-light/blogs"
  }
]
