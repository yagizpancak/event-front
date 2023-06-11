import React from "react";
import classes from "./RegistrationsContainer.module.css";
import { useNavigate } from "react-router-dom";

const RegistrationsContainer = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default RegistrationsContainer;
