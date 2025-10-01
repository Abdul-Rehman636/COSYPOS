import { useState } from "react";
import Actions from "../components/inventory/Actions";
import ProductFilters from "../components/inventory/ProductFilters";
import ProductTable from "../components/inventory/ProductTable";
import DeletePopup from "../components/popups/DeletePopup";
import AddInventory from "../components/modals/AddInventory";

const Inventory = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(0);

  return (
    <div className="lg:pl-[166px] max-[1024px]:w-[90%] mx-auto lg:mt-14 md:mt-9 mt-7 lg:mr-14 mb-8">
      <Actions setShowModal={setShowModal} />
      <div className="flex lg:flex-row flex-col lg:gap-4 gap-5 md:mt-7 mt-5">
        <div className="lg:min-w-[381px] lg:w-[33.3%] w-full">
          <ProductFilters />
        </div>
        <button
          className="md:hidden block w-fit text-[16px] font-medium text-[#333333] bg-[#FAC1D9] px-[22px] py-[14px] rounded-[7.5px] cursor-pointer mx-auto"
          onClick={() => setShowModal(true)}
        >
          Add New Inventory
        </button>
        <div className="lg:w-[72%] w-full lg:max-h-[863px] md:max-h-[560px] max-h-[465px] overflow-y-auto no-scrollbar overflow-x-auto rounded-tl-[10px] rounded-tr-[10px] md:mt-0 mt-5">
          <ProductTable
            setShowModal={setShowModal}
            setDeleteItem={setDeleteItem}
            setShowDeletePopup={setShowDeletePopup}
          />
        </div>
      </div>
      <div
        className={`${
          showModal ? "block" : "hidden"
        } w-full fixed left-0 top-0 lg:z-50`}
      >
        <AddInventory setShowModal={setShowModal} />
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

export default Inventory;
