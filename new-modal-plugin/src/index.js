import React, { useState } from "react";
import { render } from "react-dom";
import { Popup } from "./lib/popup";

const App = () => {
  return <Popup />;
};

render(<App />, document.getElementById("root"));
