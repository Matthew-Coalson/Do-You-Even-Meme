import React, { Component } from "react";
import "./Login.css";
import userService from "../../utils/userService";

class Login extends Component {
  state = {
    email: "",
    pw: "",
    msg: "",
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
      this.props.toggleModal();
    } catch (err) {
      this.setState({ msg: err.message });
    }
  };

  render() {
    return (
      <div className="Login">
        <header className="header-footer">Log In</header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={this.state.pw}
                name="pw"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <button>Log In</button>
              &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </form>
        <p>{this.state.msg}</p>
        <button className="btn-cancel" onClick={this.props.toggleModal}>
          Cancel
        </button>
      </div>
    );
  }
}

export default Login;
