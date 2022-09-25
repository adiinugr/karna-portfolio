import Image from "next/image"
import { useRouter } from "next/router"

function BlogCard({ id, imageUrl, title, content }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/blogs/${id}`)
  }

  return (
    <div className="bg-gradient-to-b from-shade to-primary p-5 border-4 border-primary rounded-lg">
      <div className="relative w-full h-48" onClick={handleClick}>
        <Image
          src={imageUrl}
          layout="fill"
          alt="karna - next js personal portfolio"
          objectFit="cover"
          className="absolute rounded-md cursor-pointer hover:scale-110 transition ease-in-out duration-300"
        />
      </div>
      <p
        className="mt-3 mb-1 uppercase font-semibold text-xl cursor-pointer hover:text-dark transition ease-in-out duration-300"
        onClick={handleClick}
      >
        {title}
      </p>
      <p className="line-clamp-3">{content}</p>
    </div>
  )
}

export default BlogCard
