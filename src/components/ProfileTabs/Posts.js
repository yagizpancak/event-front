import React from "react";
import classes from "./Posts.module.css";
import PostCard from "./ProfileCards/PostCard";
import football from "../../assets/football.png";
import eventlogo from "../../assets/eventLogo2.png";

const Posts = (props) => {
  return (
    <>
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
      </div>
    </>
  );
};

export default Posts;
