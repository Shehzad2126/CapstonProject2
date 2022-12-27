import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ViewPost from "./ViewPost";
import LoginPage from "./Login";
import SignupPage from "./Signup";
import CreatePostPage from "./CreatePostPage";

function MainRoutes() {
  const [token, setToken] = useState(localStorage.getItem("userToken"))
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreatePostPage />}/>
        <Route path="/view/:id" element={<ViewPost />}/>
      </Routes>
  );
}

export default MainRoutes;
