import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "../MainPage/MainPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import CreatePage from "../CreatePage/CreatePage";

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
            render={() => (
              <MainPage
                handleLogout={this.handleLogout}
                user={this.state.user}
                memes={this.state.memes}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/create"
            render={(props) =>
              userService.getUser() ? (
                <CreatePage {...props} handleLogout={this.handleLogout} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
