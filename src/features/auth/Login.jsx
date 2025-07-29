import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen h-auto flex justify-center items-center lg:pb-32 md:pb-20 pb-8">
      <div className="w-full font-poppins flex flex-col justify-center items-center">
        <h2 className="text-[55px] font-semibold text-[#FAC1D9] md:mt-[68px] mt-6">
          COSYPOS
        </h2>

        <div className="md:h-[697px] h-auto lg:w-[758px] md:w-[680px] w-[90%] bg-[#292C2D] lg:rounded-[50px] md:rounded-3xl rounded-2xl flex flex-col justify-center items-center lg:mt-24 md:mt-16 mt-8 md:py-0 py-8">
          <h3 className="text-[45px] font-medium text-white text-center">
            Login!
          </h3>
          <p className="text-[16px] font-normal text-white md:mt-8 mt-5 text-center md:w-auto w-[90%]">
            Please enter your credentials below to continue
          </p>

          <form action="" className="md:w-[69%] w-[90%] md:mt-14 mt-12">
            <div className="flex flex-col">
              <label className="text-[16px] font-medium text-white">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="bg-[#3D4142] md:rounded-[10px] rounded-lg md:h-[65px] h-[58px] md:pl-6 pl-5 md:mt-3 mt-2.5 md:text-lg text-[16px] font-light text-[#777979] placeholder:text-[#777979] focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col md:mt-9 mt-5">
              <label className="text-[16px] font-medium text-white">
                Password
              </label>
              <div className="flex justify-between items-center bg-[#3D4142] md:rounded-[10px] rounded-lg md:h-[65px] h-[58px] md:px-6 px-5 md:mt-3.5 mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="md:text-lg text-[16px] font-light text-[#777979] placeholder:text-[#777979] focus:outline-none md:w-[92%] w-[86%]"
                  required
                />

                <span className="cursor-pointer" onClick={toggleShowPassword}>
                  {showPassword ? (
                    <IoMdEye color="#A7A7A7" className="w-[21px] h-[18px]" />
                  ) : (
                    <IoMdEyeOff color="#A7A7A7" className="w-[21px] h-[18px]" />
                  )}
                </span>
              </div>
            </div>

            <div className="md:mt-8 mt-9 flex justify-between items-center">
              <div className="flex items-center md:gap-3 gap-2">
                <input
                  type="checkbox"
                  className="appearance-none md:w-6 w-4 md:h-6 h-4 border border-[#FAC1D9] rounded-xs cursor-pointer checked:accent-[#FAC1D9] checked:appearance-auto"
                />
                <p className="md:text-lg text-[14px] font-normal text-[#FAC1D9]">
                  Remember me
                </p>
              </div>

              <a
                href="#"
                className="md:text-lg text-[14px] font-normal text-[#FAC1D9] underline hover:no-underline"
              >
                Forgot Password?
              </a>
            </div>

            <div className="md:mt-10 mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-[#FAC1D9] hover:opacity-85 md:py-5 py-3 md:px-[50px] px-8 md:rounded-[10px] rounded-lg text-[16px] font-medium text-[#333333] cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
