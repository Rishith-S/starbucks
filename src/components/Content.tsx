import { motion } from "motion/react";
import { colors, items } from "../App";
import SingleItem from "./SingleItem";

export default function Content({index}:{index: boolean}) {
  return (
    <div className="w-3/4 flex flex-col pl-8 mt-32 font-mulsher gap-4 2xl:gap-8">
      <motion.div
        key={index.toString()}
        initial={{ opacity: 1, x: "-50%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-4 2xl:gap-8"
      >
        <p
          className="text-xl lg:text-4xl font-extrabold tracking-wide"
          style={{ color: colors[index ? 1 : 0] }}
        >
          STARBUCKS IS...
        </p>
        <div className="flex flex-col gap-2 text-2xl lg:text-[90px] 2xl:text-8xl 2xl:gap-10">
          <div className="text-white flex flex-row gap-4 lg:gap-8">
            <p className="font-light">PURE</p>
            <p className="font-extrabold">LOVE</p>
          </div>
          <div className="text-white flex flex-row gap-4 lg:gap-8">
            <p className="font-light">OF</p>
            <p className="font-extrabold">COFFEE</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col gap-4 lg:gap-8"
        key={`index-${index}-5`}
        initial={{ opacity: 1, y: "200%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div
            className="text-white p-3 px-5 rounded-4xl tracking-wider items-center flex flex-row gap-2"
            style={{ backgroundColor: index ? colors[1] : colors[0] }}
          >
            <img src="src/assets/cartIcon.svg" className="w-6 h-6" />
            Order Now
          </div>
          <div className="bg-white font-bold p-3 px-5 rounded-4xl tracking-wider flex flex-row items-center gap-2">
            <img src="src/assets/findalocation.svg" className="w-8 h-8" />
            Free Delivery
          </div>
        </div>
        <div className="flex flex-row gap-4">
          {items.map((item, ind) => (
            <SingleItem imgSrc={item} key={ind} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
