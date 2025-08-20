import Dollar from "../../assets/svgs/Dollar.svg";
import Cash from "../../assets/svgs/Cash.svg";
import Table from "../../assets/svgs/Table.svg";
import GreenChart from "../../assets/svgs/Green-chart.svg";
import LighBlueChart from "../../assets/svgs/Lightblue-chart.svg";
import DashboardStats from "../../assets/data/DashboardStats.json";

const Stats = () => {
  return (
    <div className="lg:mt-10 md:mt-9 mt-7 lg:mr-12 max-[1024px]:w-[95%] max-[1024px]:ml-auto max-[1024px]:overflow-x-auto no-scrollbar">
      <div className="flex lg:grid xl:grid-cols-3 lg:grid-cols-2 lg:gap-10 gap-6 font-poppins max-[1024px]:min-w-max">
        {DashboardStats.map((stat, index) => {
          const sign =
            stat?.type === "Daily Sales"
              ? Dollar
              : stat?.type === "Monthly Revenue"
              ? Cash
              : stat?.type === "Table Occupacy"
              ? Table
              : "";

          return (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[320px] lg:w-full h-[166px] bg-[#292C2D] flex flex-col justify-between rounded-[10px] pt-5 md:px-4 px-[18px]"
            >
              <div className="flex justify-between">
                <div>
                  <p className="md:text-[16px] text-[12px] font-light text-white">
                    {stat?.type}
                  </p>
                  <p className="md:text-[25px] text-[20px] font-medium text-white md:mt-1.5 mt-3">
                    {stat?.price || stat?.tables} {stat?.tables ? "Tables" : ""}
                  </p>
                </div>
                <span className="w-[35.66px] h-[35.66px] bg-[#FAC1D9] rounded-full flex justify-center items-center">
                  <img src={sign} alt="Icon" />
                </span>
              </div>
              <div className="flex justify-between items-end">
                <p className="md:text-[16px] text-[12px] font-light text-[#777979] md:mb-2.5 mb-[18px]">
                  {stat?.type === "Monthly Revenue"
                    ? `${stat?.from} - ${stat?.to}`
                    : stat?.date || ""}
                </p>
                <img
                  src={
                    stat?.type === "Monthly Revenue"
                      ? LighBlueChart
                      : GreenChart
                  }
                  alt="Chart"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
