import React from "react";
import img from "../images/1.png";
import Parallax from "../components/Parallax";
const Home = () => {
  return (
    <div className="w-full min-h-screen p-4 flex">
      <div className="bg-base-100 w-full p-6 rounded-lg shadow-lg relative overflow-hidden">
        <h1 className="text-6xl text-primary font-black text-center">
          Home Screen
        </h1>

        <Parallax offset={300}>
          <div className="w-[1000px] h-[1000px] rounded-[40px] bg-accent-focus absolute rotate-45 translate-x-1/2 translate-y-1/4"></div>
        </Parallax>

        <Parallax offset={700}>
          <img src={img} alt="" className="relative translate-y-[50%]" />
        </Parallax>
      </div>
    </div>
  );
};

export default Home;
