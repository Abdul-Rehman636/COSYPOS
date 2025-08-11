import { useState } from "react";
import Download from "../../assets/svgs/Download.svg";

const Overview = () => {
  const [activeTab, setActiveTab] = useState(1);

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

  const handlePeriod = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="w-full h-[513px] bg-[#292C2D] max-[1024px]:rounded-tr-[0px] max-[1024px]:rounded-br-[0px] rounded-[10px] font-poppins lg:py-7 lg:px-8 py-6">
      <div className="flex lg:flex-row flex-col justify-between items-start lg:gap-0 gap-8 lg:px-0 md:px-4">
        <div className="lg:w-auto w-full flex lg:flex-col flex-row max-[1024px]:justify-between lg:items-start items-center lg:gap-1">
          <p className="md:text-[25px] text-[16px] font-medium text-white">
            Overview
          </p>
          <div className="flex items-center gap-10 lg:mt-4">
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
        <div className="lg:w-auto w-full flex justify-between lg:gap-8">
          <div className="flex gap-1">
            {timePeriod.map((period) => {
              return (
                <button
                  className={`text-[16px] font-medium ${
                    activeTab === period.id
                      ? "bg-[#FAC1D9] text-[#333333]"
                      : "bg-transparent text-white"
                  } px-[22px] py-[14px] rounded-[7.5px] cursor-pointer hover:opacity-90`}
                  onClick={() => handlePeriod(period.id)}
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
    </div>
  );
};

export default Overview;
