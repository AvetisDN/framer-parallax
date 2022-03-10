import React from "react";
import img from "../images/2.png";

const Second = () => {
  return (
    <div className="w-full min-h-screen p-4 flex">
      <div className="bg-base-100 w-full p-6 rounded-lg shadow-lg relative overflow-hidden">
        <div className="w-[1000px] h-[1500px] rounded-[320px] bg-primary-content absolute rotate-45 -translate-x-1/2 -translate-y-1/4"></div>
        <h1 className="text-6xl text-accent font-black text-center relative">
          Second Screen
        </h1>
        <img
          src={img}
          alt=""
          className="relative translate-y-[35%] translate-x-1/3 z-10"
        />
        <div className="w-64 h-64 rounded-full bg-accent left-1/2 -translate-x-1/2 translate-y-20 origin-center relative"></div>
      </div>
    </div>
  );
};

export default Second;
