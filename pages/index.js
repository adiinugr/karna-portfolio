import Image from "next/image"
import { useContext } from "react"
import { FiArrowRight, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi"
import Typed from "react-typed"

import { MenuContext } from "../context/menuContext"

import Button from "../components/Button"
import MenuButton from "../components/MenuButton"
import MenuList from "../components/MenuList"
import CustomHead from "../components/CustomHead"

export default function Home() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  return (
    <section className="bg-dark h-screen">
      <CustomHead />

      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MenuList isMenuOpen={isMenuOpen} />

      <div className="hidden lg:block bg-primary w-72 h-full shape absolute"></div>
      <div className="absolute px-8 lg:px-32 lg:py-32 flex justify-center items-center w-full h-full">
        <div className="hidden lg:block w-1/3 relative h-full mr-12">
          <div className="absolute top-1/2 -left-4 transform -translate-y-44 w-64 h-80 bg-dark"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 tra w-64 h-80">
            <Image
              src="/images/men-1.png"
              layout="fill"
              objectFit="cover"
              alt="karna - next js personal portfolio"
              className="hover:scale-110 transition ease-in-out duration-300"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="text-white">
            <Typed
              showCursor={false}
              className="font-semibold text-[34px] lg:text-[38px]"
              strings={["HI, I'M "]}
              typeSpeed={50}
            />{" "}
            <Typed
              className="font-semibold text-[34px] lg:text-[38px] text-primary"
              strings={["NEHAN"]}
              typeSpeed={50}
              startDelay={500}
            />
            <p className="font-semibold text-[34px] lg:text-[38px] mb-6">
              WEB DEVELOPER
            </p>
            <p>
              Experienced web developer with a strong background in developing
              award-winning applications for a diverse clientele. 5+ years of
              industry experience includes programming, debugging, and
              wireframes.
            </p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between lg:items-center mt-8">
            <Button
              type="internal"
              target="/about"
              text="about me"
              className="self-start lg:self-auto"
            >
              <FiArrowRight size={24} />
            </Button>
            <div className="bg-gray bg-opacity-20 p-2 rounded-md text-white flex self-start lg:self-auto mb-8 lg:mb-0">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="bg-primary p-2 m-1 rounded-md cursor-pointer hover:bg-white hover:text-primary transition ease-in-out duration-300"
              >
                <FiTwitter size={16} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-primary p-2 m-1 rounded-md cursor-pointer hover:bg-white hover:text-primary transition ease-in-out duration-300"
              >
                <FiFacebook size={16} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="bg-primary p-2 m-1 rounded-md cursor-pointer hover:bg-white hover:text-primary transition ease-in-out duration-300"
              >
                <FiLinkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
