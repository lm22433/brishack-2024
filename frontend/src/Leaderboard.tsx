import { useState } from "react"
import { TestData1, TestData2 } from "./TestData"
import { Bar, Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS} from "chart.js/auto";

ChartJS.register(CategoryScale)

function GetStreak(indata: any[]) {
    let nums = indata.map((data: { novapes: any; }) => data.novapes)
    let currentStreak = 1;
    let maxStreak = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
        } else {
            currentStreak = 1;
        }
    }

    return maxStreak;
}

function Leaderboard() {
    const [testData, setTestData] = useState({
        labels: TestData1.map((data) => data.day),
        datasets: [
            {
                label: "Person 1 : number of vapes",
                data: TestData1.map((data) => data.novapes),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
            {
                label: "Person 2 : number of vapes",
                data: TestData2.map((data) => data.novapes),
                backgroundColor: [
                    "rgba(123,160,18,1)",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    const [testStreaks, setTestStreaks] = useState([0,0])
    const [dataSets, setDataSets] = useState([TestData1, TestData2])

    for (let i = 0; i < testStreaks.length; i++) {
        testStreaks[i] = GetStreak(dataSets[i])
    }

    const [streakData, setStreakData] = useState({
        labels: ["Person 1", "Person 2"],
        datasets: [
            {
                label: "Best Streaks",
                data: testStreaks,
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "rgba(123,160,18,1)",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
  
    return (
      <>
        <div className="Leaderboard">
            <h1>LeaderBoard</h1>
            <div style={{ width: 700}}>
                <Line data={testData} />
            </div>
            <div style={{ width: 700}}>
                <Bar data={streakData} />
            </div>
        </div>
      </>
    )
  }
  
  export default Leaderboard