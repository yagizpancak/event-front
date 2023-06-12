import React, { useState, useRef } from "react";
import classes from "./CreateEvent.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import addPhoto from "../assets/addPhoto.png";
import date from "../assets/Date.png";
import location from "../assets/Location.png";
import { getBaseUrl } from "../Api";
import { getReduxState } from "../store";

const CreateEvent = (props) => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [eventPhoto, setEventPhoto] = useState(addPhoto);
  const [file, setFile] = useState();

  const nameRef = useRef();
  const userLimitRef = useRef();

  const handleFotoYukleme = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setFile(file);
    reader.onload = () => {
      setEventPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const username = getReduxState().user.username;
  const baseUrl = getBaseUrl();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("bastı");

    const name = nameRef.current.value;
    const userLimit = userLimitRef.current.value;

    const imgData = new FormData();
    imgData.append("image", file);

    fetch(`${baseUrl}/event-management`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        locationX: "45.00",
        locationY: "50.00",
        description: description,
        startDate: "2023-06-15 00:00:00",
        userLimit: 10,
        organizatorUsername: username,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const slicedBaseUrl = baseUrl.slice(0, -7);
        fetch(`${slicedBaseUrl}${data.imageUrl}`, {
          method: "POST",
          body: imgData,
        }).then((res) => console.log(res));
      })
      .then((res) => {
        if (res.status === 404 || res.status === 401 || res.status === 400) {
          const error = new Error("Username or password is wrong.");
          throw error;
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/Home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.profile}>
      <div className={classes.header}>
        <BsArrowLeft
          size={25}
          className={classes.backBtn}
          onClick={() => navigate("/Home")}
        />
        <span className={classes.pageTitle}>Create Event</span>
      </div>
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="file-input" className={classes.label}>
          <img className={classes.img} src={eventPhoto}></img>
          <input
            id="file-input"
            type="file"
            className={classes.imgInput}
            onChange={handleFotoYukleme}
          />
        </label>
        <input
          type="text"
          className={classes.input}
          placeholder="Event Name"
          ref={nameRef}
        />
        <input
          type="text"
          className={classes.input}
          placeholder="User Limit"
          ref={userLimitRef}
        />
        <div className={classes.card}>
          <img src={date} className={classes.img2} />
          <input type="date" className={classes.dateInput}></input>
        </div>
        <div className={classes.card}>
          <img src={location} className={classes.img2} />
          <div className={classes.info}>Choose Location</div>
        </div>

        <textarea
          rows={6}
          cols={30}
          className={classes.textarea}
          placeholder="Event information.."
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit" className={classes.registerBtn}>
          CREATE
          <BsArrowRight style={{ marginLeft: 10 }} size={20} />
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
