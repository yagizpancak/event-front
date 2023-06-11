import React from "react";
import classes from "./OrgContainer.module.css";

const OrgContainer = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default OrgContainer;
