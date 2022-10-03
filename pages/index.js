import Link from "next/link"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"
import { AnimatePresence, motion } from "framer-motion"

// Custom Component
import CustomHead from "components/meta/CustomHead"

// Dummy Data
import demosData from "data/demos"

function Home() {
  return (
    <div className="bg-teal-50">
      {/* Start Next.js Head -> meta information */}
      <CustomHead />
      {/* End Next.js Head */}

      {/* START HERO */}
      <section className="md:h-screen px-8 py-16 sm:px-16 lg:px-32 lg:py-20 flex flex-row sm:flex-col-reverse md:flex-row items-center overflow-hidden">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ type: "spring", stiffness: "100", duration: "0.76" }}
            className="w-full md:w-1/2"
          >
            <div className="flex items-center mb-6">
              <Image
                src="/logo.png"
                height={70}
                width={70}
                className="rounded-full"
              />
              <h1 className="font-medium text-4xl ml-4">Karna</h1>
            </div>
            <h2 className="text-xl mb-6">
              Next.js portfolio with Tailwind CSS. Clean code and Responsive for
              every device.
            </h2>

            <ScrollLink to="demos" smooth={true} duration={500}>
              <button className="bg-teal-600 text-white px-5 py-3 rounded-md uppercase text-lg hover:bg-teal-500 transition ease-in-out duration-200">
                View Demos
              </button>
            </ScrollLink>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ type: "spring", stiffness: "100", duration: "0.76" }}
            className="hidden sm:block"
          >
            <Image
              src="/template/personal-dark.png"
              width={500}
              height={350}
              objectFit="contain"
              className="hover:scale-95 transition ease-in-out duration-200"
            />
          </motion.div>
        </AnimatePresence>
      </section>
      {/* END HERO */}

      {/* START DEMOS */}
      <section id="demos" className="px-8 pb-16 lg:px-32 lg:py-20">
        <h1 className="font-semibold text-4xl text-center text-teal-900 mb-2">
          DEMOS
        </h1>
        <h2 className="text-center text-lg text-teal-800">
          Choose one of styles and cutomize easily to fit your idea.
        </h2>
        <div className="mt-8 grid grid-cols-1 h-[600px] sm:h-[800px] md:h-[400px] md:grid-cols-2 gap-8 md:gap-10 ">
          {demosData.map((demo) => (
            <div
              key={demo.id}
              className="flex h-full w-full justify-center items-center flex-col"
            >
              <Link href={demo.link}>
                <div className="h-full w-full relative rounded-lg overflow-hidden">
                  <Image
                    src={demo.imageUrl}
                    layout="fill"
                    objectFit="contain"
                    className="absolute cursor-pointer hover:scale-95 transition ease-in-out duration-200"
                  />
                </div>
              </Link>
              <h2 className="text-center font-medium text-2xl my-3">
                {demo.title}
              </h2>
              <Link href={demo.link}>
                <button className="bg-teal-600 m-auto text-white px-5 py-3 rounded-md uppercase hover:bg-teal-500 transition ease-in-out duration-200">
                  View Demo
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* END DEMOS */}
    </div>
  )
}

export default Home
