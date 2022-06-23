import { useRef } from "react";
import Input from "./components/Input";

function App() {
  const inputRef = useRef();
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>focus</button>
      <button onClick={() => inputRef.current.clear()}>clear</button>
    </div>
  );
}

export default App;
