import React, { useEffect, useState } from "react";
import classes from "./Event.module.css";
import EventCard from "./ProfileCards/EventCard";
import football from "../../assets/football.png";
import { getBaseUrl } from "../../Api";

const Event = (props) => {
  const [events, setEvents] = useState([]);
  const baseUrl = getBaseUrl();

  useEffect(() => {
    fetch(
      `${baseUrl}/event-management/get-by-organizator/${localStorage.getItem(
        "username"
      )}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => setEvents(data.events));
  }, []);

  return (
    <>
      <div className={classes.event}>
        {events.map((item) => {
          return (
            <EventCard
              key={item.uuid}
              imgUrl={item.imageUrl}
              date={item.startDate}
              name={item.name}
              isClosed={item.isClosed}
            />
          );
        })}
      </div>
    </>
  );
};

export default Event;
