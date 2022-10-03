import { useContext, useState } from "react"
import Modal from "react-modal"
import Image from "next/image"
import { FiArrowRight, FiCalendar, FiUser, FiX } from "react-icons/fi"
import ReactPlayer from "react-player"
import Slider from "react-slick"
import { SyncLoader } from "react-spinners"

// React Context
import { MenuContext } from "/context/MenuContext"

// Costom Component
import PortfolioCard from "/components/card/PortfolioCard"
import Title from "/components/element/Title"
import Button from "/components/button/Button"
import MenuButton from "/components/menu/MenuButton"
import MenuList from "/components/menu/MenuList"
import CustomHead from "/components/meta/CustomHead"

// Dummy Data
import portfolioData from "/data/portfolio"

// React Slick CSS
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { personalLightMenuData } from "data/menu"

Modal.setAppElement("#__next")

function Portfolio() {
  const [selectedId, setSelectdId] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  const [portfolio] = portfolioData.filter(
    (portfolio) => portfolio.id == selectedId
  )

  const handleClickPortfolio = (id) => {
    setSelectdId(id)
    setIsModalOpen(true)
  }

  const reactSlickSetting = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    lazyLoad: true
  }

  return (
    <section
      id="portfolio"
      className="theme-light bg-skin-base px-8 py-28 lg:px-32 lg:py-20 text-skin-base"
    >
      {/* Start Next.js Head -> meta information */}
      <CustomHead />
      {/* End Next.js Head */}

      {/* Start Menu Button */}
      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* End Menu Button */}

      {/* Start Menu List */}
      <MenuList isMenuOpen={isMenuOpen} menuData={personalLightMenuData} />
      {/* End Menu List */}

      {portfolioData.length === 0 ? (
        <SyncLoader color="#36d7b7" size={12} className="text-center" />
      ) : (
        <>
          <Title leftText="my" rightText="portfolio" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {portfolioData.map((portfolio) => (
              <PortfolioCard
                key={portfolio.id}
                id={portfolio.id}
                imageUrl={portfolio.thumbnailUrl}
                type={portfolio.type}
                title={portfolio.title}
                handleClick={handleClickPortfolio}
              />
            ))}
          </div>
        </>
      )}

      {/* Start React Modal */}
      <Modal
        ariaHideApp={false}
        closeTimeoutMS={300}
        className="theme-light absolute inset-8 md:inset-20 p-6 lg:p-10 bg-skin-gray outline-none rounded-md"
        overlayClassName="fixed inset-0 bg-skin-base/75 z-40"
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <FiX
          className="absolute -top-5 -right-5 lg:top-5 lg:right-5 p-2 border-2 z-40 rounded-full text-skin-base hover:scale-110 cursor-pointer transition ease-in-out duration-300"
          size={45}
          onClick={() => setIsModalOpen(false)}
        />
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 h-full w-full overflow-auto">
          <div className="relative h-full w-full md:w-1/2">
            {portfolio?.type === "Video" ? (
              <ReactPlayer
                className="react-player"
                url={portfolio?.videoUrl}
                width="100%"
                height="100%"
              />
            ) : (
              <Slider {...reactSlickSetting}>
                {portfolio?.imageData.map((image) => (
                  <div
                    key={image.id}
                    className="relative h-[200px] md:h-[310px] rounded-md overflow-hidden"
                  >
                    <Image
                      src={image.url}
                      layout="fill"
                      alt="karna - next js personal portfolio"
                      objectFit="cover"
                      className="absolute "
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
          <div className="w-full md:w-1/2 text-skin-base">
            <p className="font-bold text-xl lg:text-4xl mb-4">
              {portfolio?.title}
            </p>
            <p className="mb-4">{portfolio?.description}</p>
            <div className="flex mb-10">
              <div className="mr-8">
                <FiUser sixe={24} className="inline-block" />{" "}
                <span>Client: {portfolio?.client}</span>
              </div>
              <div className="text-left">
                <FiCalendar sixe={24} className="inline-block" /> Year:{" "}
                {portfolio?.year}
              </div>
            </div>
            <div className="text-right">
              <Button
                type="external"
                target={portfolio?.projectLink}
                text="view project"
              >
                <FiArrowRight size={24} />
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      {/* End React Modal */}
    </section>
  )
}

export default Portfolio
