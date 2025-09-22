import { useRef, useState } from "react";
import RightArrow from "../../assets/svgs/Left-Arrow.svg";
import imageCover from "../../assets/images/image-cover.png";
import RoleOptions from "../../assets/data/Roles.json";

const AddStaff = ({ setShowModal }) => {
  const imageRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    email: "",
    role: "",
    phoneNumber: "",
    salary: "",
    dateOfBirth: "",
    startTiming: "",
    endTiming: "",
    address: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedFile(url);
      setFormData((prev) => ({
        ...prev,
        image: url,
      }));
    }
  };

  const handleUploadFile = () => {
    imageRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full min-h-screen h-full lg:bg-[#00000099] flex justify-end font-poppins">
      <div className="lg:w-[640px] w-full min-h-screen bg-[#292C2D] lg:rounded-tl-[30px] lg:rounded-bl-[30px] md:pt-16 pt-12">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center border-b border-[#5E5E5E] md:pb-6 pb-4">
            <p className="md:text-[25px] text-[20px] font-medium text-white">
              Add Staff
            </p>
            <span
              className="w-9 h-9 bg-[#3D4142] rounded-full flex justify-center items-center cursor-pointer"
              onClick={handleClose}
            >
              <img src={RightArrow} alt="RightArrow" className="rotate-180" />
            </span>
          </div>
          <form
            method="POST"
            onSubmit={handleSubmit}
            className="overflow-y-auto h-[76vh] no-scrollbar"
          >
            <div className="w-[240px] lg:mx-0 mx-auto flex flex-col items-center mt-6">
              <div className="lg:w-auto w-full h-[217px] bg-[#383C3D] rounded-[10px] flex flex-col justify-center items-center">
                <img
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  src={selectedFile || imageCover}
                  alt="imageCover"
                  className="h-[217px] lg:w-[232px] w-full rounded-[10px] object-cover"
                />
              </div>
              <input
                type="file"
                className="hidden"
                ref={imageRef}
                onChange={handleFileChange}
                required
              />
              <button
                type="button"
                className="text-[14px] font-normal text-[#FAC1D9] underline mt-4 cursor-pointer"
                onClick={handleUploadFile}
              >
                Change Image
              </button>
            </div>
            <div className="mt-6 flex sm:flex-row flex-col sm:gap-5 gap-6">
              <div className="flex flex-col sm:w-[50%] w-full">
                <label
                  htmlFor="fullName"
                  className="text-[16px] font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="bg-[#3D4142] text-[16px] font-light text-[#777979] rounded-[10px] md:px-[26px] px-5 py-5 mt-2 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col sm:w-[50%] w-full">
                <label
                  htmlFor="email"
                  className="text-[16px] font-medium text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="bg-[#3D4142] text-[16px] font-light text-[#777979] rounded-[10px] md:px-[26px] px-5 py-5 mt-2 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="mt-6 flex sm:flex-row flex-col sm:gap-5 gap-6">
              <div className="flex flex-col sm:w-[50%] w-full">
                <label
                  htmlFor="role"
                  className="text-[16px] font-medium text-white"
                >
                  Role
                </label>
                <div className="bg-[#3D4142] rounded-[10px] md:px-[26px] px-5 mt-2">
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full text-[16px] font-light text-[#777979] py-5 outline-none cursor-pointer"
                    required
                  >
                    <option value="">Select role</option>
                    {RoleOptions.map((category, index) => {
                      return (
                        <option key={index} value={category.name.toLowerCase()}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="flex flex-col sm:w-[50%] w-full">
                <label
                  htmlFor="phoneNumber"
                  className="text-[16px] font-medium text-white"
                >
                  Phone number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="bg-[#3D4142] text-[16px] font-light text-[#777979] rounded-[10px] md:px-[26px] px-5 py-5 mt-2 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="mt-6 flex sm:flex-row flex-col sm:gap-5 gap-6">
              <div className="flex flex-col sm:w-[50%] w-full">
                <label
                  htmlFor="salary"
                  className="text-[16px] font-medium text-white"
                >
                  Salary
                </label>
                <input
                  id="salary"
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="Enter Salary"
                  className="bg-[#3D4142] text-[16px] font-light text-[#777979] rounded-[10px] md:px-[26px] px-5 py-5 mt-2 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col sm:w-[50%] w-full">
                <label
                  htmlFor="dateOfBirth"
                  className="text-[16px] font-medium text-white"
                >
                  Date of birth
                </label>
                <input
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  placeholder="Enter date of birth"
                  className="bg-[#3D4142] text-[16px] font-light text-[#777979] rounded-[10px] md:pl-[26px] md:pr-4 pl-5 pr-3.5 py-5 mt-2 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="mt-6 flex sm:flex-row flex-col sm:gap-5 gap-6">
              <div className="flex flex-col sm:w-[50%] w-full">
                <label
                  htmlFor="startTiming"
                  className="text-[16px] font-medium text-white"
                >
                  Shift start timing
                </label>
                <div className="flex justify-between items-center bg-[#3D4142] rounded-[10px] md:pl-[26px] md:pr-4 pl-5 pr-3.5 py-5 mt-2">
                  <input
                    id="startTiming"
                    type="text"
                    name="startTiming"
                    value={formData.startTiming}
                    onChange={handleChange}
                    placeholder="Enter start timing"
                    className="text-[16px] font-light text-[#777979] focus:outline-none"
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9.0013 0.667969C7.90695 0.667969 6.82332 0.883517 5.81227 1.30231C4.80123 1.7211 3.88257 2.33492 3.10875 3.10875C1.54594 4.67155 0.667969 6.79116 0.667969 9.0013C0.667969 11.2114 1.54594 13.3311 3.10875 14.8939C3.88257 15.6677 4.80123 16.2815 5.81227 16.7003C6.82332 17.1191 7.90695 17.3346 9.0013 17.3346C11.2114 17.3346 13.3311 16.4567 14.8939 14.8939C16.4567 13.3311 17.3346 11.2114 17.3346 9.0013C17.3346 7.90695 17.1191 6.82332 16.7003 5.81227C16.2815 4.80123 15.6677 3.88257 14.8939 3.10875C14.12 2.33492 13.2014 1.7211 12.1903 1.30231C11.1793 0.883517 10.0957 0.667969 9.0013 0.667969ZM12.5013 12.5013L8.16797 9.83463V4.83464H9.41797V9.16797L13.168 11.418L12.5013 12.5013Z"
                      fill="#777979"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col sm:w-[50%] w-full">
                <label
                  htmlFor="endTiming"
                  className="text-[16px] font-medium text-white"
                >
                  Shift end timing
                </label>
                <div className="flex justify-between items-center bg-[#3D4142] rounded-[10px] md:pl-[26px] md:pr-4 px-5 py-5 mt-2">
                  <input
                    id="endTiming"
                    type="text"
                    name="endTiming"
                    value={formData.endTiming}
                    onChange={handleChange}
                    placeholder="Enter end timing"
                    className="text-[16px] font-light text-[#777979] focus:outline-none"
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9.0013 0.667969C7.90695 0.667969 6.82332 0.883517 5.81227 1.30231C4.80123 1.7211 3.88257 2.33492 3.10875 3.10875C1.54594 4.67155 0.667969 6.79116 0.667969 9.0013C0.667969 11.2114 1.54594 13.3311 3.10875 14.8939C3.88257 15.6677 4.80123 16.2815 5.81227 16.7003C6.82332 17.1191 7.90695 17.3346 9.0013 17.3346C11.2114 17.3346 13.3311 16.4567 14.8939 14.8939C16.4567 13.3311 17.3346 11.2114 17.3346 9.0013C17.3346 7.90695 17.1191 6.82332 16.7003 5.81227C16.2815 4.80123 15.6677 3.88257 14.8939 3.10875C14.12 2.33492 13.2014 1.7211 12.1903 1.30231C11.1793 0.883517 10.0957 0.667969 9.0013 0.667969ZM12.5013 12.5013L8.16797 9.83463V4.83464H9.41797V9.16797L13.168 11.418L12.5013 12.5013Z"
                      fill="#777979"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <label
                htmlFor="address"
                className="text-[16px] font-medium text-white"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="bg-[#3D4142] text-[16px] font-light text-[#777979] rounded-[10px] md:px-[26px] px-5 py-5 mt-2 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col mt-6">
              <label
                htmlFor="details"
                className="text-[16px] font-medium text-white"
              >
                Additional details
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Enter additional detials"
                className="min-h-[130px] bg-[#3D4142] text-[16px] font-light text-[#777979] rounded-[10px] md:px-[26px] px-5 py-5 mt-2 focus:outline-none"
              ></textarea>
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
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
