import React from "react";
import MidCard from "../ui/MidCard";
import global from "../assets/global.png";
import setting from "../assets/setting.png";
import people from "../assets/people.png";
import building from "../assets/building.png";
import sql from "../assets/sql.png";
import file from "../assets/file.png";

function Smallcard() {
  return (
    <div className="py-[40px] w-9/12 mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
      <MidCard image={global} text1="1,000M/mo" text2="Web Tech Detections" />
      <MidCard image={setting} text1="100K/mo" text2="Mobile SDK Detections" />
      <MidCard image={people} text1="125M/mo" text2="Employee Profile Scan" />
      <MidCard image={building} text1="45M/mo" text2="Companies Indexed" />
      <MidCard
        image={sql}
        text1="3 Petabytes/mo"
        text2="Data Processed by MixRank"
      />
      <MidCard image={file} text1="45M/mo" text2="Job Posts Added" />
    </div>
  );
}

export default Smallcard;
