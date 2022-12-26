import React from "react";
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
