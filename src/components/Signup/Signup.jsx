import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/OLX.png";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Firebase.auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     result.user.updateProfile({ displayName: name }).then(() => {
    //       Firebase.firestore().collection("users").doc(result.user.uid).set({
    //         id: result.user.uid,
    //         name: name,
    //         phone: phone,
    //       });
    //     });
    //   })
    //   .then(() => {
    //     history.push("/login");
    //   });
  };
  return (<>
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label>Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div> 
    </>
  );
}
