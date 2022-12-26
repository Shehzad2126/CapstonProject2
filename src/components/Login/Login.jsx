import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Logo from "../../images/OLX.png";
import "./Login.css";

function Login({token, setToken}) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios({
    //   url:"https://fakestoreapi.com/auth/login",
    //   method: "POST",
    //   data:{
    //       username:email,
    //       password: password,
    //   },
    // }).then((res)=>{
    //   console.log(res.data.token);
    //   setToken(res.data.token);
    //   localStorage.setItem("userToken", res.data.token)
    // }).catch((err)=>{
    //   console.log(err.response)
    // })
  };
  return (<>
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="sijeesh@gmail.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div> 
    </div>
    </>
  );
}

export default Login;
