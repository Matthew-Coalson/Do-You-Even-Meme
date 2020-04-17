import React from "react";
//import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./MainPage.css";
import memeService from "../../utils/memeService";

const MainPage = (props) => {
  return (
    <div className="MainPage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      {props.memes
        .filter((meme) => meme.box_count <= 2)
        .map((meme) => (
          <div key={meme.id}>
            <img src={meme.url} alt={meme.name} />
            <h1>{meme.name}</h1>
          </div>
        ))}
      <footer className="header-footer">
        <h3>Footer</h3>
      </footer>
    </div>
  );
};

export default MainPage;
