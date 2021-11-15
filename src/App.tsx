import React, { Fragment } from "react";
import "./style/scss/main.scss";
import Home from "./Components/Home";

const App = () => {
  return (
    <Fragment>
      <h1 className="calculator__heading">
        Spli <br />
        tter
      </h1>

      <Home />
    </Fragment>
  );
};

export default App;
