import React, { useEffect, useState } from "react";
import classes from "./RegistrationsContainer.module.css";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../../Api";
import RegistrationItem from "./RegistrationItem";

const RegistrationsContainer = (props) => {
  const uuid = props.uuid;
  const [waitingUsers, setWaitingUsers] = useState([]);
  const baseUrl = getBaseUrl();
  const [changeCounter, setChangeCounter] = useState(0);

  const changed = () => {
    setChangeCounter((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    fetch(`${baseUrl}/event-registration/waiting-registrations/${uuid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("aaaaaaaaaaaa", data);
        setWaitingUsers(data.usersInfo);
      });
  }, [changeCounter]);

  return (
    <div className={classes.container}>
      {waitingUsers.map((item) => {
        return (
          <RegistrationItem
            onChange={changed}
            uuid={uuid}
            username={item.username}
            imgUrl={item.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default RegistrationsContainer;
