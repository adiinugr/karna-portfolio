import Image from "next/image"
import { useRouter } from "next/router"

function BlogCard({ blog }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`${router.pathname}/${blog.id}`)
  }

  return (
    <div className="bg-skin-gray p-5 rounded-lg">
      <div className="relative w-full h-48" onClick={handleClick}>
        <Image
          src={blog.imageUrl}
          layout="fill"
          alt="karna - next js personal portfolio"
          objectFit="cover"
          className="absolute rounded-md cursor-pointer hover:scale-110 transition ease-in-out duration-300"
        />
      </div>
      <p
        className="mt-3 mb-1 uppercase font-semibold text-xl cursor-pointer hover:text-skin-dark transition ease-in-out duration-300"
        onClick={handleClick}
      >
        {blog.title}
      </p>
      <p className="line-clamp-3">{blog.content}</p>
    </div>
  )
}

export default BlogCard
