import React from "react";

function Buttons1({ text }) {
  return (
    <button className="py-5 md:text-base text-sm w-full bg-customButton text-white flex justify-center items-center rounded hover:bg-customButtonHover transition duration-300">
      {text}
    </button>
  );
}

export default Buttons1;
