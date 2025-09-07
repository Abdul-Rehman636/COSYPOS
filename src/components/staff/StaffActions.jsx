const StaffActions = () => {
  const options = [
    {
      value: "id",
      name: "ID",
    },
    {
      value: "name",
      name: "Name (A-Z)",
    },
    {
      value: "email",
      name: "Email",
    },
  ];

  return (
    <div className="lg:mr-14 lg:ml-auto mx-auto max-[1024px]:w-[90%] flex md:flex-row flex-col justify-between items-center max-[640px]:gap-5 font-poppins lg:mt-14 md:mt-9 mt-7 lg:pl-[166px]">
      <p className="max-[640px]:w-full text-[25px] font-medium text-white">
        Staff <span>(22)</span>
      </p>
      <div className="flex gap-5">
        <button className="text-[16px] font-medium text-[#333333] bg-[#FAC1D9] px-[22px] py-[14px] rounded-[7.5px] cursor-pointer focus:outline-none">
          Add Staff
        </button>
        <div className="relative inline-block">
          <select
            name="sortBy"
            id="sortBy"
            className="min-w-[143px] text-[14px] font-light text-white bg-[#3D4142] px-5 py-4 rounded-[10px] cursor-pointer focus:outline-none appearance-none"
          >
            <option value="">Sort by</option>
            {options.map((option) => {
              return <option value={option.value}>{option.name}</option>;
            })}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
            className="absolute right-3 top-1/2 -translate-1/2"
          >
            <path
              d="M1.25 0.875L5.5 5.125L9.75 0.875"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StaffActions;
