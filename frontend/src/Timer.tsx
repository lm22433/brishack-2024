import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Video from "./assets/QwitVideo.mp4"; // Import your video file
import "./CircularTimer.css";

type TimerProperties = {
  initialTime: number;
};

function Timer(inp: TimerProperties) {
  //time left in the timer
  const [time, setTime] = useState(inp.initialTime);
  //stores whether the timer is paused or not
  const [isRunning, setIsRunning] = useState(true);
  //used for input of a new time
  const [newTime, setNewTime] = useState("");
  //boolean for whether timer is finished or not
  const [timerReachedZero, setTimerReachedZero] = useState(false);

  //when the timer runs out flip the necessary variables
  useEffect(() => {
    if (time === 0) {
      setTimerReachedZero(true);
      setIsRunning(false);
    }
  }, [time]);

  //when a second has passed if the timer is running decrement
  //the timer by a second
  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime: number) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  //flip paused or played
  const pause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  //reset the timer to the new time inputted
  const reset = () => {
    setTime(parseInt(newTime, 10));
    setNewTime("");
    setTimerReachedZero(false);
  };

  //format the return string
  const format = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Calculate the dash array and dash offset for the SVG circle
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dashArray = circumference;
  const dashOffset =
    ((inp.initialTime - time) / inp.initialTime) * circumference;

  return (
    <div>
      {timerReachedZero ? (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      ) : null}
      <h1 style={{ marginTop: "1rem" }}>Timer: {format(time)}</h1>
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <svg viewBox="0 0 100 100" className="timer-svg">
          <circle
            className="timer-path"
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#00ff00" // Green color
            strokeWidth="5"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            transform="rotate(-90, 50, 50)"
          />
        </svg>
      </div>
      <button onClick={pause} style={{ margin: 10 }}>
        {isRunning ? "Pause" : "Play"}
      </button>
      <button onClick={reset}>Reset</button>

      <input
        type="number"
        value={newTime}
        onChange={(e) => setNewTime(e.target.value)}
        placeholder="Set New Timer"
        style={{ width: 400 }}
      />
    </div>
  );
}

export default Timer;
