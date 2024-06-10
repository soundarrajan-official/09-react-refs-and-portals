import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

// let timer

const TimerChallenge = ({title, targetTime}) => {
    const timer = useRef()
    const dialogRef = useRef()

    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)

    // let timer;

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            dialogRef.current.showModal()
        }, targetTime * 1000);

        setTimerStarted(true)
    }

    const handleStop = () => {
        clearTimeout(timer.current)
    }

    return (
        <>
            <ResultModal ref={dialogRef} result="lost" targetTime={targetTime}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ?? "s"}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge;
