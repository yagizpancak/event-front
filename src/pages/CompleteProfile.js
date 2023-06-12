import { useRef, useState } from "react";
import classes from "./CompleteProfile.module.css";
import { useNavigate } from "react-router-dom";
import eventLogo from "../assets/eventLogo2.png";
import facebook from "../assets/facebook.png";
import google from "../assets/search.png";
import { BsArrowLeft } from "react-icons/bs";
import addPhoto from "../assets/addPhoto.png";
import { getReduxState } from "../store";
import { getBaseUrl } from "../Api";

function CompleteProfile() {
  const navigate = useNavigate(); // For navigating between secreens

  const [profilFoto, setProfilFoto] = useState(addPhoto);
  const [bio, setBio] = useState("");
  const [file, setFile] = useState();

  const handleFotoYukleme = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    setFile(file);
    reader.onload = () => {
      setProfilFoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const username = getReduxState().user.username;
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const imgData = new FormData();
    imgData.append("image", file);

    const baseUrl = getBaseUrl();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    console.log(typeof file, file);

    fetch(`${baseUrl}/users/profile/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        bioInformation: bio,
      }),
    })
      .then((res) => {
        navigate("/CompleteProfile");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        fetch(`${baseUrl}/users/profile-img/${username}`, {
          method: "POST",
          body: imgData,
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log("img res data => ", data);
          });
        navigate("/Homee");
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
      ></div>
      <form className={classes.form} onSubmit={submitHandler}>
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
          type="text"
          className={classes.input}
          placeholder="First Name"
          ref={firstNameRef}
          autoComplete="on"
        />
        <input
          type="text"
          className={classes.input}
          placeholder="Last Name"
          ref={lastNameRef}
          autoComplete="on"
        />
        <textarea
          rows={6}
          cols={30}
          className={classes.textarea}
          placeholder="Write about yourself"
          onChange={(e) => setBio(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className={classes.button}
          // onClick={() => {
          //   navigate("/Home");
          // }}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default CompleteProfile;
