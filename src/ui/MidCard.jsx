import React from "react";

const MidCard = ({ image, text1, text2 }) => {
  return (
    <div className="">
      <div>
        <img src={image} alt="" className="sm:size-[100px] size-[60px]" />
      </div>
      <h1 className="text-white font-bold pt-1 md:text-lg text-base ">
        {text1}
      </h1>
      <h5 className="text-custommidcardText pt-1 font-bold  md:text-base text-sm">
        {text2}
      </h5>
    </div>
  );
};

export default MidCard;
