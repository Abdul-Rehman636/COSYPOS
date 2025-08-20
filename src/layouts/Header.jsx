import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LeftArrow from "../assets/svgs/Left-Arrow.svg";
import Bell from "../assets/svgs/Bell.svg";
import SamplePic from "../assets/images/sample-profile-pic.jpg";

const Header = ({ openSidebar, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pageName =
    location.pathname === "/" || location.pathname === "*"
      ? "Dashboard"
      : location.pathname === "/menu"
      ? "Menu"
      : location.pathname === "/staff-management"
      ? "Staff Management"
      : location.pathname === "/inventory"
      ? "Inventory"
      : location.pathname === "/reports"
      ? "Reports"
      : location.pathname === "/order-tables"
      ? "Orders"
      : location.pathname === "/reservation"
      ? "Reservation"
      : location.pathname === "/profile"
      ? "Profile"
      : location.pathname === "/notifications"
      ? "Notifications"
      : "";

  return (
    <div className="lg:w-auto w-[90%] mx-auto font-poppins lg:pt-11 pt-4 lg:mr-14">
      <div className="flex justify-between items-center">
        <p className="lg:hidden block text-[20px] font-semibold text-[#FAC1D9]">
          COSYPOS
        </p>
        <span className="lg:flex hidden gap-3.5">
          <NavLink
            className="w-9 h-9 bg-[#292C2D] rounded-full flex justify-center items-center"
            onClick={() => navigate(-1)}
          >
            <img src={LeftArrow} alt="LeftArrow" />
          </NavLink>

          <p className="text-[25px] font-medium text-white">{pageName}</p>
        </span>
        <div className="flex items-center md:gap-6 gap-5">
          <div
            className="flex flex-col items-end mt-1 cursor-pointer"
            onClick={() => navigate("/notifications")}
          >
            <div className="w-2.5 h-2.5 absolute -mt-1 bg-[#FAC1D9] rounded-full text-center">
              <p className="text-[6px] font-normal text-[#333333] pt-[1px]">
                01
              </p>
            </div>
            <img src={Bell} alt="Bell" className="mr-[1px]" />
          </div>
          <span className="h-[22px] border-[0.75px] border-white"></span>
          <span
            className="border-[1.5px] border-[#FAC1D9] md:w-[37px] md:h-[37px] w-[34px] h-[34px] rounded-full cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <img
              src={SamplePic}
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </span>
          <span className="lg:hidden block cursor-pointer">
            <input
              type="checkbox"
              id="checkbox"
              checked={openSidebar}
              onChange={toggleSidebar}
              className="hidden"
            />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </span>
        </div>
      </div>
      <span className="lg:hidden flex gap-2.5 mt-4">
        <NavLink
          to="#"
          onClick={() => navigate(-1)}
          className="w-[22px] h-[22px] bg-[#292C2D] rounded-full flex justify-center items-center"
        >
          <img
            src={LeftArrow}
            alt="LeftArrow"
            className="lg:w-[7.5px] w-[8px] lg:h-[6.75px] h-[8.25px]"
          />
        </NavLink>

        <p className="text-[16px] font-medium text-white">{pageName}</p>
      </span>
    </div>
  );
};

export default Header;
