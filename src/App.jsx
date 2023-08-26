import Navbar from "./components/Navbar";
import Main from "./components/Main";
import MyButton from "./components/MyButton";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <Navbar />
      <Main />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
