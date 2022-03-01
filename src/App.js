import "./styles.css";
import { useState } from "react";

export default function App() {
  const [color, setColour] = useState("");

  function changeToRed() {
    if (color == "red") {
      setColour("transparent");
    } else {
      setColour("red");
    }
    console.log("red");
  }

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <h1>This is a paragraph</h1>
      <h2>
        Take a paragraph with text. Have a toggle button. Change the color of
        the background between red and transparent on every button click.
      </h2>
      <div>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={changeToRed}
        >
          Red
        </button>
      </div>
    </div>
  );
}
