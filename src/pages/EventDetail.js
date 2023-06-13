import classes from "./EventDetail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import date from "../assets/Date.png";
import location from "../assets/Location.png";
import { useEffect, useState } from "react";
import { getBaseUrl } from "../Api";

function EventDetails() {
  const [event, setEvent] = useState();
  const [userData, setUserData] = useState();
  const navigate = useNavigate(); // For navigating between secreens
  const { uuid } = useParams();
  const baseUrl = getBaseUrl();
  const slicedBaseUrl = baseUrl.slice(7);

  const loggedUser = localStorage.getItem("username");

  function registerHandler() {
    fetch(`${baseUrl}/event-registration/add-registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId: uuid,
        username: loggedUser,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  useEffect(() => {
    fetch(`${baseUrl}/event-management/getById/${uuid}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log("eventdata", data);
        console.log(
          "OFF",
          `${baseUrl}/users/profile/${data.organizatorUsername}`
        );
        setEvent(data);
        return data;
      })
      .then((data) => {
        console.log("haaaa", data);
        fetch(`${baseUrl}/users/profile/${data.organizatorUsername}`, {
          method: "GET",
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setUserData(data);
            console.log("USER DATA => ", data);
            console.log(`${baseUrl}${userData && userData.imgUrl.slice(7)}`);
          });
      });
  }, []);
  return (
    <div className={classes.container}>
      <BsArrowLeft
        size={30}
        className={classes.backBtn}
        onClick={() => navigate("/Homee")}
      />
      <img
        src={event && `${baseUrl}${event && event.imageUrl.slice(7)}`}
        className={classes.headerImg}
      ></img>
      <div className={classes.title}>{event && event.name}</div>
      {/* <span className={classes.title2}>İzmir, Alsancak</span> */}
      <div className={classes.dateContainer}>
        <img src={date}></img>
        <div className={classes.textContainer}>
          <span style={{ fontSize: 18 }}>
            {event && event.startDate.replace("T", " ").slice(0, -3)}
          </span>
          {/* <span style={{ color: "gray", fontSize: 15 }}>
            
          </span> */}
        </div>
      </div>
      <div
        className={classes.dateContainer}
        onClick={() => {
          navigate(`/ShowLocation/${event.locationX}/${event.locationY}`);
        }}
      >
        <img src={location}></img>
        <div className={classes.textContainer}>
          <span style={{ fontSize: 18 }}>Show Location</span>
          {/* <span style={{ color: "gray", fontSize: 15 }}>
            Atatürk Caddesi No:312
          </span> */}
        </div>
      </div>
      <div
        className={classes.dateContainer}
        onClick={() => {
          navigate(`/OtherUserPage/${event.organizatorUsername}`);
        }}
      >
        <img
          src={
            userData &&
            event &&
            `${baseUrl}${userData && userData.imgUrl.slice(7)}`
          }
          className={classes.pp}
        ></img>
        <div className={classes.textContainer}>
          <span style={{ fontSize: 18 }}>
            {event && event.organizatorUsername}
          </span>
          <span style={{ color: "gray", fontSize: 15 }}>Organizer</span>
        </div>
        {/* <button className={classes.followBtn}>Follow</button> */}
      </div>
      <div className={classes.aboutTitle}>About Event</div>
      <p className={classes.aboutText}>{event && event.description}</p>

      <button className={classes.registerBtn} onClick={registerHandler}>
        REGISTER
        <BsArrowRight
          style={{ marginLeft: 10 }}
          size={20}
          // onClick={() => navigate("/Homee")}
        />
      </button>
    </div>
  );
}

export default EventDetails;
