import React from "react";
import Buttons from "../ui/Buttons";
import hero from "../assets/hero2.png";
function Hero3() {
  return (
    <div className="w-[92%] md:w-10/12 mx-auto">
      <div className="mt-[150px] w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <div className="text-white  pt-4 leading-[3rem] lg:text-4xl md:text-3xl sm:text-2xl">
            Out-of-the box and bespoke integrations with leading customer data
            platforms
          </div>
          <div className="text-customTopCard2 text-thin md:text-2xl sm:text-base text-sm py-6 leading-[2rem]">
            Ingest our data into your platform of choice. We can either provide
            raw data feeds, or help you build custom integrations to
            applications of your preference.
          </div>
          <div className="pt-4">
            <Buttons text="Contact Sales" />
          </div>
        </div>
        <img
          src={hero}
          alt=""
          className="-mt-[3rem] select-none pointer-events-none md:h-[550px] md:w-[550px] h-full w-full"
        />
      </div>
    </div>
  );
}

export default Hero3;
