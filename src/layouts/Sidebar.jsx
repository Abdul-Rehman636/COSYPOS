import { NavLink } from "react-router-dom";
import TabIcon from "../assets/svgs/Tab-Icon.svg";

const Sidebar = () => {
  return (
    <div className="w-[171px] h-screen bg-[#292C2D] rounded-tr-[30px] rounded-br-[30px] font-poppins flex flex-col items-center">
      <div className="mt-8">
        <p className="text-[20px] font-semibold text-[#FAC1D9] text-center">
          COSYPOS
        </p>

        <div className="divide-y-[1px] divide-[#3D4142] mt-7 space-y-3">
          <NavLink
            to="#"
            className="bg-[#FAC1D9] w-[117px] h-[84px] rounded-[7.4px] flex flex-col justify-center items-center gap-1.5"
          >
            <span className="w-[29.72px] h-[29.72px] bg-white rounded-full flex justify-center items-center">
              <img src={TabIcon} alt="TabIcon" />
            </span>
            <p className="text-[16px] font-normal text-[#333333]">Dashboard</p>
          </NavLink>

          <NavLink
            to="#"
            className="bg-[#FAC1D9] w-[117px] h-[84px] rounded-[7.4px] flex flex-col justify-center items-center gap-1.5"
          >
            <span className="w-[29.72px] h-[29.72px] bg-white rounded-full flex justify-center items-center">
              <img src={TabIcon} alt="TabIcon" />
            </span>
            <p className="text-[16px] font-normal text-[#333333]">Dashboard</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
