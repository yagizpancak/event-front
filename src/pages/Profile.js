import React, { useState, useEffect } from "react";
import classes from "./Profile.module.css";
import Footer from "../components/General/Footer";
// import Mert from "../assets/Mert.jpeg";
import About from "../components/ProfileTabs/About";
import Event from "../components/ProfileTabs/Event";
import Posts from "../components/ProfileTabs/Posts";
import { getReduxState } from "../store/index";
import { getBaseUrl } from "../Api";
import { FaSignOutAlt } from "react-icons/fa";

const Profile = (props) => {
  const [tab, setTab] = useState("about");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [bioInformation, setBioInformation] = useState("");
  const [follower, setFollower] = useState("-");
  const [following, setFollowing] = useState("-");

  const baseUrl = getBaseUrl();
  const slicedBasedUrl = baseUrl.slice(0, 24);
  const username = getReduxState().user.username;

  useEffect(() => {
    console.log("1. useffect fetch url => ", `${baseUrl}/profile/${username}`);

    fetch(`${baseUrl}/users/profile/${username}`, {
      method: "GET",
      //   headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log("profile info fetch res => ", res);
        return res.json();
      })
      .then((data) => {
        console.log("Profile info data=> ", data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setImgUrl(data.imgUrl);
        setBioInformation(data.bioInformation);
      })
      .catch((err) => console.log(err));

    fetch(`${baseUrl}/users/get-follow-follower-count/${username}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFollowing(data.followingCount);
        setFollower(data.followerCount);
      });
  }, []);

  return (
    <>
      <div className={classes.profile}>
        <div
          className={classes.header}
          style={{ height: tab === "posts" ? "5vh" : "10vh" }}
        >
          <FaSignOutAlt
            color="white"
            className={classes.signOutBtn}
            size={25}
          />
        </div>
        <img
          src={imgUrl && `${slicedBasedUrl}${imgUrl}`}
          className={classes.pp}
          style={{
            width: tab === "posts" ? "10vh" : "15vh",
            height: tab === "posts" ? "10vh" : "15vh",
          }}
        />
        <h5 style={{ fontSize: 20, fontWeight: 500, letterSpacing: 2 }}>
          {firstName} {lastName}
        </h5>
        <div
          className={classes.followContainer}
          style={{ marginTop: tab === "posts" ? "1vh" : "3vh" }}
        >
          <div className={classes.followingContainer}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>{follower}</span>
            <span>Followers</span>
          </div>
          <div className={classes.followerContainer}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>{following}</span>
            <span>Followings</span>
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
        {tab === "about" && <About bio={bioInformation} />}
        {tab === "event" && <Event />}
        {tab === "posts" && <Posts />}
      </div>
      <Footer page="profile" />
    </>
  );
};

export default Profile;
