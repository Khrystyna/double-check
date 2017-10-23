import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { userSignIn } from "../../actions/user";
import Button from '../../components/button/Button';

import '../../styles/utils.css';
import '../../styles/layouts.css';
import '../../styles/form.css';

export class LoginContainer extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  login(provider) {
    this.props.signUserIn(provider);
  }

  render() {
    return (
      <div className="layout layout--login">
        <header className="layout__header">
          <h1>Welcome</h1>
          <p>Login with your email. We won't use it for spamming. Only to remind you to do self-check ;)</p>
        </header>

        <div>
          <form className="form form--login">
            <input type="email" placeholder="Email Address" name="email" className="form-control form-control__full"/>
            <input type="password" placeholder="Password" name="password" className="form-control form-control__full"/>

            <Button size="large" isFullWidth="true">Login</Button>
          </form>

          <div className="separator text-center">OR</div>

          <div>
            <Button onClick={() => this.login('google')} size="large" isFullWidth="true">Log in with Google</Button>
            <Button onClick={() => this.login('facebook')} size="large" isFullWidth="true">Log in with Facebook</Button>
          </div>
        </div>

        <footer className="layout__footer">
          Doesn't have an account yet? You may signup here.
        </footer>
      </div>
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
    signUserIn: (provider) => dispatch(userSignIn(provider))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

