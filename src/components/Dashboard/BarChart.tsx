import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [300, 500, 200, 800, 600, 300, 700, 900, 100, 400, 550, 850],
        backgroundColor: "#198754",
        barThickness: 18,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: true,
        text: "Sales Bar Chart",
        font: {
          size: 14,
        },
      },
      tooltip: {
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 14,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
          },
          stepSize: 200,
        },
        max: 1000,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "60vh" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
