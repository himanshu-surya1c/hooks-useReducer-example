import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);
  return (
    <div className="App">
      <h1>Hooks- useReducer Example</h1>
      {count}

      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
          console.log(showText);
        }}
      >
        Click here
      </button>
      {showText && <p> This is a text</p>}
    </div>
  );
}
