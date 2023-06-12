import React from "react";
import classes from "./RegisteredUsers.module.css";
import Footer from "../components/General/Footer";

import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import UserCard from "../components/Cards/RegisteredUsersCards/UserCard";

const RegisteredsUsers = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <BsArrowLeft
          size={25}
          className={classes.backBtn}
          onClick={() => navigate("/Events")}
        />
        <span className={classes.pageTitle}>Organization Details</span>
      </div>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <Footer page="events" />
    </div>
  );
};

export default RegisteredsUsers;
