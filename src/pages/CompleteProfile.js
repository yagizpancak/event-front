import { useRef, useState } from "react";
import classes from "./CompleteProfile.module.css";
import { useNavigate } from "react-router-dom";
import eventLogo from "../assets/eventLogo2.png";
import facebook from "../assets/facebook.png";
import google from "../assets/search.png";
import { BsArrowLeft } from "react-icons/bs";
import addPhoto from "../assets/addPhoto.png";

function CompleteProfile() {
  const navigate = useNavigate(); // For navigating between secreens

  const [profilFoto, setProfilFoto] = useState(addPhoto);

  const handleFotoYukleme = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfilFoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <div className={classes.container}>
      <div
        style={{
          width: "100vw",
          padding: "2vh",
          paddingLeft: "5vh",
          boxSizing: "border-box",
        }}
      ></div>
      <form className={classes.form}>
        <h2 className={classes.heading}>
          <BsArrowLeft
            size={25}
            className={classes.backBtn}
            onClick={() => navigate("/")}
          />
          Complete Your Profile
        </h2>

        <label htmlFor="file-input" className={classes.label}>
          <img className={classes.img} src={profilFoto}></img>
          <input
            id="file-input"
            type="file"
            className={classes.imgInput}
            onChange={handleFotoYukleme}
          />
        </label>

        <input
          type="username"
          className={classes.input}
          placeholder="First Name"
          ref={usernameRef}
          autoComplete="on"
        />
        <input
          type="password"
          className={classes.input}
          placeholder="Last Name"
          ref={passwordRef}
          autoComplete="on"
        />
        <input
          type="username"
          className={classes.input}
          placeholder="Profile Bio"
          ref={usernameRef}
        />

        <button
          type="submit"
          className={classes.button}
          onClick={() => {
            navigate("/Home");
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default CompleteProfile;
