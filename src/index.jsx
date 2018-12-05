import React from "react";
import ReactDOM from "react-dom";
import classes from "./index.css";
const MyApp = () => {
  return (
    <div className={classes.App}>
      <span>Welcome To My React App</span>
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
