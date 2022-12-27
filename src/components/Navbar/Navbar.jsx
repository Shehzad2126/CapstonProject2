import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./Navbar.css"
function Navbar() {
  return (
    <div className="row wrapper">
      <div className="shadow bottom">
      <nav class="px-5 navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/">
          ALL CATEGORIES<KeyboardArrowDownIcon/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
              electronics <span class="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              jewelery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              men's clothing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              women's clothing
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
      </div>
    </div>
  );
}

export default Navbar;
