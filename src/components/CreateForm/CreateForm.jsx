import React, { Component } from "react";
import { Link } from "react-router-dom";
import memeService from "../../utils/memeService";

class CreateForm extends Component {
  state = {
    template_id: this.props.location.state.meme.id,
    username: "seeds3",
    password: "Taco95402415",
    text0: "",
    text1: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMeme = await memeService.handleCreateMeme(this.state);
      this.props.handleStateChange(newMeme);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <header className="header-footer">Create Meme</header>
        <img
          src={this.props.location.state.meme.url}
          alt={this.props.location.state.meme.name}
        />
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Field 1"
                value={this.state.text0}
                name="text0"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Field 2"
                value={this.state.text1}
                name="text1"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Create</button>
              &nbsp;&nbsp;
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateForm;
