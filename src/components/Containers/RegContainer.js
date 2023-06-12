import React, { useEffect } from "react";
import classes from "./RegContainer.module.css";
import { getBaseUrl } from "../../Api";
import { useState } from "react";
import RegEventCard from "../Cards/EventsCards/RegEventCard";
const RegContainer = (props) => {
  const [events, setEvents] = useState([]);
  const baseUrl = getBaseUrl();
  const username = localStorage.getItem("username");

  useEffect(() => {
    console.log(
      `${baseUrl}/event-registration/registered-events/all-status/${username}`
    );
    fetch(
      `${baseUrl}/event-registration/registered-events/all-status/${username}`
    )
      .then((res) => res.json())
      .then((data) => setEvents(data.eventsWithRegistrationResponses));
  }, []);
  return (
    <div className={classes.container}>
      {events.map((item) => {
        return (
          <RegEventCard
            event={item.event}
            registrationStatus={item.registrationStatus}
          />
        );
      })}
    </div>
  );
};

export default RegContainer;
