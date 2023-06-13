import React, { useEffect, useRef, useState } from "react";
import classes from "./PostCard.module.css";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../../../Api";
import { FaCommentAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";

const PostCard = (props) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [inpOpen, setInpOpen] = useState(false);
  const navigate = useNavigate();
  const baseUrl = getBaseUrl();
  const [trigger, setTrigger] = useState(false);

  const commentRef = useRef();

  const postHandler = () => {
    const comment = commentRef.current.value;
    fetch(`${baseUrl}/posts/add-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId: props.uuid,
        username: localStorage.getItem("username"),
        body: comment,
      }),
    }).then((res) => {
      setInpOpen(false);
    });
  };

  useEffect(() => {
    fetch(`${baseUrl}/posts/${props.uuid}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);

        setTrigger((prev) => {
          return !prev;
        });
      });
  }, [trigger]);

  return (
    <div className={classes.postCard}>
      <span className={classes.eventTitle}>{props.name}</span>
      <img
        src={`${baseUrl}/event-management/get-event-image/${props.imgUrl.slice(
          -32
        )}`}
        className={classes.img}
      />
      <b
        style={{ marginLeft: "3vw" }}
        onClick={() => {
          setShowComments((prev) => {
            return !prev;
          });
        }}
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </b>
      {showComments && (
        <FaCommentAlt
          style={{ position: "absolute", right: "6vw", top: "25.5vh" }}
          size={20}
          onClick={() => {
            setInpOpen((prev) => {
              return !prev;
            });
          }}
        />
      )}

      {showComments && (
        <>
          {inpOpen && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                placeholder="Comment"
                className={classes.inp}
                type="text"
                ref={commentRef}
              ></input>
              <button className={classes.btn} onClick={postHandler}>
                <BsCheckCircle size={20} color="white" />
              </button>
            </div>
          )}
          {comments &&
            comments.map((item) => {
              return (
                <div className={classes.info}>
                  <span className={classes.text}>
                    <b>{item.username}</b> {item.body}
                  </span>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default PostCard;
