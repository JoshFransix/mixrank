import React, { useRef } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import LastCard from "../ui/LastCard";
import mnector from "../assets/mnector.png";
import supersonic from "../assets/supersonic.webp";
import vp from "../assets/vp.webp";
import appodeal from "../assets/appodeal.webp";
import optim from "../assets/optim.png";
import aarki from "../assets/aarki.png";
function CardSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[92%] md:w-10/12 mx-auto">
      <div className="mt-[100px]">
        <div className="flex justify-start md:items-center md:flex-row flex-col">
          <div className="lg:text-4xl md:text-3xl text-2xl text-white">
            Listen to what our customers think about MixRank
          </div>
          <div className="flex justify-end w-max md:ml-auto md:mt-0 mt-5">
            <button
              className="h-[40px] w-[40px] mr-2 rounded-full bg-white flex items-center justify-center focus:outline-none"
              onClick={scrollLeft}
            >
              <GoArrowLeft className="h-[20px] w-[30px]" />
            </button>
            <button
              className="h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center focus:outline-none"
              onClick={scrollRight}
            >
              <GoArrowRight className="h-[20px] w-[30px]" />
            </button>
          </div>
        </div>

        <div
          className="mt-[30px] flex overflow-x-hidden w-[99%]"
          ref={sliderRef}
        >
          <div className="flex space-x-3">
            <LastCard
              text1="50% shorter Sales & Partnerships cycles"
              text2="Many developers we talk to don’t even know all the SDK’s that are integrated into their app until we tell them via MixRank.

"
              text3="mNectar"
              text4=""
              image={mnector}
            />
            <LastCard
              text1="MixRank gave us the opportunity to approach the right clients at the right time."
              text2=""
              text3="Supersonic"
              text4="Business Development"
              image={supersonic}
            />
            <LastCard
              text1="400 – 500% increase in the sales pipeline"
              text2="It wasn’t clear how powerful the tool was until we had a demo and learned more about the full functionality"
              text3="Truedata"
              text4="VP of Data Solutions"
              image={vp}
            />
            <LastCard
              text1="15% increase in sales efficiency"
              text2="MixRank provides more interesting data and with a much higher update frequency, that gives us the ability to find the target audience needed"
              text3="Appodeal"
              text4="Growth Marketing Manager"
              image={appodeal}
            />
            <LastCard
              text1="MixRank supercharges Optimizely’s mobile launch"
              text2="Not having MixRank would be a lot like walking with your eyes closed"
              text3="Optimizely"
              text4="Business Development"
              image={optim}
            />
            <LastCard
              text1="200% increase in sales efficiency"
              text2="
MixRank is great at being flexible to suit different customer needs and being able to fill a large gap for research generation.
"
              text3="Aarki"
              text4="Senior Director of Business Development"
              image={aarki}
            />
          </div>
        </div>
      </div>
      <div className="h-1 border-t-2 border-white mt-[100px] w-[90%] ml-[100px]"></div>
    </div>
  );
}

export default CardSlider;
