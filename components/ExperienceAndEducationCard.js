import React from "react"

function ExperienceAndEducationCard({ icon, year, title, description }) {
  return (
    <div className="flex">
      <div className="mr-4 relative w-28">
        <div className="absolute top-0 left-1/2 tranform -translate-x-1/2 bg-primary p-3 rounded-full z-10">
          {icon}
        </div>
        <div className="absolute top-0 left-1/2 h-full border-l-2 border-l-gray"></div>
      </div>
      <div>
        <p>{year}</p>
        <p className="text-xl my-2 font-semibold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ExperienceAndEducationCard
