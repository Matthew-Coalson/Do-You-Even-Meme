import React, { Component } from "react";
import SignupForm from "../SignupForm/SignupForm";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div className="Signup">
        <SignupForm
          history={this.props.history}
          handleSignupOrLogin={this.props.handleSignupOrLogin}
          toggleModal={this.props.toggleModal}
          updateMessage={this.updateMessage}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Signup;
