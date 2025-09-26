import { useState } from "react";
import Download from "../../assets/svgs/Download.svg";
import OverviewChart from "./Chart";

const Overview = () => {
  const [activeTab, setActiveTab] = useState("Monthly");

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

  const handlePeriod = (name) => {
    setActiveTab(name);
  };

  const handleExport = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "chart.png";
    link.click();
  };

  return (
    <div className="w-full md:min-h-[513px] min-h-[343px] bg-[#292C2D] max-[1024px]:rounded-tr-[0px] max-[1024px]:rounded-br-[0px] rounded-[10px] font-poppins lg:py-7 lg:px-8 md:py-6 py-8">
      <div className="flex lg:flex-row flex-col justify-between items-start lg:gap-0 md:gap-8 sm:gap-6 gap-5 lg:pl-0 lg:pr-0 md:pl-4 md:pr-14 pl-4 sm:pr-12 pr-6">
        <div className="lg:w-auto w-full flex lg:flex-col flex-row max-[1024px]:justify-between lg:items-start items-center lg:gap-1">
          <p className="md:text-[25px] text-[16px] font-medium text-white">
            Overview
          </p>
          <div className="flex items-center md:gap-10 gap-3 lg:mt-4">
            <span className="flex items-center md:gap-3 gap-1.5 md:text-[16px] text-[12px] font-light text-white">
              <span className="md:w-7 md:h-[10px] w-[18px] h-[6px] bg-[#FAC1D9] rounded-[100px]"></span>
              Sales
            </span>

            <span className="flex items-center md:gap-3 gap-1.5 md:text-[16px] text-[12px] font-light text-white">
              <span className="md:w-7 md:h-[10px] w-[18px] h-[6px] bg-[#D9D9D9] rounded-[100px]"></span>
              Revenue
            </span>
          </div>
        </div>
        <div className="lg:w-auto w-full flex justify-between lg:gap-8">
          <div className="flex items-center md:gap-7 gap-5">
            {timePeriod.map((period, index) => {
              return (
                <button
                  key={index}
                  className={`md:text-[16px] text-[12px] font-medium h-fit ${
                    activeTab === period.name
                      ? "bg-[#FAC1D9] text-[#333333] md:px-[22px] px-5 md:py-[14px] py-2.5"
                      : "bg-transparent text-white"
                  } rounded-[7.5px] cursor-pointer hover:opacity-90`}
                  onClick={() => handlePeriod(period.name)}
                >
                  {period.name}
                </button>
              );
            })}
          </div>
          <button
            className="flex items-center gap-2.5 md:text-[16px] text-[12px] font-medium text-[#FAC1D9] md:py-[14px] py-2.5 md:px-[22px] px-[15px] border-[0.75px] border-[#FAC1D9] rounded-[7.5px] cursor-pointer hover:opacity-85"
            onClick={handleExport}
          >
            <img src={Download} alt="Download-Icon" />
            Export
          </button>
        </div>
      </div>
      <div className="md:h-[360px] h-[240px] w-full md:mt-4 mt-2">
        <OverviewChart activeTab={activeTab} handleExport={handleExport} />
      </div>
    </div>
  );
};

export default Overview;
