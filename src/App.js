import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [milliseconds, setMilliseconds] = useState("000");
  const [period, setPeriod] = useState("24H");

  const handleClick = () => {
    const now = new Date();
    setHours(String(now.getHours()).padStart(2, "0"));
    setMinutes(String(now.getMinutes()).padStart(2, "0"));
    setSeconds(String(now.getSeconds()).padStart(2, "0"));
    setMilliseconds(String(now.getMilliseconds()).padStart(3, "0"));
    setPeriod(String("24H").padStart(2, "0"));
  }

  const changeFormat = () => {
    const now = new Date();
    let hours = now.getHours();
    if (hours >= 12) {
      setPeriod(String("PM").padStart(2, "0"));
      if(hours > 12) {
        hours = hours -12;
      }
    } else if (hours < 12) {
      setPeriod(String("AM").padStart(2, "0"));
      if (hours === 0) {
        hours = 12;
      }
    }
    setHours(String(hours).padStart(2, "0"));
    setMinutes(String(now.getMinutes()).padStart(2, "0"));
    setSeconds(String(now.getSeconds()).padStart(2, "0"));
    setMilliseconds(String(now.getMilliseconds()).padStart(3, "0"));
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex content-align-center align-items-center vh-100">
          <div className="col-lg-2"></div>
          <div className="col-lg">
            <div className="card p-4 shadow-lg">
              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-outline-dark"
                    style={{ width: "100%" }}
                    onClick={handleClick}
                  >
                    Click to Get 24H Time
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-dark"
                    style={{ width: "100%" }}
                    onClick={changeFormat}
                  >
                    Click to Get 12H Time
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="display-1">
                    {hours}:{minutes}:{seconds}:{milliseconds} <span className="fst-italic fs-5">{period}</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
