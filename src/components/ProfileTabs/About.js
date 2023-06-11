import React from "react";
import classes from "./About.module.css";
import { AiFillEdit } from "react-icons/ai";

const About = (props) => {
  return (
    <>
      <div className={classes.about}>
        <p>IZTECH CENG</p>
        <p>IFL'17</p>
        <p>Karşıyaka İzmir</p>
        <div className={classes.interest}>
          {/* <button className={classes.changeBtn}>
            <AiFillEdit size={20} />
            CHANGE
          </button> */}
          <div className={classes.categoryContainer}></div>
        </div>
      </div>
    </>
  );
};

export default About;
