import React from "react"

function ServiceCard({ icon, title, description }) {
  return (
    <div className="text-skin-base bg-skin-gray p-5 rounded-lg">
      {icon}
      <p className="text-xl font-semibold my-3">{title}</p>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard
