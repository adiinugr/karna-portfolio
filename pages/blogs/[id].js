import Image from "next/image"
import { useRouter } from "next/router"
import { FiArrowLeft, FiCalendar, FiUser } from "react-icons/fi"
import { SyncLoader } from "react-spinners"

import Title from "../../components/Title"
import CustomHead from "../../components/CustomHead"

import blogsData from "../../data/blogs"

function Blog() {
  const router = useRouter()
  const { id } = router.query

  const [blog] = blogsData.filter((blog) => blog.id == id)

  return (
    <section className="bg-dark min-h-screen px-8 py-28 lg:px-32 lg:py-20 text-white relative">
      <CustomHead />

      <div
        className="absolute left-8 top-44 lg:top-36 lg:left-28 bg-primary px-3 py-2 lg:px-8 lg:py-2 rounded-full cursor-pointer hover:text-primary hover:bg-white transition ease-in-out duration-300"
        onClick={() => router.back()}
      >
        <FiArrowLeft size={26} />
      </div>
      <Title leftText="my" rightText="blog" />
      <div className="max-w-3xl mx-auto">
        {!blog ? (
          <SyncLoader color="#36d7b7" size={12} className="text-center" />
        ) : (
          <>
            <h1 className="font-semibold text-3xl lg:text-4xl mb-8">
              {blog.title}
            </h1>
            <div className="w-full h-96 relative ">
              <Image
                src={blog.imageUrl}
                layout="fill"
                className="absolute rounded-md"
                objectFit="cover"
              />
            </div>
            <div className="flex my-6">
              <div className="flex mr-6">
                <FiUser size={24} className="mr-1 text-primary" /> {blog.author}
              </div>
              <div className="flex">
                <FiCalendar size={24} className="mr-1 text-primary" />{" "}
                {blog.date}
              </div>
            </div>
            <p>{blog.content}</p>
          </>
        )}
      </div>
    </section>
  )
}

export default Blog
