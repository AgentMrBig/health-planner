import React from "react";
import CssBassline from "@material-ui/core/CssBaseline";

import MainContent from "./components/main-content.component";
import NavBar from "./components/nav-bar.component";


import "./App.css";

function App() {
  return (
    <CssBassline>
      <NavBar />
      <MainContent />
    </CssBassline>
  );
}

export default App;
