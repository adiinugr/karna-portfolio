import { useContext, useState } from "react"
import Modal from "react-modal"
import Image from "next/image"
import { FiArrowRight, FiCalendar, FiUser, FiX } from "react-icons/fi"
import ReactPlayer from "react-player"
import Slider from "react-slick"
import { SyncLoader } from "react-spinners"

import PortfolioCard from "../components/PortfolioCard"
import Title from "../components/Title"
import Button from "../components/Button"
import MenuButton from "../components/MenuButton"
import MenuList from "../components/MenuList"
import CustomHead from "../components/CustomHead"

import portfolioData from "../data/portfolio"

import { MenuContext } from "../context/menuContext"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
      className="bg-dark px-8 py-28 lg:px-32 lg:py-20 text-white"
    >
      <CustomHead />

      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MenuList isMenuOpen={isMenuOpen} />

      {portfolioData.length === 0 ? (
        <SyncLoader color="#36d7b7" size={12} className="text-center" />
      ) : (
        <>
          <Title leftText="my" rightText="portfolio" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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

      <Modal
        ariaHideApp={false}
        closeTimeoutMS={300}
        className="Modal"
        overlayClassName="Overlay"
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <FiX
          className="absolute -top-5 -right-5 lg:top-3 lg:right-3 bg-primary lg:bg-gray/30 p-2 border-2 border-white z-40 rounded-full text-white hover:text-dark cursor-pointer transition ease-in-out duration-300"
          size={40}
          onClick={() => setIsModalOpen(false)}
        />
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 h-full w-full p-6 lg:p-10 overflow-auto">
          <div className="relative h-full w-full lg:w-1/2">
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
                    className="relative h-[200px] lg:h-[310px] rounded-md overflow-hidden"
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
          <div className="w-full lg:w-1/2 text-white">
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
    </section>
  )
}

export default Portfolio
