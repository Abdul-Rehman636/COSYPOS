import { useRef, useState } from "react";

const Actions = ({
  setMode,
  setShowModal,
  setDeleteItem,
  setShowDeletePopup,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const imageRef = useRef(null);

  const image =
    "https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064973.jpg?t=st=1757701837~exp=1757705437~hmac=c2c136e25b368e8ab6093c398382f2da15257bca6ce89ca7b59986eba66cdbff&w=2000";

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleUploadFile = () => {
    imageRef.current.click();
  };

  const handleShowModal = () => {
    setMode("edit");
    setShowModal(true);
  };

  const handleShowPopup = () => {
    setDeleteItem(0);
    setShowDeletePopup(true);
  };

  return (
    <div className="font-poppins w-full">
      <p className="text-[25px] font-medium text-white">Profile Image</p>
      <img
        src={selectedFile || image}
        alt="image"
        className="w-full lg:h-[333px] md:h-[400px] h-[300px] object-cover rounded-[10px] md:mt-6 mt-5 staff-image"
      />
      <input
        type="file"
        className="hidden"
        ref={imageRef}
        onChange={handleFileChange}
      />
      <button
        className="text-[14px] font-normal
       text-[#FAC1D9] underline cursor-pointer my-4"
        onClick={handleUploadFile}
      >
        Change Profile Picture
      </button>
      <div className="flex flex-col gap-4">
        <button
          className="text-[16px] font-medium text-[#333333] cursor-pointer w-full py-5 bg-[#FAC1D9] rounded-[10px]"
          onClick={handleShowModal}
        >
          Edit profile
        </button>
        <button
          className="text-[16px] font-medium text-[#FAC1D9] cursor-pointer w-full py-5 border border-[#FAC1D9] bg-transparent rounded-[10px]"
          onClick={handleShowPopup}
        >
          Delete profile
        </button>
      </div>
    </div>
  );
};

export default Actions;
