import React, { useContext } from "react"

// React Context
import { MenuContext } from "/context/MenuContext"

// Costom Component
import BlogCard from "/components/card/BlogCard"
import Title from "/components/element/Title"
import MenuButton from "/components/menu/MenuButton"
import MenuList from "/components/menu/MenuList"
import CustomHead from "/components/meta/CustomHead"

// Dummy Data
import blogsData from "/data/blogs"
import { personalDarkMenuData } from "data/menu"

function Blogs() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  return (
    <section className="bg-skin-base min-h-screen px-8 py-28 lg:px-32 lg:py-20 text-skin-base">
      {/* Start Next.js Head -> meta information */}
      <CustomHead />
      {/* End Next.js Head */}

      {/* Start Menu Button */}
      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* End Menu Button */}

      {/* Start Menu List */}
      <MenuList isMenuOpen={isMenuOpen} menuData={personalDarkMenuData} />
      {/* End Menu List */}

      <Title leftText="my" rightText="blog" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogsData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  )
}

export default Blogs
