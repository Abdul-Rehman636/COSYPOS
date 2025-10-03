import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const Actions = () => {
  const [activeReport, setActiveReport] = useState("Reservation Report");
  const [startDate, setStartDate] = useState(new Date("2024-04-01"));
  const [endDate, setEndDate] = useState(new Date("2024-08-04"));

  const reports = [
    {
      name: "Reservation Report",
    },
    {
      name: "Revenue Report",
    },
    {
      name: "Staff Report",
    },
  ];

  const handleReport = (name) => {
    setActiveReport(name);
  };

  return (
    <div className="flex lg:flex-row flex-col lg:gap-0 md:gap-6 gap-5 justify-between lg:items-center font-poppins">
      <div className="flex md:gap-[30px] gap-[22px] max-[1280px]:overflow-x-auto max-[1280px]:w-[280px] max-[1024px]:w-auto max-[640px]:w-full no-scrollbar">
        {reports.map((report, index) => {
          const name = report.name;

          return (
            <button
              key={index}
              className={`${
                activeReport === name
                  ? "bg-[#FAC1D9] text-[#333333] px-[22px]"
                  : "text-white"
              } py-3.5 text-[16px] font-normal rounded-[7.5px] text-nowrap cursor-pointer`}
              onClick={() => handleReport(name)}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div className="flex sm:flex-row flex-col max-[1024px]:justify-between items-center lg:gap-4 md:gap-6 gap-5">
        <div className="relative bg-[#3D4142] rounded-[7.5px] px-[22px] py-3.5 flex items-center gap-2.5">
          <FaCalendarAlt className="text-[#FAC1D9] w-[14px] h-[14px]" />
          <div className="flex items-center gap-1.5">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              className="bg-transparent text-white text-[14px] font-light outline-none w-[76px] cursor-pointer"
            />
            <span className="text-[#777979] text-[16px]">—</span>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              className="bg-transparent text-white text-[14px] font-light outline-none w-[76px] cursor-pointer"
            />
          </div>
        </div>
        <button className="bg-[#FAC1D9] text-[16px] font-medium text-[#333333] px-[22px] py-3.5 rounded-[7.5px] cursor-pointer">
          Generate Report
        </button>
      </div>
    </div>
  );
};

export default Actions;
