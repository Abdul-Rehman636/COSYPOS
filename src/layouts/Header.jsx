import LeftArrow from "../assets/svgs/Left-Arrow.svg";
import Bell from "../assets/svgs/Bell.svg";
import SamplePic from "../assets/images/sample-profile-pic.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:w-auto w-[90%] mx-auto lg:pt-11 pt-4 mr-14">
      <div className="flex justify-between items-center font-poppins">
        <p className="lg:hidden block text-[20px] font-semibold text-[#FAC1D9]">
          COSYPOS
        </p>
        <span className="lg:flex hidden gap-3.5">
          <NavLink
            to="#"
            className="w-9 h-9 bg-[#292C2D] rounded-full flex justify-center items-center"
          >
            <img src={LeftArrow} alt="LeftArrow" />
          </NavLink>

          <p className="text-[25px] font-medium text-white">Dashboard</p>
        </span>
        <div className="flex items-center md:gap-6 gap-5">
          <div className="flex flex-col items-end mt-1 cursor-pointer">
            <div className="w-2.5 h-2.5 absolute -mt-1 bg-[#FAC1D9] rounded-full text-center">
              <p className="text-[6px] font-normal text-[#333333] pt-[1px]">
                01
              </p>
            </div>
            <img src={Bell} alt="Bell" className="mr-[1px]" />
          </div>
          <span className="h-[22px] border-[0.75px] border-white"></span>
          <span className="border-[1.5px] border-[#FAC1D9] md:w-[37px] md:h-[37px] w-[34px] h-[34px] rounded-full cursor-pointer">
            <img
              src={SamplePic}
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </span>
          <input
            type="checkbox"
            id="checkbox"
            className="lg:hidden block cursor-pointer"
          />
          <label
            for="checkbox"
            class="toggle"
            className="lg:hidden block cursor-pointer"
          >
            <div class="bars" id="bar1"></div>
            <div class="bars" id="bar2"></div>
            <div class="bars" id="bar3"></div>
          </label>
        </div>
      </div>
      <span className="lg:hidden flex gap-2.5 mt-4">
        <NavLink
          to="#"
          className="w-[22px] h-[22px] bg-[#292C2D] rounded-full flex justify-center items-center"
        >
          <img
            src={LeftArrow}
            alt="LeftArrow"
            className="w-[7.5px] h-[6.75px]"
          />
        </NavLink>

        <p className="text-[16px] font-medium text-white">Dashboard</p>
      </span>
    </div>
  );
};

export default Header;
