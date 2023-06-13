import React from "react";
import classes from "./PostCard.module.css";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../../../Api";

const PostCard = (props) => {
  const navigate = useNavigate();
  const baseUrl = getBaseUrl();
  console.log(props);
  return (
    <div className={classes.postCard}>
      <span className={classes.eventTitle}>{props.name}</span>
      <img
        src={`${baseUrl}/event-management/get-event-image/${props.imgUrl.slice(
          -32
        )}`}
        className={classes.img}
      />
      <div className={classes.info}>
        <span className={classes.likes}>
          <b>99</b> Likes
        </span>
        <span className={classes.text}>
          <b>mertkaracax</b> Keyifli bir maçtı
        </span>
      </div>
    </div>
  );
};

export default PostCard;
