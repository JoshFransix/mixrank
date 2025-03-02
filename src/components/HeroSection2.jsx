import React, { useState } from "react";
import hero from "../assets/hero.png";
import Buttons2 from "../ui/Buttons2";

function HeroSection2() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection((prevSection) =>
      prevSection === section ? null : section
    );
  };
  const handleMouseLeave = () => {
    setVisibleSection(null); // Set visibleSection to null on mouse leave
  };

  return (
    <div className="w-[92%] md:w-10/12 mx-auto">
      <div className=" mt-10 relative">
        {/* Vertical line */}
        <div className="absolute top-[70px] bg-white h-[450px] w-[2px]"></div>

        <h2 className="text-white font-thin lg:text-5xl md:text-4xl sm:text-2xl text-lg">
          How we help
        </h2>
        <div className="flex justify-between lg:flex-row flex-col">
          <div className="lg:text-2xl md:text-xl text-base">
            <div
              className="mt-[50px] text-white font-thin  ml-4 transition duration-300 transform lg:hover:translate-x-8 hover:translate-x-3 hover:text-onhovertext"
              onClick={() => toggleSection("investmentIntelligence")}
              onMouseLeave={handleMouseLeave}
            >
              Investment Intelligence
              {visibleSection === "investmentIntelligence" && (
                <h3 className="text-onmidcardtext mt-4">
                  Get never-before-seen insights into private companies, with
                  dimensions such as tech installs and usage, user metrics,
                  employee trends, and tracking key personnel movements.
                </h3>
              )}
            </div>
            <div
              className="mt-[50px] text-white font-thin ml-4 transition duration-300 transform lg:hover:translate-x-8 hover:translate-x-3 hover:text-onhovertext"
              onClick={() => toggleSection("candidateEnrichment")}
              onMouseLeave={handleMouseLeave}
            >
              Candidate Enrichment
              {visibleSection === "candidateEnrichment" && (
                <div className="text-onmidcardtext mt-4">
                  With data from 500+ million candidates, supersize your hiring
                  database and recruitment software with the world’s
                  best-qualified candidates, updated hourly.
                </div>
              )}
            </div>
            <div
              className="mt-[50px] text-white font-thin ml-4 transition duration-300 transform lg:hover:translate-x-8 hover:translate-x-3 hover:text-onhovertext"
              onClick={() => toggleSection("b2bDataEnrichment")}
              onMouseLeave={handleMouseLeave}
            >
              B2B Data Enrichment
              {visibleSection === "b2bDataEnrichment" && (
                <div className="text-onmidcardtext mt-4">
                  Enrich your data platform with the power of 500M+ employees
                  and 45M company records. Fill in the gaps, and get rich data
                  points for each record in your database.
                </div>
              )}
            </div>
            <div
              className="mt-[50px] text-white font-thin ml-4 transition duration-300 transform lg:hover:translate-x-8 hover:translate-x-3 hover:text-onhovertext"
              onClick={() => toggleSection("mobileApps")}
              onMouseLeave={handleMouseLeave}
            >
              Mobile Apps and SDK Intelligence
              {visibleSection === "mobileApps" && (
                <div className="text-onmidcardtext mt-4">
                  Use our 20+ million app dataset to make your product better.
                  Learn from the entire mobile app and SDK ecosystem to make
                  your product better and get an edge over your competitors.
                </div>
              )}
            </div>
            <div
              className="mt-[50px] text-white font-thin ml-4 transition duration-300 transform lg:hover:translate-x-8 hover:translate-x-3 hover:text-onhovertext"
              onClick={() => toggleSection("fraudPrevention")}
              onMouseLeave={handleMouseLeave}
            >
              Fraud Prevention and Data Enrichment
              {visibleSection === "fraudPrevention" && (
                <div className="text-onmidcardtext mt-4">
                  Use our 500+ million profile database to prevent fraud,
                  identify customers, and more. Get a 360° view of who your
                  customers are, identify possible risks, and prevent fraud with
                  data delivered in minutes.
                </div>
              )}
            </div>
          </div>
          <div className="mr-[30px] flex-shrink-0">
            <img
              src={hero}
              alt="Hero"
              className="select-none pointer-events-none md:h-[550px] md:w-[550px] h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="">
        <Buttons2 text="EXPLORE ALL USE CASES" />
      </div>
    </div>
  );
}

export default HeroSection2;
