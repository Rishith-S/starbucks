import { motion } from 'motion/react'
import { colors, images, IndexContextProvider } from '../App'
import { useContext } from 'react'

export default function Background() {
  const index = useContext(IndexContextProvider)
  return (
    <div
        className="w-full h-screen relative z-0"
        style={{
          backgroundColor: colors[index ? 0 : 1],
          transition: "background-color 1s ease-in-out",
        }}
      >
        <motion.div
          key={`image-${!index}`}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.1,
            ease: [0.39, 0.24, 0.3, 1],
          }}
        >
          <img
            className={`w-20 h-20 lg:w-75 lg:h-100 ${
              index ? "brightness-20" : "brightness-80"
            } scale-x-[-1] ${
              index ? "right-1/2" : "right-[45%]"
            } top-1/4 absolute`}
            src={index ? images[0] : images[1]}
          />
        </motion.div>
        <motion.div
          key={`image-${index}-1}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-0 -left-20"
        >
          <img
            className={`w-20 h-20 lg:w-100 lg:h-100 ${
              index ? "brightness-20" : "brightness-100"
            }`}
            src="src/assets/donut.png"
          />
        </motion.div>
        <motion.div
          key={index.toString()}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 -left-10 blur-sm"
        >
          <img
            className={`w-20 h-20 lg:w-50 lg:h-50 ${
              index ? "brightness-20" : "brightness-100"
            } rotate-90`}
            src="src/assets/coffee_beans.webp"
          />
        </motion.div>
      </div>
  )
}
