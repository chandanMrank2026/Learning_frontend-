import { useEffect,useState } from "react";

//useEffect without dependencies
const Rerender = () => {
  const [count, setcount] = useState(0);
    //callack function,[]//
  useEffect(() => {
    document.title = `${count} new message!`;
    
  },);
  return (
    <>
      <div>useEffects</div>
      <button onClick={
        ()=>setcount(count+1)

      }>Increase</button>
    </>
  );
};

export default Rerender;
