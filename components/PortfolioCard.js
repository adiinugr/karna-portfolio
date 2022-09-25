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
    <div className="bg-gradient-to-b from-shade to-primary p-5 border-4 border-primary rounded-lg">
      <div className="relative w-full h-48" onClick={() => handleClick(id)}>
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          className="absolute rounded-md portfolio-card-image"
        />
        <div className="absolute top-0 left-0 h-full w-full portfolio-card-overlay cursor-pointer transition ease-in-out duration-300" />
        <div className="absolute bottom-0 left-0 p-2 bg-gray/50 rounded-md">
          <IconComponent />
        </div>
      </div>
      <p className="mt-3 uppercase ">{type}</p>
      <p
        className="text-xl font-semibold cursor-pointer hover:text-dark transition ease-in-out duration-300"
        onClick={() => handleClick(id)}
      >
        {title}
      </p>
    </div>
  )
}

export default PortfolioCard
