import React from "react";
import Conter from "./component/conter";
import Object from "./component/object";
import Rerender from "./component/useEffect/useEffects1"
import Example from "./component/useEffect/useEffect2";
import ComponentA from "./useContext/componentA";




function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Conter />
      <Object />
      <Rerender/>
      <Example/>
      <ComponentA/>
    </div>
  );
}

export default App;
