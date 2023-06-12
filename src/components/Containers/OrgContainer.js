import React from "react";
import classes from "./OrgContainer.module.css";
import { useState, useEffect } from "react";
import { getBaseUrl } from "../../Api";
import OrgEventCard from "../Cards/EventsCards/OrgEventCard";
import Modal from "../Modals/Modal";
import RegistrationsContainer from "../Modals/RegistrationsContainer";
import RegistrationItem from "../Modals/RegistrationItem";

const OrgContainer = (props) => {
  const [events, setEvents] = useState([]);
  const baseUrl = getBaseUrl();
  const username = localStorage.getItem("username");
  const [uuid, setUuid] = useState("");

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const openModal = (uuid) => {
    console.log(uuid);
    setUuid(uuid);
    setModalIsVisible(true);
    props.closeFooter();
  };

  const closeModal = () => {
    setModalIsVisible(false);
    props.openFooter();
  };

  useEffect(() => {
    console.log(`${baseUrl}/event-management/get-by-organizator/${username}`);
    fetch(`${baseUrl}/event-management/get-by-organizator/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data.events);
        console.log("a", data.events);
      });
  }, [modalIsVisible]);

  return (
    <div className={classes.container}>
      {modalIsVisible && (
        <Modal openModal={openModal} onClose={closeModal}>
          <RegistrationsContainer uuid={uuid} />
        </Modal>
      )}
      {events.map((item) => {
        return (
          <OrgEventCard
            name={item.name}
            startDate={item.startDate}
            uuid={item.eventUUID}
            imgUrl={`${baseUrl}${item.imageUrl.slice(7)}`}
            openModal={(uuid) => openModal(uuid)}
          />
        );
      })}
    </div>
  );
};

export default OrgContainer;
