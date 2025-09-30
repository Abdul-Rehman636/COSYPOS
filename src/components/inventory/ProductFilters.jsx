import { useState } from "react";
import filterOptions from "../../assets/data/ProductFiltersOptions.json";

const ProductFilters = () => {
  const [activestatus, setActiveStatus] = useState("All");

  const productStatus = [
    {
      title: "All",
      value: 150,
    },
    {
      title: "Active",
      value: 20,
    },
    {
      title: "Inactive",
      value: 10,
    },
    {
      title: "Draft",
      value: 10,
    },
  ];

  const handleStatus = (title) => {
    setActiveStatus(title);
  };

  return (
    <div className="flex flex-col md:gap-6 gap-5 bg-[#292C2D] rounded-[10px] font-poppins px-4 md:pt-6 pt-5 pb-5">
      <div>
        <label className="text-[16px] font-medium text-white">
          Product Status
        </label>
        <div className="mt-2.5 grid grid-cols-2 gap-2.5">
          {productStatus.map((status, index) => {
            return (
              <span
                key={index}
                className={`flex justify-between items-center border ${
                  status.title === activestatus
                    ? "border-[#FAC1D9]"
                    : "border-[#3D4142]"
                } bg-[#3D4142] rounded-[10px] py-3 pl-4 pr-3 text-[16px] font-light text-white cursor-pointer`}
                onClick={() => handleStatus(status.title)}
              >
                {status.title}
                <span
                  className={`text-[14px] ${
                    status.title === activestatus
                      ? "text-[#333333] bg-[#FAC1D9]"
                      : "text-white"
                  } px-2 rounded-[5px]`}
                >
                  {status.value}
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <label className="text-[16px] font-medium text-white">Category</label>
        <div className="w-full bg-[#3D4142] px-3 py-3 mt-2 rounded-[10px] cursor-pointer">
          <select
            name="category"
            className="w-full text-[16px] font-light text-white outline-none cursor-pointer"
          >
            <option value="" className="text-[#777979]">
              Select category
            </option>
            {filterOptions[0].map((category, index) => {
              return (
                <option
                  key={index}
                  value={category.value.toLowerCase()}
                  className="text-[#777979]"
                >
                  {category.value}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        <label className="text-[16px] font-medium text-white">Stock</label>
        <div className="w-full bg-[#3D4142] px-3 py-3 mt-2 rounded-[10px] cursor-pointer">
          <select
            name="stock"
            className="w-full text-[16px] font-light text-white outline-none cursor-pointer"
          >
            <option value="" className="text-[#777979]">
              Select stock
            </option>
            {filterOptions[1].map((stock, index) => {
              return (
                <option
                  key={index}
                  value={stock.value.toLowerCase()}
                  className="text-[#777979]"
                >
                  {stock.value}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        <label className="text-[16px] font-medium text-white">Value</label>
        <div className="w-full bg-[#3D4142] px-3 py-3 mt-2 rounded-[10px] cursor-pointer">
          <select
            name="value"
            className="w-full text-[16px] font-light text-white outline-none cursor-pointer"
          >
            <option value="" className="text-[#777979]">
              Select value
            </option>
            {filterOptions[2].map((value, index) => {
              return (
                <option
                  key={index}
                  value={value.value.toLowerCase()}
                  className="text-[#777979]"
                >
                  {value.value}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        <label className="text-[16px] font-medium text-white">
          Piece / Item / Quantity
        </label>
        <input
          type="number"
          className="w-full bg-[#3D4142] px-4 py-3 mt-2 text-[16px] font-light text-white outline-none rounded-[10px]"
          placeholder="Enter Piece / Item / Quantity"
        />
      </div>
      <div>
        <label className="text-[16px] font-medium text-white">Price</label>
        <div className="flex flex-col gap-2.5 mt-2">
          <div className="flex items-center justify-between gap-3 w-full bg-[#3D4142] px-4 py-3 text-[16px] font-light rounded-[10px]">
            <input
              type="number"
              className="w-full text-white outline-none"
              placeholder="Enter Lowest Price"
            />
            <p className="text-[#FAC1D9]">$</p>
          </div>
          <div className="flex items-center justify-between gap-3 w-full bg-[#3D4142] px-4 py-3 text-[16px] font-light rounded-[10px]">
            <input
              type="number"
              className="w-full text-white outline-none"
              placeholder="Enter Highest Price"
            />
            <p className="text-[#FAC1D9]">$</p>
          </div>
        </div>
      </div>
      <button className="mt-2.5 bg-[#FAC1D9] px-[50px] py-[20px] rounded-[10px] text-[16px] font-medium text-[#333333]">
        Reset Filters
      </button>
    </div>
  );
};

export default ProductFilters;
