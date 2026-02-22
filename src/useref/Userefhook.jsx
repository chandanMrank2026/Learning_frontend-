import { useRef } from "react";

const Useref = () => {
  const refer = useRef(null);
  console.log(refer);

  function handleClick() {
    const val = refer.current.focus();
    console.log(val);
  }
  return (
    <div>
      <input type="text" ref={refer} />
      <button onClick={handleClick}>CLick me</button>
    </div>
  );
};

export default Useref;
