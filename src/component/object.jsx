import React, { useState } from "react"
 import "../component.css";

const Object = () => {
    const[Details,setDetails]=useState({
        brand:"BMW",
        color:"red",
        year:"2000"
    })
    function handleClick(){
        setDetails((prevalue)=>{
            return{ ...prevalue,color:"blue"}
            
        })
        
    
    }
  return (
    <div>
      <h1>My Car brand is {Details.brand}</h1>
      <p>it is {Details.color} color and {Details.year} model</p>
      <button className="btn" onClick={handleClick}>Change color to blue</button>

    </div>
  )
}

export default Object;
