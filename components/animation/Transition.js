import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"

function Transition({ children }) {
  const { asPath } = useRouter()

  const variants = {
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    },
    out: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    },
    in: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="overflow-hidden bg-skin-gray">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          initial="in"
          animate="inactive"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Transition
