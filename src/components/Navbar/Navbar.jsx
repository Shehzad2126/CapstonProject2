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
              <a className="nav-link" href="sa">
              Mobile Phones <span class="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              Cars
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              Motorcycles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              Houses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              TV - Video - Audio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              Tablets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              Land & Plots
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
