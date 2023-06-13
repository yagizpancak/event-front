import React, { useEffect, useState } from "react";
import classes from "./PostFeed.module.css";
import eventlogo from "../assets/eventLogo2.png";
import PostCard from "../components/ProfileTabs/ProfileCards/PostCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/General/Footer";
import { IoMdNotifications } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import { getBaseUrl } from "../Api";

const PostFeed = (props) => {
  const navigate = useNavigate();
  const baseUrl = getBaseUrl();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      `${baseUrl}/event-registration/registered-events/accepted/${localStorage.getItem(
        "username"
      )}/true`
    )
      .then((res) => res.json())
      .then((data) => setEvents(data.events));
  }, []);
  return (
    <div className={classes.postFeed}>
      <div className={classes.header}>
        <BsArrowLeft
          size={25}
          className={classes.backBtn}
          onClick={() => navigate("/Homee")}
        />
        <span className={classes.pageTitle}>Participated</span>
      </div>
      <div className={classes.posts}>
        {events.map((item) => {
          return (
            <PostCard
              uuid={item.uuid}
              key={item.uuid}
              name={item.name}
              imgUrl={item.imageUrl}
            />
          );
        })}
      </div>
      <Footer page="posts" />
    </div>
  );
};

export default PostFeed;
