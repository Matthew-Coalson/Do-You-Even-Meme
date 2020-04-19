import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import MainPage from "../MainPage/MainPage";

import userService from "../../utils/userService";
import memeService from "../../utils/memeService";
//import tokenService from "../../utils/tokenService";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      memes: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await memeService.getMemes();
      this.setState({ memes: data.memes });
    } catch (err) {}
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <MainPage
                handleLogout={this.handleLogout}
                user={this.state.user}
                memes={this.state.memes}
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
