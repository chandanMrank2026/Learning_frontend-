import React from "react";
import { useState } from "react";  //this program made you to get scolding from the lead he said you cant become developer

const Login = () => {
//keep tracking of the input values

 const[value,setValue] =useState("");
const[submitted,setSubmitted]=useState();
//handling the submit
  function handleClick() {
    setSubmitted(value);
  }

  return (
    //these is what renders on the page
    <div>
      <label htmlFor="">userName</label>
      <input 
      type="text"
      value={value}
      onChange={(e)=>{setValue(e.target.value)}}
       />
      <br />
      <br />
      <div> 
        <button onClick={handleClick}>SUBMIT</button>
      </div>
      <p>my name is {submitted}</p>
     
    </div>
  );
};
export default Login;
