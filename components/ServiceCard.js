import React from "react"

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gradient-to-b from-shade to-primary p-5 border-4 border-primary rounded-lg">
      {icon}
      <p className="text-xl font-semibold my-3">{title}</p>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard
