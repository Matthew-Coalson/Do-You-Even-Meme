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
  };

  handleClick = (form) => {
    this.setState({ form: form });
    this.toggleModal();
  };

  toggleModal = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };

  render() {
    return (
      <div className="MainPage">
        <Modal
          show={this.state.show}
          toggleModal={this.toggleModal}
          form={this.state.form}
        />
        <NavBar
          user={this.props.user}
          handleLogout={this.props.handleLogout}
          handleClick={this.handleClick}
        />
        {this.props.memes
          .filter((meme) => meme.box_count <= 2)
          .map((meme) => (
            <div key={meme.id} className="index-memes">
              <Link
                to={{
                  pathname: "/create",
                  state: {
                    meme: meme,
                  },
                }}
              >
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
