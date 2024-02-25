// ChartComponent.js
import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS } from "chart.js/auto";
import "./Stats.css";
import Header from "./Header";
import SidebarButton from "./SidebarButton";
ChartJS.register(CategoryScale);

const ChartComponent = () => {
  const chartData1 = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "# of Tokes",
        data: [12, 19, 3, 5, 2, 3, 15],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const chartData2 = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Nicotine Intake (mg)",
        data: [5, 0, 1, 2, 8, 7, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    layout: {
      padding: {
        top: 25, // Adjust the top padding as needed
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // Font color for x-axis labels
        },
      },
      y: {
        ticks: {
          color: "white", // Font color for y-axis labels
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", // Font color for dataset labels
        },
      },
    },
  };

  return (
    <div>
      <header>
        <Header />
        <SidebarButton />
      </header>
      <body>
        <main>
          <div className="analyse">
            <div className="longestStreak">
              <div className="info">
                <h3>Longest Streak</h3>
                <h2>4 days</h2>
              </div>
            </div>
            <div className="money">
              <h3>Money Spent</h3>
              <h2> £348</h2>
            </div>
            <div>
              <div className="lastToke">
                <h3> Time Since Last Toke</h3>
                <h2>4 Hours 43 Minutes</h2>
              </div>
            </div>
            <div>
              <div className="currentStreak">
                <h3>Current Streak</h3>
                <h2>1 Day</h2>
              </div>
            </div>
            <div>
              <div className="todayTokes">
                <h3> Tokes Today</h3>
                <h2> 5 Tokes</h2>
              </div>
            </div>
            <div>
              <div className="weekTokes">
                <h3> Tokes This Week</h3>
                <h2> 45 Tokes</h2>
              </div>
            </div>
          </div>
        </main>
        <div className="chart-container">
          <Bar data={chartData1} options={chartOptions} />
          <Bar data={chartData2} options={chartOptions} />
        </div>
      </body>
    </div>
  );
};

export default ChartComponent;
