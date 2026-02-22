import { useState } from "react";

export default function Toggemessage() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={handleShow}>{show ? "HIDE MSG" : "SHOW MSG"};</button>
      {show && <p>welcome Chandan</p>}
    </div>
  );
}
