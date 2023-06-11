import React, { useEffect, useState } from "react";
import classes from "./UserSearch.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import Footer from "../components/General/Footer";
import EventCard from "../components/Cards/HomeCards/EventCard";
import basketball from "../assets/basketball.png";
import tennis from "../assets/tennis.png";
import football from "../assets/football.png";

import concer from "../assets/concer.png";
import { IoMdSearch } from "react-icons/io";
import { getReduxState } from "../store";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import UserCard from "../components/Cards/SearchCards/UserCard";

const UserSearch = (props) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("ya");

  useEffect(() => {
    fetch(`https://18.196.203.49:8443/api/v1/users/search-user/${input}`, {
      method: "GET",
      // headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  }, [input]);

  console.log(getReduxState().user.username);
  return (
    <>
      <div className={classes.userSearch}>
        <div className={classes.header}>
          <BsArrowLeft
            size={25}
            className={classes.backBtn}
            onClick={() => navigate("/Home")}
            color="white"
          />
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className={classes.searchInp}
          ></input>
          <IoMdSearch
            size={30}
            color="white"
            className={classes.search}
            onClick={() => {
              navigate("/UserSearch");
            }}
          />
        </div>

        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
};

export default UserSearch;
