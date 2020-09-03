import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/Routes";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
});

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
