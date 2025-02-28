import { useState } from "react";
import Background from "./components/Background";
import Content from "./components/Content";
import Header from "./components/header";
import HeroImage from "./components/HeroImage";
import RightSideDiv from "./components/RightSideDiv";
export const colors = ["#001c0f", "#00b37a"];
export const images = [
  "src/assets/starbucks_strawberry.png",
  "src/assets/starbucks.png",
];
export const items = [
  "src/assets/donut-poster.png",
  "src/assets/icecoffee_starbucks.png",
  "src/assets/starbucks_coffee_2.png",
  "src/assets/Starbucks-Coffee.png",
];
export const titles = ["CHOCOLATE", "FRAPUCCINO"];
function App() {
  const [index, setIndex] = useState(true);
  return (
    <div>
      <Background index={index} />
      <div className="w-full h-full lg:h-screen relative z-1 -mt-[100vh] backdrop-blur-[10px]">
        <Header index={index} />
        <div className="flex h-screen gap-6 flex-col lg:gap-0 lg:flex-row">
          <Content index={index} />
          <HeroImage index={index}/>
          <RightSideDiv index={index} setIndex={setIndex} />
        </div>
      </div>
    </div>
  );
}


export default App;
