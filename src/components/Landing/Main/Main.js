import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

import "./Main.css";

function Main() {
  let history = useHistory();

  function handleClick() {
    history.push("/create");
  }

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-description">
          <h1>Create your Professional Resume</h1>

          <Button onClick={handleClick}>Create Resume</Button>
        </div>
      </div>
    </div>
  );
}

export default Main;
