import React from "react"
import { Circle } from "rc-progress"

function ProgressCircle({ percent, title, strokeColor, trailColor }) {
  return (
    <div>
      <div className="w-20 h-20 lg:w-32 lg:h-32 mx-auto relative mb-4">
        <Circle
          percent={percent}
          strokeWidth={10}
          trailWidth={10}
          trailColor={trailColor}
          strokeColor={strokeColor}
          className="absolute"
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg lg:text-2xl font-semibold">
          {`${percent}%`}
        </p>
      </div>
      <p className="uppercase text-center lg:text-xl font-semibold">{title}</p>
    </div>
  )
}

export default ProgressCircle
