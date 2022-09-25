import Head from "next/head"
import React from "react"

function CustomHead() {
  return (
    <Head>
      <title>Karna - Next Js Personal Portfolio</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="title" content="Karna - Next Js Personal Portfolio" />
      <meta
        name="description"
        content="This is portfolio website made with Next Js and Tailwind CSS."
      />
    </Head>
  )
}

export default CustomHead
