import React from "react";
import olBlue from "../../images/OLXsmall.png";
import OLXLogo from "../../images/OLX.png";
import "./Header.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BusinessIcon from "@mui/icons-material/Business";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
function Header() {
  
  return (
    <div className="header_container px-5 py-3">
      <div className="headerUpperDiv pb-4">
        <div className="col-md-3">
          <div className="row">
            <div className="d-flex justify-content-between">
              <img
                className="upperLogo col-1"
                src={olBlue}
                alt="OLX upper logo"
              />
              <p className="col-4">
                <span className="car">
                  <DirectionsCarIcon />
                </span>
                Motors
              </p>
              <p className="col-4">
                <span className="building">
                  <BusinessIcon />
                </span>
                Property
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="headerLowerDiv">
        <div className="col-12">
          <div className="row">
            <div className="d-flex justify-content-between">
              <img className="lowerLogo col-1" src={OLXLogo} alt="OLX logo" />

              <span class="d-flex justify-content-between border-1   border-black location p-2  m-0 bg-white col-md-3">
                <span className="icon ">
                  <SearchIcon />
                </span>
                <input
                  class="input-field w-75 border-0 "
                  placeholder="Location"
                  type="text"
                />
                <span className="icon ">
                  <KeyboardArrowDownIcon />
                </span>
              </span>
              <span class="d-flex justify-content-between border-1   border-black search p-2  m-0 bg-white col-md-6">
                <input
                  class="input-field w-75 border-0 "
                  placeholder="Find Cars, Mobile Phones and more..."
                  type="text"
                />
                <span className="icon ">
                  <SearchIcon />
                </span>
              </span>
              <Link to="/login">
              <button className="border-0 bg-transparent"><h3 className="mr-sm-2 login">Login</h3></button>
              </Link>
              <Link to="/create">
              <button class="my-2 my-sm-0 sell">
                <AddIcon /> SELL
              </button></Link>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Header;
