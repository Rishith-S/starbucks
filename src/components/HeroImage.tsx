import { motion } from "motion/react";
import { images, IndexContextProvider } from "../App";
import { useContext } from "react";

export default function HeroImage() {
  const index = useContext(IndexContextProvider);
  return (
    <motion.div
      key={`image-${index}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.1,
        ease: [0.39, 0.24, 0.3, 1],
      }}
      className="lg:absolute lg:right-[20%] lg:top-0 lg:z-10 lg:w-100 lg:h-full lg:flex lg:justify-center lg:items-center 2xl:right-100"
    >
      <img src={images[index ? 0 : 1]} className="object-contain lg:w-full" />
      <img
        className="hidden lg:flex w-35 h-25 scale-x-[-1] brightness-125 right-0 top-125 absolute"
        src="src/assets/coffee_beans.webp"
      />
    </motion.div>
  );
}
