import React, { useState } from "react";
import classes from "./CreateEvent.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import addPhoto from "../assets/addPhoto.png";
import date from "../assets/Date.png";
import location from "../assets/Location.png";

const CreateEvent = (props) => {
  const navigate = useNavigate();
  const [eventPhoto, setEventPhoto] = useState(addPhoto);

  const handleFotoYukleme = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setEventPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
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
      <label htmlFor="file-input" className={classes.label}>
        <img className={classes.img} src={eventPhoto}></img>
        <input
          id="file-input"
          type="file"
          className={classes.imgInput}
          onChange={handleFotoYukleme}
        />
      </label>

      <div className={classes.card}>
        <img src={date} className={classes.img2} />
        <input type="date" className={classes.dateInput}></input>
      </div>
      <div className={classes.card}>
        <img src={location} className={classes.img2} />
        <div className={classes.info}>Choose Location</div>
      </div>

      <span className={classes.aboutTitle}>About</span>
      <textarea
        rows={6}
        cols={30}
        className={classes.textarea}
        placeholder="Event information.."
      ></textarea>
      <button className={classes.registerBtn}>
        CREATE
        <BsArrowRight
          style={{ marginLeft: 10 }}
          size={20}
          onClick={() => {
            navigate("/Home");
          }}
        />
      </button>
    </div>
  );
};

export default CreateEvent;
