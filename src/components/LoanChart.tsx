import React from "react";
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
  TimeScale,
  TimeSeriesScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  TimeSeriesScale
);

const LoanTrendChart = ({ data }: any) => {
  const chartData = {
    labels: data.map((entry: any) => entry.date),
    datasets: [
      {
        label: "Loan offered",
        data: data.map((entry: any) => entry.loansOffered),
        fill: false,
        borderColor: "white",
        tension: 0.1,
      },
    ],
  };

  //   const options = {
  //     scales: {
  //       x: {
  //         type: "time",
  //         time: {
  //           unit: "day",
  //         },
  //       },
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   };

  return (
    <div style={{ width: "280px" }}>
      {" "}
      {/* Adjust width and height as needed */}
      <Line data={chartData} />
    </div>
  );
};

export default LoanTrendChart;
