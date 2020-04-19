import React, { Component } from "react";
import CreateForm from "../CreateForm/CreateForm";
import "./Create.css";

class Create extends Component {
  state = {
    meme: false,
  };
  handleStateChange = (meme) => {
    this.setState({
      meme: meme,
    });
  };
  handleCancel = () => {
    this.handleStateChange(false);
    this.props.toggleModal();
  };

  render() {
    let create = this.state.meme ? (
      <div className="Create-content">
        <img src={this.state.meme.data.url} alt="New Meme" />
        <button className="btn-cancel" onClick={this.handleCancel}>
          Cancel
        </button>
      </div>
    ) : (
      <div className="Create-content">
        <CreateForm
          meme={this.props.meme}
          handleStateChange={this.handleStateChange}
          toggleModal={this.props.toggleModal}
        />
      </div>
    );
    return <div className="Create">{create}</div>;
  }
}

export default Create;
