import "./styles.css";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div className="App">
      <h1>Hooks- useReducer Example</h1>
      {state.count}

      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click here
      </button>
      {state.showText && <p> This is a text</p>}
    </div>
  );
}
