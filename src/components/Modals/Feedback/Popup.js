import classes from "./Popup.module.css";
import { Fragment } from "react";

const Popup = (props) => {
  return (
    <Fragment>
      <div className={classes.modal}>
        <div className={classes.modalTitle}>{props.title}</div>
        <div className={classes.message}>{props.message}</div>
      </div>
    </Fragment>
  );
};

export default Popup;
