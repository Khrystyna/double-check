import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Header from "../components/header/Header";

import HomeContainer from "./home/HomeContainer";
import LoginContainer from "./login/LoginContainer";
import ProfileContainer from "./profile/ProfileContainer";

import { userAuthStatusCheck } from "../actions/user";

import './App.css';
import '../styles/utils.css';


const history = createHistory();

export class App extends Component {
  componentDidMount() {
    this.props.checkUserAuthStatus();
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <main className="App">
          <Header user={this.props.user}/>

          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/login" component={LoginContainer}/>
            <Route exact path="/profile" component={ProfileContainer}/>
            <Redirect path="*" to="/" />
          </Switch>
        </main>
      </ConnectedRouter>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserAuthStatus: () => dispatch(userAuthStatusCheck())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
