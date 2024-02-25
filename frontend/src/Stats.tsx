// ChartComponent.js
import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS } from "chart.js/auto";
import "./Stats.css";
import Header from "./Header";
import SidebarButton from "./SidebarButton";
import { useEffect, useState } from "react";
import axios from "axios";
ChartJS.register(CategoryScale);

function secondsToHoursAndMinutesFormatted(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  return `${hours} Hours and ${minutes} Minutes`;
}

const ChartComponent = () => {
  const [latestTokeDateTimeSecs, setLatestTokeDateTimeSecs] = useState(0);
  const [clusteredDailyVapes, setClusteredDailyVapes] = useState([
    0, 0, 0, 0, 0, 0, 0,
  ]);

  const [numberOfTokesDaily, setNumberOfTokesDaily] = useState(0);
  const [numberOfTokesWeekly, setNumberOfTokesWeekly] = useState(0);
  const [numberOfTokesTotal, setNumberOfTokesTotal] = useState(0);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchLatestTokeDateTime = async () => {
      await axios
        .get(`http://localhost:3000/api/vapes/user/${userId}/last`)
        .then((res: any) => {
          const currentTime = new Date();
          const lastTokeTime = new Date(res.data.date);

          const timeDifferenceMs =
            currentTime.getTime() - lastTokeTime.getTime();
          const timeDifferenceSeconds = Math.abs(timeDifferenceMs / 1000);

          console.log("Time difference in seconds:", timeDifferenceSeconds);
          setLatestTokeDateTimeSecs(timeDifferenceSeconds);
        });
    };

    const fetchClusteredDailyVapes = async () => {
      await axios
        .get(`http://localhost:3000/api/vapes/user/${userId}/clustered-daily`)
        .then((res: any) => {
          const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          const dataArray = days.map((day) => res.data[day]);
          setClusteredDailyVapes(dataArray);
        });
    };

    const fetchNumberOfTokesDaily = async () => {
      await axios
        .get(`http://localhost:3000/api/vapes/user/${userId}/daily`)
        .then((res: any) => {
          setNumberOfTokesDaily(res.data.length);
        });
    };
    const fetchNumberOfTokesWeekly = async () => {
      await axios
        .get(`http://localhost:3000/api/vapes/user/${userId}/weekly`)
        .then((res: any) => {
          setNumberOfTokesWeekly(res.data.length);
        });
    };
    const fetchNumberOfTokesTotal = async () => {
      await axios
        .get(`http://localhost:3000/api/vapes/user/${userId}`)
        .then((res: any) => {
          setNumberOfTokesTotal(res.data.length);
        });
    };

    fetchLatestTokeDateTime();

    fetchClusteredDailyVapes();

    fetchNumberOfTokesDaily();
    fetchNumberOfTokesWeekly();
    fetchNumberOfTokesTotal();
  }, []);

  const chartData1 = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "# of Tokes",
        data: clusteredDailyVapes,
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
        backgroundColor: ["rgba(213,87,247,0.2)"],
        borderColor: ["rgba(213,87,247,1)"],
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
    <>
      <header>
        <Header />
        <SidebarButton />
      </header>
      <main style={{ marginTop: "8rem" }}>
      <h1>Statistics</h1>
        <div className="analyse">
          <div className="money">
            <h3>Money Spent</h3>
            <h2>£{(Math.ceil(0.85 * numberOfTokesTotal) / 100).toFixed(2)}</h2>
          </div>
          <div className="lastToke">
            <h3>Time Since Last Toke</h3>
            <h2>{secondsToHoursAndMinutesFormatted(latestTokeDateTimeSecs)}</h2>
          </div>
          <div className="longestStreak">
            <h3>Longest Streak</h3>
            <h2>4 days</h2>
          </div>
          <div className="todayTokes">
            <h3>Tokes Today</h3>
            <h2>{numberOfTokesDaily}</h2>
          </div>
          <div className="weekTokes">
            <h3>Tokes This Week</h3>
            <h2>{numberOfTokesWeekly}</h2>
          </div>
          <div className="totalTokes">
            <h3>Total Tokes</h3>
            <h2>{numberOfTokesTotal}</h2>
          </div>
        </div>
      </main>
      <div className="chart-container">
        <Bar data={chartData1} options={chartOptions} />
        <Bar data={chartData2} options={chartOptions} />
      </div>
    </>
  );
};

export default ChartComponent;
