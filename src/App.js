import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EventDetails from "./pages/EventDetail";
import CreateEvent from "./pages/CreateEvent";
import CompleteProfile from "./pages/CompleteProfile";
import Events from "./pages/Events";
import Mapp from "./pages/Mapp";

import CreatePost from "./pages/CreatePost";
import PostFeed from "./pages/PostFeed";
import RegEventDetails from "./components/Cards/EventsCards/RegEventDetails";
import UserSearch from "./pages/UserSearch";
import OtherUserPage from "./pages/OtherUserPage";
import { useState } from "react";
import RegisteredsUsers from "./pages/RegisteredsUsers";

function App() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [pop, setPop] = useState(false);

  const popHandler = (title, message) => {
    setTitle(title);
    setMessage(message);
    setPop(true);
    setTimeout(() => {
      setPop(false);
    }, 4000);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/CompleteProfile" element={<CompleteProfile />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route
          path="/Homee"
          element={<Home pop={pop} title={title} message={message} />}
        ></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/EventDetails/:uuid" element={<EventDetails />}></Route>
        <Route
          path="/CreateEvent"
          element={
            <CreateEvent
              popHandler={popHandler}
              title={title}
              message={message}
            />
          }
        ></Route>
        <Route path="/Map" element={<Mapp />}></Route>
        <Route path="/RegisteredUsers" element={<RegisteredsUsers />}></Route>
        <Route path="/CreatePost" element={<CreatePost />}></Route>
        <Route path="/PostFeed" element={<PostFeed />}></Route>
        <Route path="/RegEventDetails" element={<RegEventDetails />}></Route>
        <Route path="/UserSearch" element={<UserSearch />}></Route>
        <Route
          path="/OtherUserPage/:username"
          element={<OtherUserPage />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
