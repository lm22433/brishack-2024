import { useEffect, useState } from "react"

type TimerProps = {
  initialTime: number;
}

function Timer(inp: TimerProps) {

    const [time, setTime] = useState(inp.initialTime);
    const [isRunning, setIsRunning] = useState(true);
    const [newTime, setNewTime] = useState('');
        
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

    const handleReset = () => {
      setTime(parseInt(newTime, 10));
      setNewTime('')
    }
        
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
        
    return (
        <div>
            <h1>Timer: {formatTime(time)}</h1>
            <button onClick={handlePausePlay}>{isRunning ? 'Pause' : 'Play'}</button>
            <input
              type="number"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              placeholder="Set New Timer" />
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Timer;