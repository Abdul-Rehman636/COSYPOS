import { useState } from "react";
import Download from "../../assets/svgs/Download.svg";

const Overview = () => {
  const [activeTab, setActiveTab] = useState(false);

  const timePeriod = [
    {
      id: 1,
      name: "Monthly",
    },
    {
      id: 2,
      name: "Daily",
    },
    {
      id: 3,
      name: "Weekly",
    },
  ];

  const handlePeriod = () => {
    setActiveTab(true);
  };

  return (
    <div className="w-full h-[513px] bg-[#292C2D] rounded-[10px] font-poppins lg:py-7 lg:px-8">
      <div>
        <div className="flex justify-between items-center">
          <p className="md:text-[25px] text-[16px] font-medium text-white">
            Overview
          </p>
          <div className="flex gap-8">
            <div className="flex gap-1">
              {timePeriod.map((period) => {
                return (
                  <button
                    className={`text-[16px] font-medium text-[#333333] ${
                      activeTab ? "bg-[#FAC1D9]" : ""
                    } px-[22px] py-[14px] rounded-[7.5px] cursor-pointer hover:opacity-90`}
                    onClick={handlePeriod}
                  >
                    {period.name}
                  </button>
                );
              })}
            </div>
            <button className="flex items-center gap-2.5 text-[16px] font-medium text-[#FAC1D9] py-[14px] px-[22px] border-[0.75px] border-[#FAC1D9] rounded-[7.5px] cursor-pointer hover:opacity-85">
              <img src={Download} alt="Download-Icon" />
              Export
            </button>
          </div>
        </div>
        <div className="flex items-center gap-10 mt-4">
          <span className="flex items-center gap-3 text-[16px] font-light text-white">
            <span className="w-7 h-[10px] bg-[#FAC1D9] rounded-[100px]"></span>
            Sales
          </span>

          <span className="flex items-center gap-3 text-[16px] font-light text-white">
            <span className="w-7 h-[10px] bg-[#D9D9D9] rounded-[100px]"></span>
            Revenue
          </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
