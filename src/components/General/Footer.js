import React from "react";
import classes from "./Footer.module.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillCalendarWeekFill, BsPlusCircle } from "react-icons/bs";
import { FaCompass } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.footer}>
      <span className={classes.addBtn}>
        <BsPlusCircle
          size={30}
          color="white"
          onClick={() => {
            navigate("/CreateEvent");
          }}
        />
      </span>
      <AiFillHome
        onClick={() => navigate("/Homee")}
        size={30}
        color={props.page === "home" ? "#ea9b6b" : "gray"}
      />
      <BsFillCalendarWeekFill
        onClick={() => navigate("/Events")}
        size={30}
        color={props.page === "events" ? "#ea9b6b" : "gray"}
      />
      <FaCompass
        onClick={() => navigate("/PostFeed")}
        size={30}
        color={props.page === "posts" ? "#ea9b6b" : "gray"}
      />
      <CgProfile
        onClick={() => navigate("/Profile")}
        size={30}
        color={props.page === "profile" ? "#ea9b6b" : "gray"}
      />
    </div>
  );
};

export default Footer;
