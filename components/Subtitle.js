import React from "react"

function Subtitle({ children, className }) {
  return (
    <h2 className={`uppercase font-semibold text-3xl mb-10 ${className}`}>
      {children}
    </h2>
  )
}

export default Subtitle
