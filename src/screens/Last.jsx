import React from "react";
import img from "../images/3.png";

const Last = () => {
  return (
    <div className="w-full min-h-screen p-4 flex">
      <div className="bg-base-100 w-full p-6 rounded-lg shadow-lg relative overflow-hidden">
        <div className="w-[1000px] h-[1500px] rounded-[20px] bg-primary-focus absolute rotate-[20deg] -translate-x-1/2 translate-y-[300px]"></div>
        <h1 className="text-6xl text-secondary font-black text-center relative">
          Last Screen
        </h1>
        <img src={img} alt="" className="relative translate-x-1/3" />
        <div className="w-64 h-64 rounded-full bg-info right-[20%] bottom-[10%] absolute"></div>
      </div>
    </div>
  );
};

export default Last;
