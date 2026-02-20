import { createContext, useContext, useState } from "react";
export const Mycontext = createContext();
import ComponentB from "./componentB";
const ComponentA = () => {
  const [name, setName] = useState("chandan");
  console.log("wrrretete");
  return (
    <Mycontext.Provider value={name}>
      <h1>am main component</h1>
     
      <ComponentB />
    </Mycontext.Provider>
  );
};

export default ComponentA;
