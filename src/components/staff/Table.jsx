import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Data from "../../assets/data/StaffTable.json";

const Table = () => {
  const [activeTab, setActiveTab] = useState("Staff Management");

  const tabs = [
    {
      name: "Staff Management",
    },
    {
      name: "Attendance",
    },
  ];

  const handleTab = (name) => {
    setActiveTab(name);
  };

  return (
    <div className="font-poppins mt-5">
      <div className="flex items-center gap-[35px] lg:pl-[166px] lg:mr-14 lg:ml-auto mx-auto max-[1024px]:w-[90%]">
        {tabs.map((tab) => {
          const name = tab.name;

          return (
            <button
              className={`text-[16px] font-medium ${
                activeTab === name
                  ? "text-[#333333] py-3.5 px-[22px] bg-[#FAC1D9] rounded-[7.5px]"
                  : "text-white"
              }  cursor-pointer`}
              onClick={() => handleTab(name)}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div className="max-h-[600px] overflow-y-auto no-scrollbar">
        <table className="font-poppins w-full max-[1024px]:overflow-x-auto no-scrollbar">
          <thead className="sticky top-0 bg-[#111315]">
            <tr>
              <th className="px-2.5 py-2">
                <input
                  type="checkbox"
                  checked={
                    FilteredData.length > 0 &&
                    selectedProduct.length === FilteredData.length
                  }
                  className="appearance-none w-3 h-3 border border-white rounded-xs cursor-pointer checked:accent-white checked:appearance-auto"
                  onChange={() => {
                    if (selectedProduct.length === FilteredData.length) {
                      setSelectedProduct([]);
                    } else {
                      setSelectedProduct([...FilteredData]);
                    }
                  }}
                />
              </th>
              {TableData.head.map((head, index) => {
                return (
                  <th
                    key={index}
                    className="text-[14px] font-medium text-white text-start lg:px-0 px-3"
                  >
                    {head.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {FilteredData.map((body, index) => {
              const isChecked = selectedProduct.some(
                (item) => item.id === body.id
              );
              return (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#292C2D]" : "bg-[#3D4142]"
                  }`}
                >
                  <td className="px-2.5 flex justify-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      className="appearance-none w-3 h-3 border border-white rounded-xs cursor-pointer checked:accent-white checked:appearance-auto"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedProduct((prev) => [...prev, body]);
                        } else {
                          setSelectedProduct((prev) =>
                            prev.filter((item) => item.id !== body.id)
                          );
                        }
                      }}
                    />
                  </td>
                  <td className="py-3.5 lg:px-0 px-3">
                    <img
                      src={body.productImage}
                      alt="Product Image"
                      className="w-[80px] lg:h-[80px] h-[60px] rounded-[5.2px] object-cover"
                    />
                  </td>
                  <td className="lg:px-0 px-3">
                    <p className="text-[14px] font-normal text-white text-nowrap">
                      {body.productName}
                    </p>
                    <p className="max-w-[200px] lg:text-[14px] text-[12px] font-light text-[#ADADAD] mt-1">
                      {body.productDescription}
                    </p>
                  </td>
                  <td className="text-[14px] font-normal text-white text-nowrap lg:px-0 px-3">
                    #{body.itemID}
                  </td>
                  <td className="text-[14px] font-normal text-white text-nowrap lg:px-0 px-3">
                    {body.stock} items
                  </td>
                  <td className="text-[14px] font-normal text-white text-nowrap lg:px-0 px-3">
                    {body.category}
                  </td>
                  <td className="text-[14px] font-normal text-white text-nowrap lg:px-0 px-3">
                    ${body.price}.00
                  </td>
                  <td
                    className={`text-[14px] font-normal ${
                      body.stock > 0 ? "text-[#F8C0D7]" : "text-[#F60000]"
                    } text-nowrap lg:px-0 px-3`}
                  >
                    {body.stock > 0 ? "In Stock" : "Out of Stock"}
                  </td>
                  <td className="flex items-center gap-3 py-12 lg:px-0 px-3">
                    <HiOutlinePencil color="white" className="cursor-pointer" />
                    <RiDeleteBin6Fill
                      color="#E70000"
                      className="cursor-pointer"
                      onClick={() => handleDelete(body.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
