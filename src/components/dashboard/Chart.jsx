import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import OverviewData from "../../assets/data/OverviewChart.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OverviewChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        top: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1E1E1E",
        borderColor: "#FAC1D9",
        borderWidth: 1,
        titleColor: "#fff",
        bodyColor: "#fff",
        displayColors: false,
        padding: 10,
        enabled: true,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
      axis: "x",
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
          color: "rgba(255,255,255,0.1)",
        },
        ticks: {
          color: "#D1D1D1",
          padding: 16,
          font: {
            size: 12,
            family: "Poppins",
          },
        },
      },
      y: {
        position: "right",
        grid: {
          color: "rgba(255,255,255,0.1)",
          drawTicks: false,
        },
        ticks: {
          color: "#D1D1D1",
          padding: 12,
          font: {
            size: 12,
            family: "Poppins",
          },
          callback: function (value) {
            if (value >= 1000) {
              return value / 1000 + "k";
            }
            return value;
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.45,
      },
      point: {
        radius: 0,
        hoverRadius: 5,
        hoverBorderWidth: 2,
        hoverBorderColor: "#fff",
        backgroundColor: "#FAC1D9",
      },
    },
  };

  const data = {
    labels: OverviewData.labels,
    datasets: [
      {
        label: "Sales",
        data: OverviewData.datasets[0].data,
        borderWidth: window.screen.width <= 640 ? 1.43 : 4,
        borderColor: "rgba(250, 193, 217, 1)",
        pointBackgroundColor: "rgba(250, 193, 217, 1)",
        fill: false,
        tension: 0.45,
      },
      {
        label: "Revenue",
        data: OverviewData.datasets[1].data,
        borderWidth: window.screen.width <= 640 ? 0.66 : 2,
        borderColor: "rgba(217, 217, 217, 1)",
        pointBackgroundColor: "rgba(217, 217, 217, 1)",
        fill: false,
        tension: 0,
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto xl:overflow-x-hidden">
        <div className="xl:min-w-full min-w-[640px] md:h-[360px] h-[240px]">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default OverviewChart;
