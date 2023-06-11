import React, { useState } from "react";
import classes from "./Profile.module.css";
import Footer from "../components/General/Footer";
import Mert from "../assets/Mert.jpeg";
import About from "../components/ProfileTabs/About";
import Event from "../components/ProfileTabs/Event";
import Posts from "../components/ProfileTabs/Posts";

const Profile = (props) => {
  const [tab, setTab] = useState("about");

  return (
    <>
      <div className={classes.profile}>
        <div className={classes.header}></div>
        <img src={Mert} className={classes.pp} />
        <h5 style={{ fontSize: 20, fontWeight: 500, letterSpacing: 2 }}>
          Mert Karaca
        </h5>
        <div className={classes.followContainer}>
          <div className={classes.followingContainer}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>721</span>
            <span>Following</span>
          </div>
          <div className={classes.followerContainer}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>346</span>
            <span>Followers</span>
          </div>
        </div>
        <div className={classes.tabs}>
          <div
            className={classes.tab}
            style={{ borderBottom: tab === "about" && "3px solid orange" }}
            onClick={() => {
              setTab("about");
            }}
          >
            ABOUT
          </div>
          <div
            className={classes.tab}
            style={{ borderBottom: tab === "event" && "3px solid orange" }}
            onClick={() => {
              setTab("event");
            }}
          >
            EVENTS
          </div>
          <div
            className={classes.tab}
            style={{ borderBottom: tab === "posts" && "3px solid orange" }}
            onClick={() => {
              setTab("posts");
            }}
          >
            POSTS
          </div>
        </div>
        {tab === "about" && <About />}
        {tab === "event" && <Event />}
        {tab === "posts" && <Posts />}
      </div>
      <Footer page="profile" />
    </>
  );
};

export default Profile;
