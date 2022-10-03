import Image from "next/image"
import React from "react"
import { FiImage, FiLink, FiVideo } from "react-icons/fi"

function PortfolioCard({ id, imageUrl, type, title, handleClick }) {
  const IconComponent = () => {
    if (type == "Gallery") {
      return <FiImage size={24} />
    } else if (type == "Video") {
      return <FiVideo size={24} />
    } else {
      return <FiLink size={24} />
    }
  }

  return (
    <div className="bg-skin-gray text-skin-base p-5 rounded-lg">
      <div className="relative w-full h-48" onClick={() => handleClick(id)}>
        <Image
          src={imageUrl}
          layout="fill"
          alt="karna - next js personal portfolio"
          objectFit="cover"
          className="absolute rounded-md portfolio-card-image"
        />
        <div className="absolute top-0 left-0 h-full w-full cursor-pointer hover:bg-skin-gray/20 transition ease-in-out duration-300" />
        <div className="absolute bottom-0 left-0 p-2 bg-skin-gray/50 rounded-md">
          <IconComponent />
        </div>
      </div>
      <p className="mt-3 uppercase ">{type}</p>
      <p
        className="text-xl font-semibold cursor-pointer"
        onClick={() => handleClick(id)}
      >
        {title}
      </p>
    </div>
  )
}

export default PortfolioCard
