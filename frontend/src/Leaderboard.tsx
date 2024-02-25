import { useState } from "react"
import { TestData1, TestData2 } from "./TestData"
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS} from "chart.js/auto";
import { Chart } from "react-chartjs-2";

ChartJS.register(CategoryScale)

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
  
    return (
      <>
        <div className="Leaderboard">
            <h1>LeaderBoard</h1>
            <div style={{ width: 700}}>
                <Line data={testData} />
            </div>
        </div>
      </>
    )
  }
  
  export default Leaderboard