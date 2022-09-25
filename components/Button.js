import React from "react"
import Link from "next/link"

const ButtonComponent = React.forwardRef(
  ({ children, text, onClick, href, className }, ref) => {
    return (
      <div
        href={href}
        onClick={onClick}
        ref={ref}
        className={`relative button-primary bg-primary text-white pl-6 pt-3 pb-3 pr-[4.5rem] font-medium uppercase inline-flex cursor-pointer ${className}`}
      >
        {text}
        <div
          className={`absolute button-icon top-0 right-0 h-full w-12 bg-white text-primary flex justify-center items-center transition ease-in-out duration-300 ${className}`}
        >
          {children}
        </div>
      </div>
    )
  }
)

function Button({ type, children, text, target, className }) {
  if (type == "internal") {
    return (
      <Link href={target} passHref>
        <ButtonComponent className={className} text={text}>
          {children}
        </ButtonComponent>
      </Link>
    )
  } else if (type == "external") {
    return (
      <a href={target} target="_blank" rel="noreferrer">
        <ButtonComponent className={className} text={text}>
          {children}
        </ButtonComponent>
      </a>
    )
  } else {
    return (
      <button type="submit">
        <ButtonComponent className={className} text={text}>
          {children}
        </ButtonComponent>
      </button>
    )
  }
}

export default Button
