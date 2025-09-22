import { useState } from "react";
import StaffActions from "../components/staff/StaffActions";
import Table from "../components/staff/Table";
import DeletePopup from "../components/popups/DeletePopup";
import AddStaff from "../components/modals/AddStaff";

const StaffManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteItem, setDeleteItem] = useState(0);

  return (
    <div>
      <StaffActions setShowModal={setShowModal} />
      <Table
        setShowModal={setShowModal}
        setShowDeletePopup={setShowDeletePopup}
        setDeleteItem={setDeleteItem}
      />
      <div
        className={`${
          showModal ? "block" : "hidden"
        } w-full fixed left-0 top-0 lg:z-50 z-40`}
      >
        <AddStaff setShowModal={setShowModal} />
      </div>
      <div
        className={`${
          showDeletePopup ? "block" : "hidden"
        } w-full fixed left-0 top-0 lg:z-50`}
      >
        <DeletePopup
          name="staff person"
          deleteItem={deleteItem}
          setDeletePopup={setShowDeletePopup}
        />
      </div>
    </div>
  );
};

export default StaffManagement;
