const Actions = () => {
  return (
    <div className="flex justify-between items-center font-poppins">
      <p className="md:text-[16px] text-[14px] font-light text-white flex items-center gap-2">
        <p className="md:text-[25px] text-[20px] font-medium">150</p>total
        products
      </p>
      <button className="md:block hidden text-[16px] font-medium text-[#333333] bg-[#FAC1D9] px-[22px] py-[14px] rounded-[7.5px] cursor-pointer">
        Add New Inventory
      </button>
    </div>
  );
};

export default Actions;
