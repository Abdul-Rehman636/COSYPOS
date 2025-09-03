const DeletePopup = ({ name, setDeletePopup, deleteItem }) => {
  console.log(deleteItem);

  return (
    <div className="w-full min-h-screen h-full bg-[#00000099] flex justify-center items-center font-poppins">
      <div className="md:w-[400px] w-[350px] bg-[#292C2D] flex flex-col items-center p-5 rounded-[8px]">
        <p className="md:text-[25px] text-[20px] font-medium text-white text-center">
          Delete Confirmation
        </p>
        <p className="text-[14px] font-normal text-[#777979] text-center mt-2">
          Are you sure , you want to delete this {name}?
        </p>
        <div className="flex gap-5 mt-6">
          <button
            className="bg-transparent text-[16px] font-medium text-white border-2 border-[#333333] px-9 py-4 rounded-[8px] cursor-pointer"
            onClick={() => setDeletePopup(false)}
          >
            Cancel
          </button>
          <button
            className="bg-[#FAC1D9] text-[16px] font-medium text-[#333333] px-9 py-4 rounded-[8px] cursor-pointer"
            onClick={() => setDeletePopup(false)}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
