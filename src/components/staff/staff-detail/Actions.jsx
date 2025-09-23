const Actions = () => {
  return (
    <div className="font-poppins w-full">
      <p className="text-[25px] font-medium text-white">Profile Image</p>
      <img
        src="https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064973.jpg?t=st=1757701837~exp=1757705437~hmac=c2c136e25b368e8ab6093c398382f2da15257bca6ce89ca7b59986eba66cdbff&w=2000"
        alt=""
        className="w-full h-[333px] object-cover rounded-[10px] mt-6"
      />
      <button
        className="text-[14px] font-normal
       text-[#FAC1D9] underline cursor-pointer my-4"
      >
        Change Profile Picture
      </button>
      <div className="flex flex-col gap-4">
        <button className="text-[16px] font-medium text-[#333333] cursor-pointer w-full py-5 bg-[#FAC1D9] rounded-[10px]">
          Edit profile
        </button>
        <button className="text-[16px] font-medium text-[#FAC1D9] cursor-pointer w-full py-5 border border-[#FAC1D9] bg-transparent rounded-[10px]">
          Delete profile
        </button>
      </div>
    </div>
  );
};

export default Actions;
