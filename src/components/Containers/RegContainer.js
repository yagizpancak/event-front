import React from "react";
import classes from "./RegContainer.module.css";

const RegContainer = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default RegContainer;
