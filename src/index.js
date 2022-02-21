import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./demos/Counter";
import AxiosGet from "./demos/AxiosGet";
import Map from "./demos/basics/Map";
import Basics from "./nav/Basics";
import Arrays from "./demos/basics/arrays/Arrays";
import ReactNav from "./nav/ReactNav";
import UserInput from "./demos/react/UserInput";
import StateDemo from "./demos/react/StateDemo";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="react" element={<ReactNav />}>
          <Route path="state" element={<StateDemo />} />
          <Route path="counter" element={<Counter />} />
          <Route path="axios_get" element={<AxiosGet />} />
          <Route path="user_input" element={<UserInput />} />
        </Route>
        <Route path="basics" element={<Basics />}>
          <Route path="arrays" element={<Arrays />} />
          <Route path="map" element={<Map />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
