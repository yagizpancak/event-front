import React from "react";
import classes from "./RegisteredUsers.module.css";
import Footer from "../components/General/Footer";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import UserCard from "../components/Cards/RegisteredUsersCards/UserCard";
import { getBaseUrl } from "../Api";
import { useState } from "react";

const RegisteredsUsers = (props) => {
  const { uuid } = useParams();
  const baseUrl = getBaseUrl();
  const [users, setUsers] = useState([]);
  const [chaneCounter, setChangeCounter] = useState(0);

  function changed() {
    setChangeCounter((prev) => {
      return prev + 1;
    });
  }

  useEffect(() => {
    fetch(`${baseUrl}/event-registration/registered-users/${uuid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.usersInfo);
      });
  }, [chaneCounter]);

  const navigate = useNavigate();
  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <BsArrowLeft
          size={25}
          className={classes.backBtn}
          onClick={() => navigate("/Events")}
        />
        <span className={classes.pageTitle}>Registered Users</span>
      </div>
      {users.map((item) => {
        return (
          <UserCard
            onChange={changed}
            uuid={uuid}
            username={item.username}
            imgUrl={item.imageUrl}
          />
        );
      })}

      <Footer page="events" />
    </div>
  );
};

export default RegisteredsUsers;
