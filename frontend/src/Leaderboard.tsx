import { useEffect, useState } from "react";
import { TestData1, TestData2 } from "./TestData";
import { Bar, Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS } from "chart.js/auto";
import Header from "./Header";
import SidebarButton from "./SidebarButton";
import "./Leaderboard.css";
import GenerateLeaderboardData from "./GenerateLeaderboardData";

type Struct = {
  day: number;
  novapes: number;
};

ChartJS.register(CategoryScale);

function GetStreak(indata: any[]) {
  let nums = indata.map((data: { novapes: any }) => data.novapes);
  let currentStreak = 1;
  let maxStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 1;
    }
  }

  return maxStreak;
}

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<Struct[][]>([[], []]);
  const [testData, setTestData] = useState({
    labels: leaderboardData[0].map((data) => data.day),
    datasets: [
      {
        label: "Person 1 : Number of Tokes",
        data: leaderboardData[0].map((data) => data.novapes),
        backgroundColor: ["rgba(54,162,235,0.2)"],
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 2,
      },
      {
        label: "Person 2 : Number of Tokes",
        data: leaderboardData[1].map((data) => data.novapes),
        backgroundColor: ["rgba(213,87,247,0.2)"],
        borderColor: "rgba(213,87,247,1)",
        borderWidth: 2,
      },
    ],
  });
  const [dataSets, setDataSets] = useState<Struct[][]>([[], []]);
  const [testStreaks, setTestStreaks] = useState([0, 0]);
  const [streakData, setStreakData] = useState({
    labels: ["Person 1", "Person 2"],
    datasets: [
      {
        label: "Longest Streak",
        data: testStreaks,
        backgroundColor: ["rgba(54,162,235,0.2)", "rgba(213,87,247,0.2)"],
        borderColor: ["rgba(54,162,235,1)", "rgba(213,87,247,1)"],
        borderWidth: 2,
      },
    ],
  });

  const data = [
    {rank: 1, username: "bla", name: "Harry", tokes: 10, avgTime: 10, money: 10 },
    {rank: 2, username: "bla", name: "Bagga", tokes: 10, avgTime: 10, money: 10 },
    {rank: 3, username: "bla", name: "Lewis", tokes: 10, avgTime: 10, money: 10 },
    {rank: 4, username: "bla", name: "Lewis", tokes: 10, avgTime: 10, money: 10 },
    {rank: 5, username: "bla", name: "Lewis", tokes: 10, avgTime: 10, money: 10 },
    {rank: 6, username: "bla", name: "Lewis", tokes: 10, avgTime: 10, money: 10 },
    {rank: 7, username: "bla", name: "Lewis", tokes: 10, avgTime: 10, money: 10 },
    {rank: 8, username: "bla", name: "Lewis", tokes: 10, avgTime: 10, money: 10 },
    {rank: 9, username: "bla", name: "Lewis", tokes: 10, avgTime: 10, money: 10 },
    {rank: 10, username: "bla", name: "Lewis", tokes: 10, avgTime: 10, money: 10 },

]

  useEffect(() => {
    const fetchData = async () => {
      const objs = await GenerateLeaderboardData();
      setLeaderboardData(objs);
      setTestData({
        labels: leaderboardData[0].map((data) => data.day),
        datasets: [
          {
            label: "Person 1 : Number of Tokes",
            data: leaderboardData[0].map((data) => data.novapes),
            backgroundColor: ["rgba(54,162,235,0.2)"],
            borderColor: "rgba(54,162,235,1)",
            borderWidth: 2,
          },
          {
            label: "Person 2 : Number of Tokes",
            data: leaderboardData[1].map((data) => data.novapes),
            backgroundColor: ["rgba(213,87,247,0.2)"],
            borderColor: "rgba(213,87,247,1)",
            borderWidth: 2,
          },
        ],
      });
      setDataSets([leaderboardData[0], leaderboardData[1]]);

      let streaks = [];
      for (let i = 0; i < testStreaks.length; i++) {
        streaks.push(GetStreak(dataSets[i]));
      }
      setTestStreaks(streaks);
      setStreakData({
        labels: ["Person 1", "Person 2"],
        datasets: [
          {
            label: "Longest Streak",
            data: testStreaks,
            backgroundColor: ["rgba(54,162,235,0.2)", "rgba(213,87,247,0.2)"],
            borderColor: ["rgba(54,162,235,1)", "rgba(213,87,247,1)"],
            borderWidth: 2,
          },
        ],
      });
    };

    fetchData();
  }, [dataSets, leaderboardData, testStreaks]);

  const chartOptions = {
    maintainAspectRatio: true, // Ensure the aspect ratio is maintained
    aspectRatio: 1.8, // Adjust this value to control the chart's height indirectly. Lower values make
    scales: {
      x: {
        ticks: {
          color: "white", // Sets the color of the grid lines for the X-axis
        },
        grid: {
          color: "rgba(107,107,107,0.5)",
        },
      },
      y: {
        ticks: {
          color: "white", // Sets the color of the grid lines for the Y-axis
        },
        grid: {
          color: "rgba(107,107,107,0.5)",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          // This more for additional styling if you want to adjust legend labels
          color: "white", // Example to set legend label color
        },
      },
    },
  };

  return (
    <>
      <header className="lead-header">
        <Header />
        <SidebarButton />
      </header>
      <body>
        <div className="Leaderboard">
          <h1>Leaderboard</h1>
          <div className="linechart">
            <Line data={testData} options={chartOptions} />
          </div>
          <div className="barchart">
            <Bar data={streakData} options={chartOptions} />
          </div>
          <div className="leaderboardTable">
            <table>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Number of Tokes</th>
                    <th>Mean Toke Times</th>
                    <th>Total Money Spent</th>

                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.rank}</td>
                            <td>{val.username}</td>
                            <td>{val.name}</td>
                            <td>{val.tokes}</td>
                            <td>{val.avgTime}</td>
                            <td>{val.money}</td>
                        </tr>
                    )
                })}
            </table>
          </div>
        </div>
      </body>
    </>
  );
}

export default Leaderboard;
