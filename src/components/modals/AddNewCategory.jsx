import { useRef, useState } from "react";
import RightArrow from "../../assets/svgs/Left-Arrow.svg";
import imageCover from "../../assets/images/image-cover.png";

const AddNewCategory = ({ setShowModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const imageRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleUploadFile = () => {
    imageRef.current.click();
  };

  return (
    <div className="w-full min-h-screen h-full lg:bg-[#00000099] flex justify-end font-poppins">
      <div className="lg:w-[640px] w-full min-h-screen bg-[#292C2D] lg:rounded-tl-[30px] lg:rounded-bl-[30px] md:pt-16 pt-12">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center border-b border-[#5E5E5E] md:pb-6 pb-4">
            <p className="md:text-[25px] text-[20px] font-medium text-white">
              Add New Category
            </p>
            <span
              className="w-9 h-9 bg-[#3D4142] rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <img src={RightArrow} alt="RightArrow" className="rotate-180" />
            </span>
          </div>
          <form action="" className="overflow-y-auto h-[76vh] no-scrollbar">
            <div className="md:w-[240px] w-full flex flex-col items-center mt-6">
              <div className="h-[217px] bg-[#383C3D] rounded-[10px] flex flex-col justify-center items-center">
                <img
                  src={selectedFile || imageCover}
                  alt="imageCover"
                  className="max-h-[148px] lg:w-[232px]"
                />
                {!selectedFile ? (
                  <p className="md:block hidden text-[14px] font-normal text-[#777979]">
                    Select icon here
                  </p>
                ) : (
                  ""
                )}
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/svg+xml"
                ref={imageRef}
                onChange={handleFileChange}
              />
              <button
                type="button"
                className="text-[14px] font-normal text-[#FAC1D9] underline mt-4 cursor-pointer"
                onClick={handleUploadFile}
              >
                Change Icon
              </button>
            </div>
            <div className="flex flex-col mt-6">
              <label
                htmlFor="categoryName"
                className="text-[16px] font-medium text-white"
              >
                Category Name
              </label>
              <input
                type="text"
                placeholder="Enter Category name"
                className="bg-[#3D4142] text-[16px] font-light text-[#777979] rounded-[10px] md:px-[26px] px-5 py-5 mt-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="" className="text-[16px] font-medium text-white">
                Select Menu
              </label>
              <div className="bg-[#3D4142] rounded-[10px] md:px-[26px] px-5 mt-2">
                <select
                  name="menu"
                  className="w-full text-[16px] font-light text-[#777979] py-5 outline-none cursor-pointer"
                >
                  <option value="">Select menu</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="" className="text-[16px] font-medium text-white">
                Description
              </label>
              <textarea
                name="description"
                placeholder="write your category description here"
                className="min-h-[206px] bg-[#3D4142] text-[16px] font-light text-[#777979] rounded-[10px] md:px-[26px] px-5 py-5 mt-2 outline-none"
              ></textarea>
            </div>
            <div className="flex justify-end mt-9">
              <div className="flex items-center gap-8">
                <button className="text-[16px] font-medium text-white underline cursor-pointer">
                  Cancel
                </button>
                <button className="bg-[#FAC1D9] text-[16px] font-medium text-[#333333] px-[50px] py-[20px] rounded-[10px] cursor-pointer">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategory;
