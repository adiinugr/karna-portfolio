import React, { useContext } from "react"
import BlogCard from "../../components/BlogCard"
import Title from "../../components/Title"
import MenuButton from "../../components/MenuButton"
import MenuList from "../../components/MenuList"
import CustomHead from "../../components/CustomHead"

import blogsData from "../../data/blogs"

import { MenuContext } from "../../context/menuContext"

function Blogs() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  return (
    <section className="bg-dark min-h-screen px-8 py-28 lg:px-32 lg:py-20 text-white">
      <CustomHead />

      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MenuList isMenuOpen={isMenuOpen} />

      <Title leftText="my" rightText="blog" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {blogsData.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            imageUrl={blog.imageUrl}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </div>
    </section>
  )
}

export default Blogs
