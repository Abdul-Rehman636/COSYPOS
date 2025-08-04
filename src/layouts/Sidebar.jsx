import { NavLink, useLocation } from "react-router-dom";
import TabIcon from "../assets/svgs/Tab-Icon.svg";
import LogoutIcon from "../assets/svgs/Logout.svg";
import NavigationTabs from "../assets/data/NavigationTabs.json";

const Sidebar = ({ handleCloseSidebar }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between items-center lg:w-[171px] lg:h-screen bg-[#292C2D] lg:rounded-tr-[30px] lg:rounded-br-[30px] font-poppins lg:py-8 pb-10 pt-0">
      <div className="max-[1024px]:w-full">
        <p className="lg:block hidden text-[20px] font-semibold text-[#FAC1D9] text-center">
          COSYPOS
        </p>

        <div className="flex flex-col items-center lg:max-h-[70vh] max-[1024px]:w-full lg:overflow-y-auto no-scrollbar mt-7">
          {NavigationTabs.map((navTab, index, array) => {
            const lastObject = index === array.length - 1;

            const activeTab = location.pathname === navTab.path;

            return (
              <div key={index} className="flex flex-col items-center w-full">
                <NavLink
                  to={navTab.path}
                  onClick={handleCloseSidebar}
                  className={`${
                    activeTab ? "bg-[#FAC1D9]" : ""
                  } lg:w-[117px] w-[90%] h-[84px] rounded-[7.4px] flex flex-col justify-center items-center gap-1.5`}
                >
                  <span className="w-[29.72px] h-[29.72px] bg-white rounded-full flex justify-center items-center">
                    <img src={TabIcon} alt="TabIcon" />
                  </span>
                  <p
                    className={`text-[16px] font-normal ${
                      activeTab ? "text-[#333333]" : "text-white"
                    }`}
                  >
                    {navTab.name}
                  </p>
                </NavLink>

                {!lastObject ? (
                  <div className="w-[50%] lg:w-[88px] border-[0.75px] border-[#3D4142] my-3"></div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>

      <NavLink
        to="#"
        className="flex flex-col items-center gap-1.5 max-[1024px]:mt-16"
      >
        <img src={LogoutIcon} alt="LogoutIcon" />
        <p className="text-[16px] font-normal text-white">Logout</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
