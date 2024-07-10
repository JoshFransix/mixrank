import React from "react";
import { SlArrowRight } from "react-icons/sl";
import MailInput from "../ui/MailInput";
import Buttons1 from "../ui/Buttons1";
function Hero() {
  return (
    <div className="w-[92%] md:w-10/12 mx-auto h-full">
      <div className="mt-[100px] lg:w-[70%] sm:w-[80%] w-full flex ">
        <SlArrowRight
          color="red"
          className="lg:h-[50px] lg:w-[50px] w-[35px] h-[35px]"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Ultra-high-frequency technographic and people data for your data
          teams.
        </h1>
      </div>
      <div className=" my-6 w-full flex text-custommidcardText font-semibold lg:text-xl md:text-lg sm:text-base sm:w-[80%] text-sm">
        MixRank curates the world’s most updated feed of people, company, and
        technographic datasets. Receive updates at hourly intervals and be the
        first to know when the data you care about changes.
      </div>
      <div className="lg:w-7/12 w-full mt-6 grid grid-cols-1 gap-4 md:grid-cols-[70%_30%] ">
        <MailInput />
        <Buttons1 text="Talk To Sales" />
      </div>
    </div>
  );
}

export default Hero;
