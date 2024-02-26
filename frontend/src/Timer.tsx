import { useEffect, useState } from "react"
import Confetti from "react-confetti"
import CircularTimer from "./CircularTimer";

type TimerProperties = {
  initialTime: number;
}

function Timer(inp: TimerProperties) {

    //time left in the timer
    const [time, setTime] = useState(inp.initialTime);
    //stores whether the timer is paused or not
    const [isRunning, setIsRunning] = useState(true);
    //used for input of a new time
    const [newTime, setNewTime] = useState('');
    //boolean for whether timer is finished or not
    const [timerReachedZero, setTimerReachedZero] = useState(false);

    //when the timer runs out flip the necessary variables
    useEffect(() => {
      if (time === 0) {
        setTimerReachedZero(true)
        setIsRunning(false)
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
      setIsRunning(prevIsRunning => !prevIsRunning);
    };

    //reset the timer to the new time inputted
    const reset = () => {
      setTime(parseInt(newTime, 10));
      setNewTime('')
      setTimerReachedZero(false)
    }
    
    //format the return string
    const format = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
        
    return (
        <div>
          {timerReachedZero ? (
        <Confetti width={window.innerWidth} height={window.innerHeight} />) : null}
            <h1>Timer: {format(time)}</h1>
            <button onClick={pause}>{isRunning ? 'Pause' : 'Play'}</button>
            <input
              type="number"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              placeholder="Set New Timer" />
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Timer;