import React from "react";
import classes from "./PostCard.module.css";
import { useNavigate } from "react-router-dom";

const PostCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.postCard}>
      <img src={props.image} className={classes.img} />
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
