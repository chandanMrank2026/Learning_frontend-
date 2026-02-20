import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // 1️No dependency array
  useEffect(() => {
    console.log("1️ Runs on EVERY render chandan");
  });

  // 2️Empty dependency array
  useEffect(() => {
    console.log("2️ Runs ONLY on mount chandan2");
  }, []);

  // 3️ With dependency
  useEffect(() => {
    console.log("3️ Runs when count changes chandan3");
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Example;