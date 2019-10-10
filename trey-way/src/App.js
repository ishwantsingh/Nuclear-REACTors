import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Headbar from "./components/layout/Headbar";
import Dasboard from "./components/layout/Dashboard";
import MetroHome from "./components/metro/MetroHome";
import AppHome from "./components/layout/AppHome";
import RoadHome from "./components/road/RoadHome";
import { Login } from "./components/layout/Login";
import User from "./components/user/User";

class App extends Component {
  render() {
    const { auth, profile } = this.props;
    return (
      <Router>
        <Headbar />
        <div>
          <Route
            exact
            path="/"
            render={props => <Dasboard {...props} auth={auth} />}
          />
          <Route
            path="/apphome"
            render={props => <AppHome {...props} auth={auth} />}
          />
          <Route
            path="/road"
            render={props => <RoadHome {...props} auth={auth} />}
          />
          <Route
            path="/metro"
            render={props => <MetroHome {...props} auth={auth} />}
          />
          <Route
            path="/user"
            render={props => <User {...props} auth={auth} profile={profile} />}
          />
          <Switch>
            <Route
              path="/login"
              render={props => <Login {...props} auth={auth} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
