import { useRef, useState } from "react";
import classes from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import facebook from "../assets/facebook.png";
import google from "../assets/search.png";
import { BsArrowLeft } from "react-icons/bs";
import { getBaseUrl } from "../Api";

function SignUp() {
  const navigate = useNavigate(); // For navigating between secreens
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("bastı");

    const baseUrl = getBaseUrl();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    console.log(`${baseUrl}/users/signup`);

    fetch(`${baseUrl}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        } else {
          const error = new Error("Sign up error " + res.status);
          throw error;
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.container}>
      <div
        style={{
          width: "100vw",
          padding: "2vh",
          paddingLeft: "5vh",
          boxSizing: "border-box",
        }}
      >
        <BsArrowLeft
          size={25}
          className={classes.backBtn}
          onClick={() => navigate("/")}
        />
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h2 className={classes.heading}>Sign Up</h2>
        <input
          type="text"
          className={classes.input}
          placeholder="username"
          ref={usernameRef}
        />
        <input
          type="text"
          className={classes.input}
          placeholder="email"
          ref={emailRef}
        />
        <input
          type="password"
          className={classes.input}
          placeholder="password"
          ref={passwordRef}
        />
        <input
          type="password"
          className={classes.input}
          placeholder="password confirm"
          // ref={usernameRef}
        />
        <div className={classes.checkboxContainer}>
          <span>Accept The Terms Of Service</span>
          <div
            onClick={() =>
              setAcceptTerms((prevState) => {
                return !prevState;
              })
            }
            style={{
              height: "2vh",
              width: "10vw",
              border: "1px solid gray",
              borderRadius: "2vh",
              position: "relative",
              marginLeft: "3vw",
            }}
          >
            <div
              className={classes.checkBoxItem}
              style={{
                backgroundColor: acceptTerms ? "#ed9057" : "gray",
                left: acceptTerms ? "5vw" : "0vw",
              }}
            ></div>
          </div>
        </div>
        <div className={classes.checkboxContainer}>
          <span>Accept Privacy Policy</span>
          <div
            onClick={() =>
              setAcceptPrivacy((prevState) => {
                return !prevState;
              })
            }
            style={{
              height: "2vh",
              width: "10vw",
              border: "1px solid gray",
              borderRadius: "2vh",
              position: "relative",
              marginLeft: "3vw",
            }}
          >
            <div
              className={classes.checkBoxItem}
              style={{
                backgroundColor: acceptPrivacy ? "#ed9057" : "gray",
                left: acceptPrivacy ? "5vw" : "0vw",
              }}
            ></div>
          </div>
        </div>
        <button
          type="submit"
          className={classes.button}
          style={{
            backgroundColor: acceptTerms && acceptPrivacy ? "#ed9057" : "gray",
          }}
          disabled={!acceptTerms || !acceptPrivacy}
        >
          Sign Up
        </button>
      </form>
      <span style={{ marginTop: 30, marginBottom: 30, textAlign: "center" }}>
        <span style={{ color: "gray" }}>OR </span>
      </span>
      <button className={classes.button2}>
        <img className={classes.btnImg} src={google}></img>
        Sign Up with Google
      </button>
      <button className={classes.button2}>
        <img className={classes.btnImg} src={facebook}></img>
        Sign Up with Facebook
      </button>
      <span style={{ marginTop: 25 }}>
        <span style={{ color: "gray" }}>Already have an account? </span>
        <span
          onClick={() => {
            navigate("/SignUp");
          }}
          className={classes.link}
          style={{ display: "inline-block" }}
        >
          Sign In
        </span>
      </span>
    </div>
  );
}

export default SignUp;
