import Actions from "../components/reports/Actions";
import ReservationChart from "../components/reports/ReservationChart";

const Reports = () => {
  return (
    <div className="lg:pl-[166px] max-[1024px]:w-[90%] mx-auto lg:mt-14 md:mt-9 mt-7 lg:mr-14">
      <Actions />
      <div className="mt-9">
        <ReservationChart />
      </div>
    </div>
  );
};

export default Reports;
