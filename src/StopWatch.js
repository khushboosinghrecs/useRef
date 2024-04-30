import { useState, useRef } from "react";

export default function  StopWatch() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const inputRef = useRef(null);

    function  handleStart(params) {
        setStartTime(Date.now());
        setNow(Date.now());

        inputRef.current = setInterval(() => {
            setNow(Date.now());
            console.log('Hello')
        }, (10));
    }

    function  handleStop(){
        clearInterval(inputRef.current);
    }

    let secondPassed = 0;
    if(startTime!=null && now!=null){
        console.log(now, startTime, 'hohoehwohweohwoie');
        secondPassed= (now-startTime)/1000;
    }

    return(
        <>
        <h1> time passed: {secondPassed.toFixed(3)}
            </h1>
            <p>{startTime}</p>
            <p>{now}</p>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
        </>
    )
    
}