import { motion } from "motion/react";
import React, { SetStateAction, useContext } from "react";
import LeftArrow from "../assets/leftArrow";
import { colors, IndexContextProvider, titles } from "../App";

export default function RightSideDiv({
  setIndex,
}: {
  setIndex: React.Dispatch<SetStateAction<boolean>>;
}) {
  const index = useContext(IndexContextProvider)
  return (
    <motion.div
      key={index.toString()}
      initial={{ opacity: 0, x: 350 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="lg:h-screen lg:absolute lg:w-[25%] lg:right-0 lg:top-0 z-0 rounded-tl-[4vw] rounded-bl-[4vw] flex items-center justify-center backdrop-blur-3xl overflow-hidden"
      style={{
        backgroundColor: index ? colors[1] : colors[0],
        transition: "background-color 1s ease-in-out",
      }}
    >
      <motion.div
        key={index.toString()}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-screen absolute right-0 top-0"
      >
        <img
          className="w-50 h-50 scale-x-[-1] brightness-100 -right-10 absolute blur-sm"
          src="src/assets/starbucks_logo.png"
        />
      </motion.div>
      <div className="h-screen flex flex-col justify-end">
        <div className="grid grid-cols-2 items-center">
          <motion.div
            key={index.toString()}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "-2%" }}
            transition={{
              duration: 1.5,
            }}
          >
            <p className="texto rotate-180 col-span-1 text-8xl items-center text-white font-bold justify-center">
              {titles[index ? 0 : 1]}
            </p>
          </motion.div>
          <motion.div
            key={index.toString()}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              duration: 1.5,
            }}
          >
            <p className="texto textoutline rotate-180 col-span-1 font-bold outline-white text-8xl">
              {titles[index ? 0 : 1]}
            </p>
          </motion.div>
        </div>
        <div className="h-[15%] gap-8 flex items-center justify-center">
          <div
            onClick={() => setIndex((prev) => !prev)}
            className="cursor-pointer w-10 h-10 rounded-lg rotate-0 flex items-center justify-center"
            style={{
              backgroundColor: index ? colors[1] : colors[0],
              transition: "background-color 1s ease-in-out",
            }}
          >
            <div className="w-6 h-6">
              <LeftArrow />
            </div>
          </div>
          <div
            onClick={() => setIndex((prev) => !prev)}
            className="cursor-pointer w-10 h-10 rounded-lg flex items-center justify-center rotate-180"
            style={{ backgroundColor: colors[0] }}
          >
            <div className="w-6 h-6">
              <LeftArrow />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
