import { useRef } from "react";
import classes from "./EventDetail.module.css";
import { useNavigate } from "react-router-dom";
import concer from "../assets/concer.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import date from "../assets/Date.png";
import location from "../assets/Location.png";
import milyonfest from "../assets/Milyonfest.png";

function EventDetails() {
  const navigate = useNavigate(); // For navigating between secreens

  return (
    <div className={classes.container}>
      <BsArrowLeft
        size={25}
        className={classes.backBtn}
        onClick={() => navigate("/Events")}
      />
      <img src={concer} className={classes.headerImg}></img>
      <span className={classes.title}>Tarkan Konseri</span>
      <span className={classes.title2}>İzmir, Alsancak</span>
      <div className={classes.dateContainer}>
        <img src={date}></img>
        <div className={classes.textContainer}>
          <span style={{ fontSize: 18 }}>14 December, 2021</span>
          <span style={{ color: "gray", fontSize: 15 }}>
            Tuesday, 4:00PM - 9:00PM
          </span>
        </div>
      </div>
      <div className={classes.dateContainer}>
        <img src={location}></img>
        <div className={classes.textContainer}>
          <span style={{ fontSize: 18 }}>Alsancak Kordon</span>
          <span style={{ color: "gray", fontSize: 15 }}>
            Atatürk Caddesi No:312
          </span>
        </div>
      </div>
      <div className={classes.dateContainer}>
        <img src={milyonfest}></img>
        <div className={classes.textContainer}>
          <span style={{ fontSize: 18 }}>Milyonfest</span>
          <span style={{ color: "gray", fontSize: 15 }}>Organizer</span>
        </div>
        <button className={classes.followBtn}>Follow</button>
      </div>
      <span className={classes.aboutTitle}>About Event</span>
      <p className={classes.aboutText}>
        23 Haziran 2023'te hepinizi eğlencenin merkezine davet ediyoruz. Takipte
        kalın.
      </p>

      <button className={classes.registerBtn}>
        REGISTER
        <BsArrowRight
          style={{ marginLeft: 10 }}
          size={20}
          onClick={() => navigate("/Homee")}
        />
      </button>
    </div>
  );
}

export default EventDetails;
