import React from "react";
import classes from "./About.module.css";
import { AiFillEdit } from "react-icons/ai";

const About = (props) => {
  return (
    <>
      <div className={classes.about}>
        {props.bio}
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
