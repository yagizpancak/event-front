import React from "react";
import classes from "./PostFeed.module.css";
import eventlogo from "../assets/eventLogo2.png";
import PostCard from "../components/ProfileTabs/ProfileCards/PostCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/General/Footer";
import { IoMdNotifications } from "react-icons/io";
const PostFeed = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.header}>
        <IoMdNotifications
          size={25}
          className={classes.backBtn}
          onClick={() => navigate("/")}
        />
        <span className={classes.pageTitle}>Post Feed</span>
      </div>
      <div className={classes.posts}>
        <PostCard
          image={eventlogo}
          date="17ST MAY-SAT 11:00 PM"
          name="Halı Saha (14 kişi)"
        />
        <PostCard
          image={eventlogo}
          date="17ST MAY-SAT 11:00 PM"
          name="Halı Saha (14 kişi)"
        />
        <PostCard
          image={eventlogo}
          date="17ST MAY-SAT 11:00 PM"
          name="Halı Saha (14 kişi)"
        />
        <PostCard
          image={eventlogo}
          date="17ST MAY-SAT 11:00 PM"
          name="Halı Saha (14 kişi)"
        />
      </div>
      <Footer page="posts" />
    </>
  );
};

export default PostFeed;
