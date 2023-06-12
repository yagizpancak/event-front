import React, { useEffect, useState } from "react";
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
import { useNavigate, useSearchParams } from "react-router-dom";
import { getBaseUrl } from "../Api";

const Home = (props) => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [events, setEvents] = useState([]);
  const [feed, setFeed] = useState([]);
  const loggedUser = getReduxState().user.username;

  const baseUrl = getBaseUrl();

  useEffect(() => {
    if (input && input.length >= 2) {
      fetch(`${baseUrl}/event-management/get-current-events/by-name/${input}`, {
        method: "GET",
        // headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.content !== undefined) {
            setEvents(data.content);
          }
          console.log(data);
        });
    } else {
      setEvents([]);
    }
  }, [input]);

  useEffect(() => {
    fetch(`${baseUrl}/event-feed/${loggedUser}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "İSTEK ATILAN URL = ",
          `${baseUrl}/event-feed/${loggedUser}`
        );
        console.log("FEED: ", data);
      });
  }, []);

  return (
    <>
      <div className={classes.home}>
        <div className={classes.header}>
          <span className={classes.location}>
            {loggedUser} <AiFillCaretDown />
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
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
        </div>

        <h4 className={classes.upcomingEvents}>Upcoming Events</h4>

        {events.map((item) => {
          return (
            <EventCard
              imageUrl={item.imageUrl}
              name={item.name}
              date={item.startDate}
            />
          );
        })}

        {/* <EventCard image={tennis} date="3ST JUNE-SAT 00:00 PM" name="Tenis" /> */}
      </div>
      <Footer page="home" />
    </>
  );
};

export default Home;
