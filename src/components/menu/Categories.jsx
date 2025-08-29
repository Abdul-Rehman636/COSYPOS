import { useState } from "react";
import CategoryData from "../../assets/data/Categories.json";
import { PiHamburgerFill, PiCookieFill } from "react-icons/pi";
import { GiFullPizza, GiChickenLeg, GiSadCrab } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

const Categories = ({ setShowModal }) => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="lg:w-[94%] w-[90%] max-[1024px]:mx-auto font-poppins">
      <div className="flex justify-between items-center">
        <p className="text-[25px] font-medium text-white">Categories</p>
        <button
          className="text-[16px] font-medium text-[#333333] py-[14px] px-[22px] bg-[#FAC1D9] rounded-[7.5px] cursor-pointer md:block hidden"
          onClick={() => setShowModal(true)}
        >
          Add New Category
        </button>
      </div>

      <div className="sm:mt-7 mt-4 grid xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 md:gap-5 gap-4">
        {CategoryData.map((category, index) => {
          return (
            <div
              key={index}
              className={`h-[146px] flex flex-col justify-between ${
                activeTab === category.name ? "bg-[#FAC1D9]" : "bg-[#292C2D]"
              } rounded-[10px] px-4 py-3.5 cursor-pointer`}
              onClick={() => setActiveTab(category.name)}
            >
              <span className="ml-auto">
                {category.name === "All" ? (
                  <RxDashboard
                    size={40}
                    color={activeTab === category.name ? "#333333" : "#FAC1D9"}
                  />
                ) : category.name === "Pizza" ? (
                  <GiFullPizza
                    size={40}
                    color={activeTab === category.name ? "#333333" : "#FAC1D9"}
                  />
                ) : category.name === "Burger" ? (
                  <PiHamburgerFill
                    size={40}
                    color={activeTab === category.name ? "#333333" : "#FAC1D9"}
                  />
                ) : category.name === "Chicken" ? (
                  <GiChickenLeg
                    size={40}
                    color={activeTab === category.name ? "#333333" : "#FAC1D9"}
                  />
                ) : category.name === "Bakery" ? (
                  <PiCookieFill
                    size={40}
                    color={activeTab === category.name ? "#333333" : "#FAC1D9"}
                  />
                ) : category.name === "Beverage" ? (
                  <IoFastFoodSharp
                    size={40}
                    color={activeTab === category.name ? "#333333" : "#FAC1D9"}
                  />
                ) : category.name === "Seafood" ? (
                  <GiSadCrab
                    size={40}
                    color={activeTab === category.name ? "#333333" : "#FAC1D9"}
                  />
                ) : (
                  ""
                )}
              </span>
              <div>
                <p
                  className={`text-[16px] font-medium ${
                    activeTab === category.name
                      ? "text-[#333333]"
                      : "text-white"
                  }`}
                >
                  {category.name}
                </p>
                <p
                  className={`text-[16px] font-light ${
                    activeTab === category.name
                      ? "text-[#333333]"
                      : "text-white"
                  }`}
                >
                  {category.items} {category.items > 1 ? "items" : "item"}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="mt-8 mx-auto sm:text-[16px] text-[12px] font-medium text-[#333333] py-[14px] px-[22px] bg-[#FAC1D9] rounded-[7.5px] cursor-pointer md:hidden block"
        onClick={() => setShowModal(true)}
      >
        Add New Category
      </button>
    </div>
  );
};

export default Categories;
