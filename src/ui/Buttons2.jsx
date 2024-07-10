import React from "react";
import arrow from "../assets/arrow.png";
function Buttons2({ text }) {
  return (
    <button className="md:py-[1rem] py-[0.8rem] w-[300px] bg-customButton2 text-white flex justify-center items-center rounded hover:text-onhovertext transition duration-300 font-bold md:text-base text-sm">
      {text}
      <img src={arrow} alt="" className="h-[12px] w-[13px] pl-1 " />
    </button>
  );
}

export default Buttons2;
