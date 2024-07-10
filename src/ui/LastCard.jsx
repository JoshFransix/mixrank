import React from "react";
import mnector from "../assets/mnector.png";
const LastCard = ({ text1, image, text2, text3, text4 }) => {
  return (
    <>
      <div className="h-[350px] w-[400px] rounded-2xl bg-customTopCard p-8">
        <div className="font-extrabold text-lg">
          <ul className="list-disc text-white font-extrabold md:text-2xl text-lg">
            <li>{text1}</li>
          </ul>
        </div>
        <div className="pt-3  text-customTopcardText font-semibold sm:text-base text-sm">
          {text2}
        </div>
        <div className="pt-8  flex">
          <div>
            <img src={image} alt="" className="md:size-[75px] size-[50px]" />
          </div>
          <div>
            <div className="font-extrabold text-3xl text-white pl-2">
              {text3}
            </div>
            <div className="text-xl font-bold text-customlastcardtext pl-2">
              {text4}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastCard;
