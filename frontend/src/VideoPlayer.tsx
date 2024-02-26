import "./VideoPlayer.css"; // Import your CSS file for styling
import Video from "./assets/QwitVideo.mp4"; // Import your video file

import React, { useState, useEffect } from "react";
import "./CircularTimer.css"; // Import your CSS file for styling

interface CircularTimerProps {
  duration: number;
}

const VideoPlayer: React.FC<CircularTimerProps> = ({ duration }) => {
  const [secondsLeft, setSecondsLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft(secondsLeft - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  // Calculate the dash array and dash offset for the SVG circle
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dashArray = circumference;
  const dashOffset = ((duration - secondsLeft) / duration) * circumference;

  return (
    <div className="circular-timer">
      <svg viewBox="0 0 100 100">
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
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
