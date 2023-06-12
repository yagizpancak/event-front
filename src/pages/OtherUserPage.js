import React, { useEffect, useState } from "react";
import classes from "./OtherUserPage.module.css";
import Footer from "../components/General/Footer";
import About from "../components/ProfileTabs/About";
import Event from "../components/ProfileTabs/Event";
import Posts from "../components/ProfileTabs/Posts";
import { getBaseUrl } from "../Api";
import { useParams } from "react-router-dom";
import user from "../assets/user.png";

const OtherUserPage = (props) => {
  const [tab, setTab] = useState("about");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imgUrl, setImgUrl] = useState(user);
  const [bioInformation, setBioInformation] = useState("");
  const [following, setFollowing] = useState(false);
  const [followers, setFollowers] = useState("-");
  const [followings, setFollowings] = useState("-");

  const { username } = useParams();
  const loggedUser = localStorage.getItem("username"); //getReduxState().user.username;
  console.log("logged user ", loggedUser);

  const baseUrl = getBaseUrl();
  // const slicedBasedUrl = baseUrl.slice(0, 24);

  useEffect(() => {
    console.log(`${baseUrl}/profile/bigo`);

    fetch(`${baseUrl}/users/profile/${username}`, {
      method: "GET",
      //   headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setImgUrl(data.imgUrl);
        setBioInformation(data.bioInformation);
      })
      .catch((err) => console.log(err));

    fetch(`${baseUrl}/users/profile-img/${username}`, { method: "GET" })
      .then((res) => {
        console.log("ressss", res.status);
        if (res.status === 500) {
          const error = new Error("Internal server error yedin");
          throw error;
        } else {
          console.log("500 dönmedi");
          console.log(`${baseUrl}/users/profile-img/${username}`);
          setImgUrl(`${baseUrl}/users/profile-img/${username}`);
        }
        console.log("else girdi");
      })
      .catch((e) => {
        setImgUrl(user);
        console.log("ımage not found");
        console.log(e);
      });

    fetch(`${baseUrl}/users/following-list/${loggedUser}`, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.followingUsers.find((user) => user.username === username)) {
          setFollowing(true);
        }
        console.log("Following List", data.followingUsers);
      });

    fetch(`${baseUrl}/users/get-follow-follower-count/${username}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFollowings(data.followingCount);
        setFollowers(data.followerCount);
      });
  }, []);

  function followHandler() {
    fetch(`${baseUrl}/users/follow/${loggedUser}/${username}`, {
      method: "PUT",
    }).then((res) => {
      if (res.status === 200) {
        setFollowing(true);
      }
    });
  }

  return (
    <>
      <div className={classes.profile}>
        <div
          className={classes.header}
          style={{ height: tab === "posts" ? "5vh" : "10vh" }}
        ></div>
        <img
          src={imgUrl}
          className={classes.pp}
          style={{
            width: tab === "posts" ? "10vh" : "15vh",
            height: tab === "posts" ? "10vh" : "15vh",
          }}
        />
        <h5 style={{ fontSize: 20, fontWeight: 500, letterSpacing: 2 }}>
          {firstName} {lastName}
        </h5>
        <button
          className={classes.followBtn}
          style={{ backgroundColor: following ? "green" : "orange" }}
          onClick={followHandler}
        >
          {following ? "Following " : "Follow"}
        </button>
        <div
          className={classes.followContainer}
          style={{ marginTop: tab === "posts" ? "1vh" : "3vh" }}
        >
          <div className={classes.followingContainer}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>{followers}</span>
            <span>Followers</span>
          </div>
          <div className={classes.followerContainer}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>{followings}</span>
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
      <Footer />
    </>
  );
};

export default OtherUserPage;
