const ForgotPassword = () => {
  return (
    <div className="w-full min-h-screen h-auto flex justify-center items-center lg:pb-32 md:pb-20 pb-8">
      <div className="w-full font-poppins flex flex-col justify-center items-center">
        <h2 className="text-[55px] font-semibold text-[#FAC1D9] md:mt-[68px] mt-6">
          COSYPOS
        </h2>

        <div className="md:h-[631px] h-auto lg:w-[758px] md:w-[680px] w-[90%] bg-[#292C2D] lg:rounded-[50px] md:rounded-3xl rounded-2xl flex flex-col justify-center items-center lg:mt-24 md:mt-16 mt-8 md:py-0 py-8">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h3 className="text-[45px] font-medium text-white text-center max-[768px]:leading-[60px]">
              Forgot your password?
            </h3>
            <p className="text-[16px] font-normal text-white md:mt-8 mt-5 text-center md:w-[360px] w-[90%]">
              Please enter your username or email to recover your password
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

              <div className="md:mt-10 mt-8 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#FAC1D9] hover:opacity-85 md:py-5 py-3 md:px-[50px] px-8 md:rounded-[10px] rounded-lg text-[16px] font-medium text-[#333333] cursor-pointer"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>

          <p className="text-[16px] font-normal text-white text-center md:mb-10 md:mt-0 sm:mt-12 mt-10">
            Back to{" "}
            <a
              href="/login"
              className="font-medium text-[#FAC1D9] underline hover:no-underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
