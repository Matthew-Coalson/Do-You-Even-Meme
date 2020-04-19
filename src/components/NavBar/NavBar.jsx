import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  handleSignupClick = () => {
    this.props.setForm("signup");
    this.props.toggleModal();
  };

  handleLoginClick = () => {
    this.props.setForm("login");
    this.props.toggleModal();
  };

  render() {
    let nav = this.props.user ? (
      <div>
        <Link to="" className="NavBar-link" onClick={this.props.handleLogout}>
          LOG OUT
        </Link>
      </div>
    ) : (
      <div>
        <Link to="" className="NavBar-link" onClick={this.handleLoginClick}>
          LOG IN
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="" className="NavBar-link" onClick={this.handleSignupClick}>
          SIGN UP
        </Link>
      </div>
    );

    return (
      <div className="NavBar">
        <h1 className="title">Do You Even Meme</h1>
        {nav}
      </div>
    );
  }
}

export default NavBar;
