import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import Data from "../../assets/data/StaffTable.json";

const Table = ({
  setShowDeletePopup,
  setDeleteItem,
  setShowModal,
  setShowStaffInfo,
  setMode,
}) => {
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  const [activeTab, setActiveTab] = useState("Staff Management");

  const tabs = [
    {
      name: "Staff Management",
    },
    {
      name: "Attendance",
    },
  ];

  const statusOptions = [
    {
      name: "Present",
    },
    {
      name: "Absent",
    },
    {
      name: "Half Shift",
    },
    {
      name: "Leave",
    },
  ];

  const handleTab = (name) => {
    setActiveTab(name);
  };

  const handleDelete = (id) => {
    setDeleteItem(id);
    setShowDeletePopup(true);
  };

  const toggleRow = (id) => {
    setExpandedRows((prev) => [...prev, id]);
  };

  const handleChooseStatus = (id) => {
    setExpandedRows((prev) => prev.filter((rowId) => rowId !== id));
  };

  const handleEdit = () => {
    setMode("edit");
    setShowModal(true);
  };

  const handleViewDetail = () => {
    setShowStaffInfo(true);
  };

  const filteredHeader = Data.head.filter(
    (header) => header.for === activeTab || header.for === "Both"
  );

  return (
    <div className="font-poppins mt-5">
      <div className="flex items-center gap-[35px] lg:pl-[166px] lg:mr-14 lg:ml-auto mx-auto max-[1024px]:w-[90%]">
        {tabs.map((tab, index) => {
          const name = tab.name;

          return (
            <button
              key={index}
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
      <div className="w-full max-h-[600px] overflow-y-auto no-scrollbar lg:pl-[123px] overflow-x-auto mt-5">
        <table className="font-poppins w-full max-[1024px]:overflow-x-auto no-scrollbar">
          <thead className="sticky z-10 top-0 bg-[#111315]">
            <tr>
              <th className="px-2.5 py-2">
                <input
                  type="checkbox"
                  checked={
                    Data.body.length > 0 &&
                    selectedStaff.length === Data.body.length
                  }
                  className="appearance-none w-3 h-3 border border-white rounded-xs cursor-pointer checked:accent-white checked:appearance-auto"
                  onChange={() => {
                    if (selectedStaff.length === Data.body.length) {
                      setSelectedStaff([]);
                    } else {
                      setSelectedStaff([...Data.body]);
                    }
                  }}
                />
              </th>
              <th className="text-[14px] font-medium text-white text-start lg:px-0 px-3">
                ID
              </th>
              {filteredHeader.map((head, index) => {
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
            {Data.body.map((body, index) => {
              const dateString = body.attendance[0].date;
              const date = new Date(dateString);
              const rowId = body.id;

              const options = {
                day: "2-digit",
                month: "short",
                year: "numeric",
              };

              const formattedDate = date
                .toLocaleDateString("en-GB", options)
                .replaceAll(" ", "-");

              const isChecked = selectedStaff.some((item) => item.id === rowId);
              return (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#3D4142]" : "bg-[#292C2D]"
                  }`}
                >
                  <td className="lg:px-0 px-3 py-3.5 text-center">
                    {activeTab === "Staff Management" ? (
                      <input
                        type="checkbox"
                        checked={isChecked}
                        className="appearance-none w-3 h-3 border border-white rounded-xs cursor-pointer checked:accent-white checked:appearance-auto"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedStaff((prev) => [...prev, body]);
                          } else {
                            setSelectedStaff((prev) =>
                              prev.filter((item) => item.id !== rowId)
                            );
                          }
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </td>
                  <td className="text-[14px] font-normal text-white text-nowrap lg:px-0 px-3 py-3.5">
                    #{rowId}
                  </td>
                  <td className="flex items-center gap-2.5 lg:pl-0 lg:pr-0 pl-3 pr-9 py-3.5">
                    <img
                      src={body.details.image}
                      alt="Image"
                      className="w-[27px] lg:h-[27px] border border-[#FAC1D9] rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="text-[14px] font-normal text-white text-nowrap">
                        {body.details.name}
                      </p>
                      <p className="text-[12px] font-light text-[#FAC1D9] mt-0.5">
                        {body.details.role}
                      </p>
                    </div>
                  </td>
                  {activeTab === "Attendance" ? (
                    <td className="text-[14px] font-normal text-white text-nowrap lg:px-0 px-3 py-3.5">
                      {formattedDate}
                    </td>
                  ) : (
                    ""
                  )}
                  {activeTab === "Staff Management" ? (
                    <td className="text-[14px] font-normal text-white text-nowrap lg:px-0 px-3 py-3.5">
                      {body.email}
                    </td>
                  ) : (
                    ""
                  )}
                  {activeTab === "Staff Management" ? (
                    <td className="text-[14px] font-normal text-white text-nowrap lg:px-0 px-3 py-3.5">
                      {body.phone}
                    </td>
                  ) : (
                    ""
                  )}
                  {activeTab === "Staff Management" ? (
                    <td className="text-[14px] font-normal text-white text-nowrap lg:px-0 px-3 py-3.5">
                      {body.age}
                    </td>
                  ) : (
                    ""
                  )}
                  {activeTab === "Staff Management" ? (
                    <td className="text-[14px] font-normal text-white text-nowrap lg:px-0 px-3 py-3.5">
                      ${body.salary}.00
                    </td>
                  ) : (
                    ""
                  )}
                  <td className="text-[14px] font-normal text-white text-nowrap lg:px-0 px-3 py-3.5">
                    {body.timing.startTime} to {body.timing.endTime}
                  </td>
                  {activeTab === "Staff Management" ? (
                    <td className="flex items-center gap-3 lg:px-0 px-3 py-3.5 bottom-[9px] relative">
                      <span className="w-[22px] h-[22px] flex justify-center items-center rounded-full bg-[#FAC1D9] cursor-pointer">
                        <IoEye size={14} onClick={handleViewDetail} />
                      </span>
                      <HiOutlinePencil
                        size={14}
                        color="white"
                        className="cursor-pointer"
                        onClick={handleEdit}
                      />
                      <RiDeleteBin6Fill
                        size={14}
                        color="#E70000"
                        className="cursor-pointer"
                        onClick={() => handleDelete(rowId)}
                      />
                    </td>
                  ) : (
                    ""
                  )}
                  {activeTab === "Attendance" ? (
                    <td
                      className={`xl:px-1 px-2 py-3.5 ${
                        expandedRows.includes(rowId)
                          ? "xl:w-[500px] w-[460px]"
                          : ""
                      }`}
                    >
                      {expandedRows.includes(rowId) ? (
                        <div className="flex lg:flex-wrap gap-2">
                          {statusOptions.map((status, index) => (
                            <span
                              key={index}
                              className={`px-[22px] py-3 rounded-[7.5px] cursor-pointer text-[16px] font-medium text-nowrap ${
                                status.name === "Present"
                                  ? "bg-[#FAC1D9] text-black"
                                  : status.name === "Absent"
                                  ? "bg-[#FFDF6B] text-black"
                                  : status.name === "Half Shift"
                                  ? "bg-[#6BE4FF] text-black"
                                  : "bg-[#FF6A6A] text-black"
                              }`}
                              onClick={() => handleChooseStatus(rowId)}
                            >
                              {status.name}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span
                          className={`w-[130px] flex justify-between items-center px-[22px] py-3 ${
                            index % 2 === 0 ? "bg-[#292C2D]" : "bg-[#3D4142]"
                          } rounded-[7.5px] cursor-pointer text-white`}
                          onClick={() => toggleRow(rowId)}
                        >
                          {" "}
                          {body.attendance[0].status || "No Status"}{" "}
                          <HiOutlinePencil
                            size={12}
                            color="white"
                            className="cursor-pointer"
                          />{" "}
                        </span>
                      )}
                    </td>
                  ) : (
                    ""
                  )}
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
