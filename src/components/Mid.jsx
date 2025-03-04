import React from "react";
import oracle from "../assets/oracle.png";
import orptimizely from "../assets/optimizely.png";
import meta from "../assets/meta.png";
import intel from "../assets/intel.png";
import amzon from "../assets/amzon.png";
import adobe from "../assets/adobe.png";

function Mid() {
  return (
    <div className="w-[92%] md:w-10/12 mx-auto">
      <div className="mt-[250px] flex justify-center ">
        <div className="h-1 w-full border-t-2 border-white"></div>
      </div>
      <div>
        <div className="flex flex-wrap">
          <div className="m-2 md:w-[200px] w-[130px]">
            <img src={oracle} alt="Oracle" />
          </div>
          <div className="m-2 md:w-[200px] w-[130px]">
            <img src={orptimizely} alt="Optimizely" />
          </div>
          <div className="m-2 md:w-[200px] w-[130px]">
            <img src={meta} alt="Meta" />
          </div>
          <div className="m-2 md:w-[200px] w-[130px]">
            <img src={intel} alt="Intel" />
          </div>
          <div className="m-2 md:w-[200px] w-[130px]">
            <img src={amzon} alt="Amazon" />
          </div>
          <div className="m-2 md:w-[200px] w-[130px] ">
            <img src={adobe} alt="Adobe" />
          </div>
        </div>
        <div className="mt-4 flex w-[80%] justify-center ml-[90px]">
          <div className="h-1 w-full border-t-2 border-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Mid;
