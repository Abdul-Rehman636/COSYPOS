import { useState } from "react";
import Categories from "../components/menu/Categories";
import AllMenu from "../components/menu/AllMenu";
import Table from "../components/menu/Table";
import AddNewCategory from "../components/modals/AddNewCategory";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Normal Menu");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col lg:pt-[42px] md:pt-9 pt-7">
      <div className="lg:pl-[166px] mb-4.5">
        <Categories />
        <AllMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setShowModal={setShowModal}
        />
      </div>
      <div className="lg:pl-[123px] overflow-x-auto w-full">
        <Table activeTab={activeTab} />
      </div>
      <button className="lg:hidden block text-[12px] font-medium text-[#333333] font-poppins px-[22px] py-[14px] bg-[#FAC1D9] rounded-[7.5px] my-8 mx-auto">
        Add New items
      </button>
      <div
        className={`${
          showModal ? "block" : "hidden"
        } w-full fixed left-0 lg:top-0 top-28 lg:z-50`}
      >
        <AddNewCategory />
      </div>
    </div>
  );
};

export default Menu;
