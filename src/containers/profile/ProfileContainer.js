import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { userSignOut } from "../../actions/user";
import Button from '../../components/button/Button';

import '../../styles/utils.css';
import '../../styles/layouts.css';
import Profile from "../../components/profile/Profile";

export class ProfileContainer extends Component {
  render() {
    if (!this.props.user){
      return <Redirect to="/" />; // TODO:: is there better way to handle protected routes?
    }

    return (
      <div className="layout layout--profile">
        <header>
          <h1>Hello!</h1>
        </header>

        <Profile user={this.props.user}/>

        <footer>
          <Button onClick={() => this.props.signUserOut()}>Log out</Button>
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
    signUserOut: () => dispatch(userSignOut())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer));

