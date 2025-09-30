import { useState } from "react";
import Categories from "../components/menu/Categories";
import AllMenu from "../components/menu/AllMenu";
import Table from "../components/menu/Table";
import AddNewCategory from "../components/modals/AddNewCategory";
import AddMenuItem from "../components/modals/AddMenuItem";
import DeletePopup from "../components/popups/DeletePopup";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Normal Menu");
  const [showModal, setShowModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteItem, setDeleteItem] = useState(0);

  const CategoryData = [
    {
      name: "Pizza",
      items: 20,
    },
    {
      name: "Burger",
      items: 15,
    },
    {
      name: "Chicken",
      items: 10,
    },
    {
      name: "Bakery",
      items: 18,
    },
    {
      name: "Beverage",
      items: 12,
    },
    {
      name: "Seafood",
      items: 16,
    },
  ];

  return (
    <div className="flex flex-col lg:pt-[42px] md:pt-9 pt-7">
      <div className="lg:pl-[166px] mb-4.5">
        <Categories setShowModal={setShowModal} CategoryData={CategoryData} />
        <AllMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setShowMenuModal={setShowMenuModal}
        />
      </div>
      <div className="lg:pl-[123px] overflow-x-auto w-full">
        <Table
          activeTab={activeTab}
          setShowDeletePopup={setShowDeletePopup}
          setDeleteItem={setDeleteItem}
        />
      </div>
      <button
        className="lg:hidden block text-[12px] font-medium text-[#333333] font-poppins px-[22px] py-[14px] bg-[#FAC1D9] rounded-[7.5px] my-8 mx-auto"
        onClick={() => setShowMenuModal(true)}
      >
        Add New items
      </button>
      <div
        className={`${
          showModal ? "block" : "hidden"
        } w-full fixed left-0 top-0 lg:z-50`}
      >
        <AddNewCategory
          setShowModal={setShowModal}
          CategoryData={CategoryData}
        />
      </div>
      <div
        className={`${
          showMenuModal ? "block" : "hidden"
        } w-full fixed left-0 top-0 lg:z-50`}
      >
        <AddMenuItem
          setShowMenuModal={setShowMenuModal}
          CategoryData={CategoryData}
        />
      </div>
      <div
        className={`${
          showDeletePopup ? "block" : "hidden"
        } w-full fixed left-0 top-0 lg:z-50`}
      >
        <DeletePopup
          name="product"
          deleteItem={deleteItem}
          setDeletePopup={setShowDeletePopup}
        />
      </div>
    </div>
  );
};

export default Menu;
