import React from "react"

function Title({ leftText, rightText }) {
  return (
    <h1 className="text-4xl lg:text-5xl font-semibold uppercase mb-20 text-center">
      {leftText}{" "}
      <span className="bg-skin-accent text-skin-inverted px-2">
        {rightText}
      </span>
    </h1>
  )
}

export default Title
