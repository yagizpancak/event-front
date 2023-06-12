import React, { useEffect, useState } from "react";
import classes from "./UserSearch.module.css";
import { IoMdSearch } from "react-icons/io";
import { getReduxState } from "../store";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import UserCard from "../components/Cards/SearchCards/UserCard";
import { getBaseUrl } from "../Api";

const UserSearch = (props) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  const baseUrl = getBaseUrl();

  useEffect(() => {
    if (input === "") {
      setUsers([]);
    }
    fetch(`${baseUrl}/users/search-user/${input}`, {
      method: "GET",
      // headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.usersInfo !== undefined) {
          setUsers(data.usersInfo);
        }
        console.log(data);
      });
  }, [input]);

  console.log(getReduxState().user.username);
  return (
    <>
      <div className={classes.userSearch}>
        <div className={classes.header}>
          <BsArrowLeft
            size={25}
            className={classes.backBtn}
            onClick={() => navigate("/Homee")}
            color="white"
          />
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className={classes.searchInp}
            placeholder="Search"
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
        {users.map((user) => {
          return (
            <UserCard
              key={user.imageUrl}
              username={user.username}
              imgUrl={`${baseUrl}/users/profile-img/${user.username}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default UserSearch;
