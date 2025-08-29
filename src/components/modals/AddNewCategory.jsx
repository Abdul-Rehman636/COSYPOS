import RightArrow from "../../assets/svgs/Left-Arrow.svg";
import imageCover from "../../assets/images/image-cover.png";

const AddNewCategory = ({ setShowModal }) => {
  return (
    <div className="w-full min-h-screen h-full lg:bg-[#00000099] flex justify-end font-poppins">
      <div className="lg:w-[640px] w-full min-h-screen bg-[#292C2D] lg:rounded-tl-[30px] lg:rounded-bl-[30px] pt-16">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center border-b border-[#5E5E5E] pb-6">
            <p className="lg:text-[25px] font-medium text-white">
              Add New Category
            </p>
            <span
              className="w-9 h-9 bg-[#3D4142] rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <img src={RightArrow} alt="RightArrow" className="rotate-180" />
            </span>
          </div>
          <form action="">
            <div className="w-[240px] flex flex-col items-center mt-6">
              <div className="h-[217px] bg-[#383C3D] rounded-[10px] flex flex-col justify-center items-center">
                <img src={imageCover} alt="imageCover" />
                <p className="text-[14px] font-normal text-[#777979] -mt-4">
                  Select icon here
                </p>
              </div>
              <a
                href="#"
                className="text-[14px] font-normal text-[#FAC1D9] underline mt-4"
              >
                Change Icon
              </a>
            </div>
            <div>
              <label htmlFor="">Category Name</label>
              <input type="text" placeholder="Enter Category name" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategory;
