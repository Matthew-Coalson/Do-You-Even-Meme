import React from "react";
import Signup from "../Signup/Signup";
import Create from "../Create/Create";
import Login from "../Login/Login";
import "./Modal.css";

const Modal = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  let form = "";
  if (props.form === "signup") {
    form = (
      <Signup
        history={props.history}
        handleSignupOrLogin={props.handleSignupOrLogin}
        toggleModal={props.toggleModal}
      />
    );
  } else if (props.form === "login") {
    form = (
      <Login
        history={props.history}
        handleSignupOrLogin={props.handleSignupOrLogin}
        toggleModal={props.toggleModal}
      />
    );
  } else {
    form = props.user ? (
      <Create toggleModal={props.toggleModal} meme={props.meme} />
    ) : (
      <Login
        history={props.history}
        handleSignupOrLogin={props.handleSignupOrLogin}
        toggleModal={props.toggleModal}
      />
    );
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">{form}</section>
    </div>
  );
};

export default Modal;
