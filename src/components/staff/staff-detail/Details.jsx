const Details = ({ type, data = [] }) => {
  return (
    <div className="font-poppins flex flex-col">
      <p className="text-[25px] font-medium text-white">
        Employee {type} Details
      </p>
      <div className="grid grid-cols-2 xl:gap-8 md:gap-6 gap-5 bg-[#292C2D] md:mt-6 mt-5 rounded-[10px] p-6">
        {data.map((detail, index) => {
          return (
            <div key={index} className="h-fit">
              <p className="text-[14px] font-light text-[#FAC1D9]">
                {detail.name}
              </p>
              <p className="text-[16px] font-light text-white mt-0.5 word-wrap">
                {detail.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
