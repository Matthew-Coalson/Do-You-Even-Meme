import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={props.toggleModal}>Cancel</button>
      </section>
    </div>
  );
};

export default Modal;
