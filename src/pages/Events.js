import React, { useState } from "react";
import classes from "./Events.module.css";
import Footer from "../components/General/Footer";
import EventCard from "../components/Cards/HomeCards/EventCard";
import basketball from "../assets/basketball.png";
import tennis from "../assets/tennis.png";
import football from "../assets/football.png";
import concer from "../assets/concer.png";
import { IoMdNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import RegEventCard from "../components/Cards/EventsCards/RegEventCard";
import RegContainer from "../components/Containers/RegContainer";
import OrgContainer from "../components/Containers/OrgContainer";
import OrgEventCard from "../components/Cards/EventsCards/OrgEventCard";
import Modal from "../components/Modals/Modal";
import RegistrationsContainer from "../components/Modals/RegistrationsContainer";
import RegistrationItem from "../components/Modals/RegistrationItem";

const Events = (props) => {
  const [tab, setTab] = useState("registered");
  const [footerIsVisible, setFooterIsVisible] = useState(true);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const openModal = () => {
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

  const navigate = useNavigate();
  return (
    <>
      <div className={classes.home}>
        {modalIsVisible && (
          <Modal openModal={openModal} onClose={closeModal}>
            <RegistrationsContainer>
              <RegistrationItem />
              <RegistrationItem />
            </RegistrationsContainer>
          </Modal>
        )}
        <div className={classes.header}>
          <IoMdNotifications
            size={25}
            className={classes.backBtn}
            onClick={() => navigate("/")}
          />
          <span className={classes.pageTitle}>Events</span>
        </div>
        <div className={classes.tabContainer}>
          <div
            onClick={() => {
              setTab("registered");
            }}
            style={{
              backgroundColor: tab === "registered" ? "white" : null,
              color: tab === "registered" ? "#ed9057" : null,
            }}
            className={classes.tabItem}
          >
            REGISTERED
          </div>
          <div
            onClick={() => {
              setTab("organized");
            }}
            style={{
              backgroundColor: tab === "organized" ? "white" : null,
              color: tab === "organized" ? "#ed9057" : null,
            }}
            className={classes.tabItem}
          >
            ORGANIZED
          </div>
        </div>

        {tab === "registered" && (
          <RegContainer>
            <RegEventCard
              image={concer}
              date="14 DEC-TUE 4:00 PM"
              name="Tarkan Konseri"
            />
            <RegEventCard
              image={basketball}
              date="5ST JAN-SAT 7:30 AM"
              name="Basketbol Maçı"
            />
            <RegEventCard
              image={football}
              date="17ST MAY-SAT 11:00 PM"
              name="Halı Saha (14 kişi)"
            />
            <RegEventCard
              image={tennis}
              date="3ST JUNE-SAT 00:00 PM"
              name="Tenis"
            />
            <RegEventCard
              image={tennis}
              date="3ST JUNE-SAT 00:00 PM"
              name="Tenis"
            />
            <RegEventCard
              image={tennis}
              date="3ST JUNE-SAT 00:00 PM"
              name="Tenis"
            />
            <RegEventCard
              image={tennis}
              date="3ST JUNE-SAT 00:00 PM"
              name="Tenis"
            />
          </RegContainer>
        )}
        {tab === "organized" && (
          <OrgContainer>
            <OrgEventCard
              openModal={openModal}
              image={concer}
              date="14 DEC-TUE 4:00 PM"
              name="Tarkan Konseri"
            />
            <OrgEventCard
              openModal={openModal}
              image={basketball}
              date="5ST JAN-SAT 7:30 AM"
              name="Basketbol Maçı"
            />
            <OrgEventCard
              openModal={openModal}
              image={football}
              date="17ST MAY-SAT 11:00 PM"
              name="Halı Saha (14 kişi)"
            />
            <OrgEventCard
              openModal={openModal}
              image={tennis}
              date="3ST JUNE-SAT 00:00 PM"
              name="Tenis"
            />
          </OrgContainer>
        )}
      </div>
      {!modalIsVisible && <Footer page="events" />}
    </>
  );
};

export default Events;
