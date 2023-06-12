import React, { useState } from "react";
import classes from "./Events.module.css";
import Footer from "../components/General/Footer";
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
import { BsArrowLeft } from "react-icons/bs";

const Events = (props) => {
  const [tab, setTab] = useState("registered");
  const [footerIsVisible, setFooterIsVisible] = useState(true);

  function closeFooter() {
    setFooterIsVisible(false);
  }
  function openFooter() {
    setFooterIsVisible(true);
  }

  const navigate = useNavigate();
  return (
    <>
      <div className={classes.home}>
        <div className={classes.header}>
          <BsArrowLeft
            size={25}
            className={classes.backBtn}
            onClick={() => navigate("/Homee")}
          />

          <span className={classes.pageTitle}>My Events</span>
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

        {tab === "registered" && <RegContainer />}
        {tab === "organized" && (
          <OrgContainer closeFooter={closeFooter} openFooter={openFooter} />
        )}
      </div>
      {footerIsVisible && <Footer page="events" />}
    </>
  );
};

export default Events;
