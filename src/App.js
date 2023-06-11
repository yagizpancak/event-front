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
import Organization from "./pages/Organization";
import CreatePost from "./pages/CreatePost";
import PostFeed from "./pages/PostFeed";
import RegEventDetails from "./components/Cards/EventsCards/RegEventDetails";
import UserSearch from "./pages/UserSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/CompleteProfile" element={<CompleteProfile />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/EventDetails" element={<EventDetails />}></Route>
        <Route path="/CreateEvent" element={<CreateEvent />}></Route>
        <Route path="/Map" element={<Mapp />}></Route>
        <Route path="/Organization" element={<Organization />}></Route>
        <Route path="/CreatePost" element={<CreatePost />}></Route>
        <Route path="/PostFeed" element={<PostFeed />}></Route>
        <Route path="/RegEventDetails" element={<RegEventDetails />}></Route>
        <Route path="/UserSearch" element={<UserSearch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
