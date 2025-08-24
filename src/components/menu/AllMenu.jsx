import { useState } from "react";
import MenuData from "../../assets/data/AllMenu.json";

const AllMenu = () => {
  const [activeTab, setActiveTab] = useState("Normal Menu");

  return (
    <div className="lg:w-[94%] sm:w-[90%] w-[95%] lg:mx-0 sm:mx-auto max-[640px]:ml-auto font-poppins lg:mt-[4.5rem] mt-14">
      <p className="text-[25px] font-medium text-white">
        Special menu all items
      </p>
      <div className="flex justify-between items-center mt-7">
        <div className="flex xl:gap-10 md:gap-7 gap-5 max-[640px]:overflow-x-auto no-scrollbar sm:w-auto w-[100%]">
          {MenuData.map((menu, index) => {
            return (
              <button
                key={index}
                className={`xl:text-[16px] md:text-[14px] text-xs font-medium cursor-pointer text-nowrap ${
                  activeTab === menu.name
                    ? "text-[#333333] bg-[#FAC1D9] md:px-[22px] px-5 md:py-[14px] py-2.5 rounded-[7.5px]"
                    : "text-white"
                }`}
                onClick={() => setActiveTab(menu.name)}
              >
                {menu.name}
              </button>
            );
          })}
        </div>
        <button className="lg:block hidden text-[16px] font-medium text-[#333333] bg-[#FAC1D9] px-[22px] py-[14px] rounded-[7.5px]">
          Add Menu Item
        </button>
      </div>
    </div>
  );
};

export default AllMenu;
