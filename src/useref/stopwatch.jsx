import React, { useState , useRef } from "react";

const Stopwatch = () => {
    const[timer,setTimer]=useState(0)
    let timeRef =useRef(null)

    function start(){
    timeRef.current = setInterval(()=>{
        setTimer((timer)=>timer+1);
    },1000)
    }

    function restart(){
      stop();
      setTimer(0);
    }

    function stop(){
    clearInterval(timeRef.current)
    timeRef.current=null;
    }
    
  return (
    <div className="maindiv" style={{border:"2px solid black",backgroundColor:"none",height:"100px"}}>
      <div style={{textAlign:"center"}}>
      <p style={{fontFamily:"monospace"}}>STOP WATCH {timer}</p>
      <button onClick={start} style={{padding:"10px"   , backgroundColor:"green",color:"white"}} >start</button>
      <button onClick={restart} style={{padding:"10px" , backgroundColor:"blue" ,color:"white"}}>restart</button>
      <button onClick={stop} style={{padding:"10px"    , backgroundColor:"red"  ,color:"white"}}>stop</button>
      </div>
    </div>
  )
}

export default Stopwatch;