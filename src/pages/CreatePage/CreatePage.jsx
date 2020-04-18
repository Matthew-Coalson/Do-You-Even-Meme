import React, { Component } from "react";
import CreateForm from "../../components/CreateForm/CreateForm";
import "./CreatePage.css";

class CreatePage extends Component {
  state = {
    meme: false,
  };
  handleStateChange = (meme) => {
    this.setState({
      meme: meme,
    });
  };

  render() {
    let create = this.state.meme ? (
      <div className="CreatePage-content">
        <img src={this.state.meme.data.url} alt="New Meme" />
      </div>
    ) : (
      <div className="CreatePage-content">
        <CreateForm
          {...this.props}
          handleStateChange={this.handleStateChange}
        />
      </div>
    );
    return <div className="CreatePage">{create}</div>;
  }
}

export default CreatePage;
