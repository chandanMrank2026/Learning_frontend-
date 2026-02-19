import React , {useState} from 'react'



const Conter = () => {
    const [value,setvalue]=useState(0);
    console.log(value);

      function handleClick(){
        setvalue(value+1);
      }
     
  return (
    <div>
    <h1>my value is {value}</h1> 
     <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default Conter




