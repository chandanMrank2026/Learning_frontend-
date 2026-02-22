import { useState } from "react";

const IncreseDecrese = () => {
  /////ststes   here we use onlu one state because both are dependendent on each other so one stste only //
  const [value, setValue] = useState(0);

  ///functions
  function handleIncrease() {
    setValue((value) => value + 1);
  }
  function handleDecrease() {
    setValue((value) => value - 1);
  }

  ///return

  return (
    <div>
      <div>
        <p>count {value}</p>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
};
export default IncreseDecrese;
