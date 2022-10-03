import Image from "next/image"
import { useContext } from "react"
import { FiArrowRight } from "react-icons/fi"
import Typed from "react-typed"

// React Context
import { MenuContext } from "/context/MenuContext"

// Costom Component
import Button from "/components/button/Button"
import MenuButton from "/components/menu/MenuButton"
import MenuList from "/components/menu/MenuList"
import CustomHead from "/components/meta/CustomHead"

// Dummy Data
import socialMediaData from "data/socialMedia"
import { personalLightMenuData } from "data/menu"

export default function Home() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  return (
    <section className="theme-light bg-skin-base h-screen">
      {/* Start Next.js Head -> meta information */}
      <CustomHead className="theme-light" />
      {/* End Next.js Head */}

      {/* Start Menu Button */}
      <MenuButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        className="theme-light"
      />
      {/* End Menu Button */}

      {/* Start Menu List */}
      <MenuList
        isMenuOpen={isMenuOpen}
        className="theme-light"
        menuData={personalLightMenuData}
      />
      {/* End Menu List */}

      {/* Start Layer Element */}
      <div className="hidden lg:block bg-skin-accent w-72 h-full shape absolute " />
      {/* End Layer Element */}

      {/* Start Home Section */}
      <div className="absolute px-8 lg:px-32 lg:py-32 flex justify-center items-center w-full h-full">
        <div className="hidden md:block w-1/3 relative h-full mr-12">
          <div className="absolute top-1/2 -left-4 transform -translate-y-44 w-64 h-80 bg-skin-base" />
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
        <div className="w-full md:w-1/2 lg:w-2/3">
          <div className="text-skin-base">
            <Typed
              showCursor={false}
              className="font-semibold text-[34px] lg:text-[38px]"
              strings={["HI, I'M "]}
              typeSpeed={50}
            />{" "}
            <Typed
              className="font-semibold text-[34px] lg:text-[38px] text-skin-accent"
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
              target="/personal-dark/about"
              text="about me"
              className="self-start lg:self-auto"
            >
              <FiArrowRight size={24} />
            </Button>
            <div className="bg-skin-gray bg-opacity-20 p-2 rounded-md text-skin-base flex self-start lg:self-auto mb-8 lg:mb-0">
              {socialMediaData.map((socialMedia) => (
                <a
                  key={socialMedia.id}
                  href={socialMedia.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-skin-button-bg-base text-skin-button-base p-2 m-1 rounded-md cursor-pointer hover:bg-skin-button-bg-inverted hover:text-skin-button-inverted transition ease-in-out duration-300"
                >
                  {socialMedia.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End Home Section */}
    </section>
  )
}
