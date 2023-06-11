import React from "react";
import classes from "./Event.module.css";
import EventCard from "./ProfileCards/EventCard";
import football from "../../assets/football.png";

const Event = (props) => {
  return (
    <>
      <div className={classes.event}>
        <EventCard
          image={football}
          date="17ST MAY-SAT 11:00 PM"
          name="Halı Saha (14 kişi)"
        />
        <EventCard
          image={football}
          date="17ST MAY-SAT 11:00 PM"
          name="Halı Saha (14 kişi)"
        />
        <EventCard
          image={football}
          date="17ST MAY-SAT 11:00 PM"
          name="Halı Saha (14 kişi)"
        />
        <EventCard
          image={football}
          date="17ST MAY-SAT 11:00 PM"
          name="Halı Saha (14 kişi)"
        />
        <EventCard
          image={football}
          date="17ST MAY-SAT 11:00 PM"
          name="Halı Saha (14 kişi)"
        />
      </div>
    </>
  );
};

export default Event;
