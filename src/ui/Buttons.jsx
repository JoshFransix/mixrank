import React from "react";
import arrow from "../assets/arrow.png";
function Buttons({ text }) {
  return (
    <button className="md:py-[1rem] py-[0.8rem] w-[190px] bg-customButton text-white flex justify-center items-center rounded hover:bg-customButtonHover transition duration-300 md:text-base text-sm">
      {text}
      <img src={arrow} alt="" className="h-[12px] w-[13px] pl-1" />
    </button>
  );
}

export default Buttons;
