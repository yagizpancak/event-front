import { useRef } from "react";
import { useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import eventLogo from "../assets/eventLogo2.png";
import facebook from "../assets/facebook.png";
import google from "../assets/search.png";

import { getBaseUrl } from "../Api";
import Popup from "../components/Modals/Feedback/Popup";

function Login() {
  const navigate = useNavigate(); // For navigating between secreens
  const [pop, setPop] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("bastı");

    const baseUrl = getBaseUrl();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.success) {
          console.log("aaaaaaaaaaaaa");
          setPop(true);
          setTimeout(() => {
            setPop(false);
          }, 4000);
          return null;
        }
        // console.log(
        //   dispatch(
        //     userActions.setUser({
        //       username: user.username,
        //     })
        //   )
        // );
        localStorage.setItem("username", username);
        if (data.profileInfoFilled === false) {
          navigate("/CompleteProfile");
        } else {
          navigate("/Homee");
        }
      });
  };
  return (
    <div className={classes.container}>
      {pop && <Popup title="Error" message="Username or password invalid" />}
      <img src={eventLogo}></img>
      <form className={classes.form} onSubmit={submitHandler}>
        <h2 className={classes.heading}>Sign In</h2>
        <input
          required
          type="text"
          className={classes.input}
          placeholder="username"
          ref={usernameRef}
          autoComplete="on"
        />
        <input
          required
          type="password"
          className={classes.input}
          placeholder="password"
          ref={passwordRef}
          autoComplete="on"
        />
        <span style={{ marginTop: 10, marginBottom: 10 }}>
          <span style={{ color: "gray" }}>Forgot Password? </span>
        </span>
        <button
          type="submit"
          className={classes.button}
          // onClick={() => navigate("/CompleteProfile")}
        >
          Sign In
        </button>
      </form>
      <span style={{ marginTop: 30, marginBottom: 30, textAlign: "center" }}>
        <span style={{ color: "gray" }}>OR </span>
      </span>
      <button className={classes.button2}>
        <img className={classes.btnImg} src={google}></img>
        Login with Google
      </button>
      <button className={classes.button2}>
        <img className={classes.btnImg} src={facebook}></img>
        Login with Facebook
      </button>
      <span style={{ marginTop: 25 }}>
        <span style={{ color: "gray" }}>Don't have an account? </span>
        <span
          onClick={() => {
            navigate("/SignUp");
          }}
          className={classes.link}
          style={{ display: "inline-block" }}
        >
          Sign up now
        </span>
      </span>
    </div>
  );
}

export default Login;
