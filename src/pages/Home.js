import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import Footer from "../components/General/Footer";
import EventCard from "../components/Cards/HomeCards/EventCard";
import { IoMdNotifications, IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../Api";
import Modal from "../components/Modals/Modal";
import Popup from "../components/Modals/Feedback/Popup";

const Home = (props) => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [events, setEvents] = useState([]);
  const [feed, setFeed] = useState([]);
  const loggedUser = localStorage.getItem("username"); // getReduxState().user.username;

  const height = window.innerHeight;

  const baseUrl = getBaseUrl();

  useEffect(() => {
    if (input && input.length) {
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
        setFeed(data.events);
      });
  }, []);

  return (
    <>
      <div className={classes.home} style={{ height: height }}>
        {props.pop && <Popup title={props.title} message={props.message} />}
        <div className={classes.header}>
          <span className={classes.username}>
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

        <h4 className={classes.upcomingEvents}>Events Feed</h4>

        <div className={classes.eventContainer}>
          {events.map((item) => {
            console.log("ITEM", item);
            return (
              <EventCard
                imageUrl={item.imageUrl}
                name={item.name}
                date={item.startDate}
                key={item.uuid}
                uuid={item.uuid}
              />
            );
          })}
          {input === "" &&
            feed.map((item) => {
              return (
                <EventCard
                  imageUrl={item.imageUrl}
                  name={item.name}
                  date={item.startDate}
                  key={item.uuid}
                  uuid={item.uuid}
                />
              );
            })}
        </div>
        {/* <EventCard image={tennis} date="3ST JUNE-SAT 00:00 PM" name="Tenis" /> */}
      </div>
      <Footer page="home" />
    </>
  );
};

export default Home;
