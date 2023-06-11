import React, { useEffect } from "react";
import classes from "./Home.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import Footer from "../components/General/Footer";
import EventCard from "../components/Cards/HomeCards/EventCard";
import basketball from "../assets/basketball.png";
import tennis from "../assets/tennis.png";
import football from "../assets/football.png";

import concer from "../assets/concer.png";
import { IoMdNotifications, IoMdSearch } from "react-icons/io";
import { getReduxState } from "../store";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   fetch("http://3.68.226.30:8080/api/v1/users/following-list/testUser", {
  //     method: "GET",
  //     // headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => console.log(data));
  // }, []);

  console.log(getReduxState().user.username);
  return (
    <>
      <div className={classes.home}>
        <div className={classes.header}>
          <span className={classes.location}>
            Mert Karaca <AiFillCaretDown />
          </span>
          {/* <span className={classes.location}>Urla, İzmir</span> */}
          <IoMdNotifications
            size={30}
            color="white"
            className={classes.notification}
          />
          <IoMdSearch
            size={30}
            color="white"
            className={classes.search}
            onClick={() => {
              navigate("/UserSearch");
            }}
          />
          <div className={classes.categoryContainer}>
            <input
              type="text"
              className={classes.input}
              placeholder="Search Event.."
            />
          </div>
        </div>

        <h4 className={classes.upcomingEvents}>Upcoming Events</h4>
        <EventCard
          image={concer}
          date="14 DEC-TUE 4:00 PM"
          name="Tarkan Konseri"
        />
        <EventCard
          image={basketball}
          date="5ST JAN-SAT 7:30 AM"
          name="Basketbol Maçı"
        />
        <EventCard
          image={football}
          date="17ST MAY-SAT 11:00 PM"
          name="Halı Saha (14 kişi)"
        />
        <EventCard image={tennis} date="3ST JUNE-SAT 00:00 PM" name="Tenis" />
      </div>
      <Footer page="home" />
    </>
  );
};

export default Home;
