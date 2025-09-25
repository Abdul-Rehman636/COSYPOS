import { useState } from "react";
import AddStaff from "../components/modals/AddStaff";
import Actions from "../components/staff/staff-detail/Actions";
import Details from "../components/staff/staff-detail/Details";
import DeletePopup from "../components/popups/DeletePopup";

const StaffDetail = () => {
  const [deleteItem, setDeleteItem] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [mode, setMode] = useState("add");

  const personalDetails = [
    {
      name: "Full Name",
      value: "Watson Joyce",
    },
    {
      name: "Email",
      value: "watsonjoyce112@gmail.com",
    },
    {
      name: "Phone number",
      value: "+1 (123) 123 4654",
    },
    {
      name: "Date of birth",
      value: "01-Jan-1983",
    },
    {
      name: "Address",
      value: "House # 114 Street 123 USA, Chicago",
    },
  ];

  const jobDetails = [
    {
      name: "Role",
      value: "Manager",
    },
    {
      name: "Salary",
      value: "$2200.00",
    },
    {
      name: "Shift start timing",
      value: "9am",
    },
    {
      name: "Shift end timing",
      value: "6pm",
    },
  ];

  return (
    <div className="lg:w-auto w-[90%] lg:mx-0 mx-auto lg:pl-[166px] lg:mr-14 bg-[#111315] lg:mt-14 md:mt-9 mt-7 lg:mb-5 md:mb-10 mb-7">
      <div className="flex lg:flex-row flex-col lg:gap-10 md:gap-8 gap-7">
        <div className="lg:min-w-[367px] lg:w-[26.5%] w-full">
          <Actions
            setMode={setMode}
            setShowModal={setShowModal}
            setDeleteItem={setDeleteItem}
            setShowDeletePopup={setShowDeletePopup}
          />
        </div>
        <div
          className="flex flex-col lg:gap-11 md:gap-8 gap-7"
          style={{ width: "-webkit-fill-available" }}
        >
          <Details type="Personal" data={personalDetails} />
          <Details type="Job" data={jobDetails} />
        </div>
      </div>
      <div
        className={`${
          showModal ? "block" : "hidden"
        } w-full fixed left-0 top-0 lg:z-50 z-40`}
      >
        <AddStaff mode={mode} setShowModal={setShowModal} />
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

export default StaffDetail;
