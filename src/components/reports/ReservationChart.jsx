import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ReservationChart = () => {
  const reservationData = {
    confirmed: 50,
    awaited: 45,
    cancelled: 50,
    failed: 45,
  };

  const total =
    reservationData.confirmed +
    reservationData.awaited +
    reservationData.cancelled +
    reservationData.failed;

  const data = {
    labels: ["Confirmed", "Awaited", "Cancelled", "Failed"],
    datasets: [
      {
        data: [
          reservationData.confirmed,
          reservationData.awaited,
          reservationData.cancelled,
          reservationData.failed,
        ],
        backgroundColor: ["#F8C0D7", "#E191B5", "#C95D8A", "#FF1F7D"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#3D4142",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        borderColor: "#5E5E5E",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed}`;
          },
        },
      },
    },
  };

  const legendItems = [
    { label: "Confirmed", color: "#F8C0D7", value: reservationData.confirmed },
    { label: "Awaited", color: "#E191B5", value: reservationData.awaited },
    { label: "Cancelled", color: "#C95D8A", value: reservationData.cancelled },
    { label: "Failed", color: "#FF1F7D", value: reservationData.failed },
  ];

  return (
    <div className="lg:w-fit w-full sm:h-[380px] bg-[#292C2D] rounded-[10px] md:p-8 p-6 font-poppins">
      <h2 className="text-white text-[24px] font-medium mb-5">
        Total Reservation
      </h2>
      <div className="flex sm:flex-row flex-col max-[1024px]:justify-between items-center lg:gap-14 max-[640px]:gap-7">
        <div className="relative w-[240px] h-[240px]">
          <Doughnut data={data} options={options} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-[20px] font-light mb-1">Total</p>
            <p className="text-white text-[48px] font-semibold">{total}</p>
          </div>
        </div>

        <div className="sm:w-fit w-full flex flex-col gap-6">
          {legendItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-7 h-2.5 rounded-[100px]"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-white text-[16px] font-normal">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReservationChart;
