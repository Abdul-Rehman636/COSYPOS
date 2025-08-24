import { useState } from "react";
import MenuData from "../../assets/data/AllMenu.json";

const AllMenu = () => {
  const [activeTab, setActiveTab] = useState("Normal Menu");

  return (
    <div className="lg:w-[94%] w-[90%] max-[1024px]:mx-auto font-poppins mt-[4.5rem]">
      <p className="text-[25px] font-medium text-white">
        Special menu all items
      </p>
      <div className="flex justify-between items-center mt-7">
        <div className="flex xl:gap-10 lg:gap-7">
          {MenuData.map((menu, index) => {
            return (
              <button
                key={index}
                className={`xl:text-[16px] lg:text-[14px] font-medium cursor-pointer ${
                  activeTab === menu.name
                    ? "text-[#333333] bg-[#FAC1D9] px-[22px] py-[14px] rounded-[7.5px]"
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
