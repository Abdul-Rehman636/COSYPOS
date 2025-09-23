import Actions from "./Actions";
import PersonalDetails from "./PersonalDetails";

const StaffDetail = () => {
  return (
    <div className="min-h-screen bg-[#111315]">
      <div className="pl-[45px] flex gap-10">
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
