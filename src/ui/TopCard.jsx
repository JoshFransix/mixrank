import React from "react";
import { FaArrowRight } from "react-icons/fa";

const TopCard = ({
  image,
  sabseuperwalatext,
  uskejustnichewalatext,
  bichkatext,
  aakhirikatext,
}) => {
  return (
    <div>
      <div className=" bg-customTopCard rounded-xl p-8">
        <div className="flex">
          <div className="h-[85px] w-[85px] bg-customTopImagebg rounded-lg flex justify-center items-center">
            <img src={image} alt="" className="size-[40px]" />
          </div>
          <div className="h-full w-full flex flex-col justify-center pl-4">
            <div className="text-customTopText font-semibold">
              {sabseuperwalatext}
            </div>
            <div className="text-white font-extrabold large-font md:text-lg text-base">
              {uskejustnichewalatext}
            </div>
          </div>
        </div>
        <div className="  text-customTopcardText mt-8">{bichkatext}</div>
        <div className="pt-8">
          <div className="flex">
            <div className="text-white font-semibold">{aakhirikatext}</div>
            <div className="pl-1 pt-1">
              <FaArrowRight style={{ color: "white" }} />
            </div>
          </div>
          <div className="bg-customTopText border-t-2 border-customTopText w-[60%]"></div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
