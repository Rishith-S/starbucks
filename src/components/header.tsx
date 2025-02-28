import { motion } from "motion/react";

export default function Header({index}:{index:boolean}) {
  return (
    <motion.div
      key={index.toString()}
      initial={{ opacity: 1, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <div className="flex fixed flex-row text-white gap-8 items-center pl-8 pt-6 z-10">
        <img src="src/assets/starbucks_logo.png" className="w-12 h-12" />
        <div className="hidden lg:flex fixed flex-row text-white gap-8 items-center">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Gift Cards</p>
          <div className="flex flex-row items-center">
            <img src="src/assets/mapIcon.png" className="w-8 h-8" />
            <p>Find a Store</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
