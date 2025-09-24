import Actions from "../components/staff/staff-detail/Actions";
import PersonalDetails from "../components/staff/staff-detail/PersonalDetails";

const StaffDetail = () => {
  return (
    <div className="lg:pl-[166px] lg:mr-14 min-h-screen bg-[#111315] mt-14">
      <div className="flex gap-10">
        <div className="min-w-[367px] w-[26.5%]">
          <Actions />
        </div>
        <div style={{ width: "-webkit-fill-available" }}>
          <PersonalDetails />
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
