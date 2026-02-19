import { useEffect } from "react";

//useEffect without dependencies
const hook2 = () => {
  const [count, Setcount] = useState("0");
 
  useEffect(() => {
    document.title = `${count} new message!`;
  });
  return (
    <>
      <div>useEffects</div>
      <button onClick={
        ()=>Setcount(count+1)

      }>Increase</button>
    </>
  );
};

export default hook2;
