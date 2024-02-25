import { useEffect, useState } from "react"


function Timer(initialTime: number) {

        const [time, setTime] = useState(initialTime);
        const [isRunning, setIsRunning] = useState(false);
        
        useEffect(() => {
            let interval: number | undefined;
            if (isRunning) {
              interval = setInterval(() => {
                setTime((prevTime: number) => (prevTime > 0 ? prevTime - 1 : 0));
              }, 1000);
            }
            return () => clearInterval(interval);
          }, [isRunning]);
        
          const handlePausePlay = () => {
            setIsRunning(prevIsRunning => !prevIsRunning);
          };
        
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

        
    return (
        <div>
            <h1>Timer: {formatTime(time)}</h1>
            <button onClick={handlePausePlay}>{isRunning ? 'Pause' : 'Play'}</button>
        </div>
    );
};

export default Timer;