import classes from "./Modal.module.css";
import { Fragment } from "react";

const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={classes.modal}>
        <div className={classes.modalTitle}>Registrations</div>
        <div>{props.children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
