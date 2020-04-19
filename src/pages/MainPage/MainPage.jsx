import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Modal from "../../components/Modal/Modal";
import "./MainPage.css";

class MainPage extends Component {
  state = {
    show: false,
    form: "",
    meme: [],
  };

  setForm = (form) => {
    this.setState({ form: form });
  };

  toggleModal = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };

  handleMemeClick = (meme) => {
    this.setForm("create");
    this.toggleModal();
    this.setState({ meme: meme });
  };

  render() {
    return (
      <div className="main-page">
        <Modal
          show={this.state.show}
          toggleModal={this.toggleModal}
          form={this.state.form}
          handleSignupOrLogin={this.props.handleSignupOrLogin}
          history={this.props.history}
          meme={this.state.meme}
          user={this.props.user}
        />
        <NavBar
          user={this.props.user}
          handleLogout={this.props.handleLogout}
          toggleModal={this.toggleModal}
          setForm={this.setForm}
        />
        <br />
        {this.props.memes
          .filter((meme) => meme.box_count <= 2)
          .map((meme) => (
            <div key={meme.id} className="index-memes">
              <Link to="" onClick={() => this.handleMemeClick(meme)}>
                <img
                  src={meme.url}
                  alt={meme.name}
                  className="index-memes-images"
                />
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

export default MainPage;
