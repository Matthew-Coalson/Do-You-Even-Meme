import React, { Component } from "react";
import memeService from "../../utils/memeService";
import "./CreateForm.css";

class CreateForm extends Component {
  state = {
    template_id: "",
    username: "seeds3",
    password: "Taco95402415",
    text0: "",
    text1: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.props.meme.id, this.state.template_id);
  };
  setId() {
    this.setState({ template_id: this.props.meme.id });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setId();
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
        <img src={this.props.meme.url} alt={this.props.meme.name} />
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
            <div className="btn-create-div">
              <button className="btn-create">Create</button>
              &nbsp;&nbsp;
            </div>
          </div>
        </form>
        <button className="btn-cancel" onClick={this.props.toggleModal}>
          Cancel
        </button>
      </div>
    );
  }
}

export default CreateForm;
