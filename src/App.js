import React from "react";
import CssBassline from "@material-ui/core/CssBaseline";

import NavBar from "./components/nav-bar.component";
import BmiCalc from './components/bmi-calc.component';

import "./App.css";

function App() {
  return (
    <CssBassline>
      <NavBar />
      <BmiCalc />
    </CssBassline>
  );
}

export default App;
