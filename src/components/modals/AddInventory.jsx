import { useRef, useState } from "react";
import RightArrow from "../../assets/svgs/Left-Arrow.svg";
import imageCover from "../../assets/images/image-cover.png";

const AddInventory = ({ setShowModal, CategoryData = [], mode }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selected, setSelected] = useState("Yes");
  const imageRef = useRef(null);

  const QuantityData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
              {mode === "edit" ? "Edit" : "Add New"} Inventory
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
              <div className="lg:w-auto w-full h-[217px] bg-[#383C3D] rounded-[10px] flex flex-col justify-center items-center">
                <img
                  id="image"
                  name="image"
                  src={selectedFile || imageCover}
                  alt="imageCover"
                  className="h-[217px] lg:w-[232px] w-full rounded-[10px] object-cover"
                />
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/png+jpg"
                ref={imageRef}
                onChange={handleFileChange}
              />
              <button
                type="button"
                className="text-[14px] font-normal text-[#FAC1D9] underline mt-4 cursor-pointer"
                onClick={handleUploadFile}
              >
                Change Image
              </button>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-5">
              <div className="sm:w-[50%] w-full flex flex-col mt-6">
                <label
                  htmlFor="name"
                  className="text-[16px] font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter inventory name"
                  className="bg-[#3D4142] text-[16px] font-light text-[#777979] rounded-[10px] md:px-[26px] px-5 py-5 mt-2 focus:outline-none"
                />
              </div>
              <div className="sm:w-[50%] w-full flex flex-col mt-6">
                <label
                  htmlFor=""
                  className="text-[16px] font-medium text-white"
                >
                  Category
                </label>
                <div className="bg-[#3D4142] rounded-[10px] md:px-[26px] px-5 mt-2">
                  <select
                    name="category"
                    className="w-full text-[16px] font-light text-[#777979] py-5 outline-none cursor-pointer"
                  >
                    <option value="">Select menu</option>
                    {CategoryData.map((category, index) => {
                      return (
                        <option key={index} value={category.name.toLowerCase()}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-5">
              <div className="sm:w-[50%] w-full flex flex-col mt-6">
                <label
                  htmlFor=""
                  className="text-[16px] font-medium text-white"
                >
                  Quantity
                </label>
                <div className="bg-[#3D4142] rounded-[10px] md:px-[26px] px-5 mt-2">
                  <select
                    name="quantity"
                    className="w-full text-[16px] font-light text-[#777979] py-5 outline-none cursor-pointer"
                  >
                    <option value="">Select quantity</option>
                    {QuantityData.map((quantity, index) => {
                      return (
                        <option key={index} value={quantity}>
                          {quantity}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="sm:w-[50%] w-full flex flex-col mt-6">
                <label
                  htmlFor=""
                  className="text-[16px] font-medium text-white"
                >
                  Stock
                </label>
                <div className="bg-[#3D4142] rounded-[10px] md:px-[26px] px-5 mt-2">
                  <select
                    name="stock"
                    className="w-full text-[16px] font-light text-[#777979] py-5 outline-none cursor-pointer"
                  >
                    <option value="">Select stock</option>
                    <option value="inStock">In stock</option>
                    <option value="outOfStock">Out of stock</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="" className="text-[16px] font-medium text-white">
                Status
              </label>
              <div className="bg-[#3D4142] rounded-[10px] md:px-[26px] px-5 mt-2">
                <select
                  name="status"
                  className="w-full text-[16px] font-light text-[#777979] py-5 outline-none cursor-pointer"
                >
                  <option value="">Select status</option>
                  <option value="active">Active</option>
                  <option value="inActive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <label
                htmlFor="price"
                className="text-[16px] font-medium text-white"
              >
                Price
              </label>
              <input
                type="number"
                placeholder="Enter inventory price"
                className="bg-[#3D4142] text-[16px] font-light text-[#777979] rounded-[10px] md:px-[26px] px-5 py-5 mt-2 focus:outline-none"
              />
            </div>
            <div className="w-full max-w-md mt-6">
              <div className="flex items-center gap-5">
                <p className="text-[16px] font-medium text-white">Perishable</p>
                <div className="flex items-center gap-8">
                  <div
                    className="flex items-center gap-2.5 cursor-pointer"
                    onClick={() => setSelected("Yes")}
                  >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full border-2 transition-colors border-[#FAC1D9]" />

                      {selected === "Yes" && (
                        <div className="absolute w-3.5 h-3.5 bg-[#FAC1D9] rounded-full" />
                      )}
                    </div>
                    <label
                      htmlFor="yes"
                      className="text-[16px] font-normal text-[#777979] cursor-pointer select-none"
                    >
                      Yes
                    </label>
                  </div>

                  <div
                    className="flex items-center gap-2.5 cursor-pointer"
                    onClick={() => setSelected("No")}
                  >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full border-2 transition-colors border-[#FAC1D9]" />

                      {selected === "No" && (
                        <div className="absolute w-3.5 h-3.5 bg-[#FAC1D9] rounded-full" />
                      )}
                    </div>
                    <label
                      htmlFor="no"
                      className="text-[16px] font-normal text-[#777979] cursor-pointer select-none"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-7">
                <input
                  type="radio"
                  name="Perishable"
                  value="Yes"
                  checked={selected === "Yes"}
                  onChange={() => setSelected("Yes")}
                  className="hidden"
                />
                <input
                  type="radio"
                  name="Perishable"
                  value="No"
                  checked={selected === "No"}
                  onChange={() => setSelected("No")}
                  className="hidden"
                />
              </div>
            </div>
            <div className="flex justify-end mt-9">
              <div className="flex items-center gap-8">
                <button
                  type="button"
                  className="text-[16px] font-medium text-white underline cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#FAC1D9] text-[16px] font-medium text-[#333333] px-[50px] py-[20px] rounded-[10px] cursor-pointer"
                >
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

export default AddInventory;
