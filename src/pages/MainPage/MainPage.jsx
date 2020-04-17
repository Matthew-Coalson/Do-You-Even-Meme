import React from "react";
//import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./MainPage.css";

const MainPage = (props) => {
  return (
    <div className="MainPage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <footer className="header-footer">
        <h3>Footer</h3>
      </footer>
    </div>
  );
};

export default MainPage;
