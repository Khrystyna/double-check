import React, {Component} from 'react';
import { connect } from 'react-redux'
import { userNameUpdate } from '../../actions/user';
import User from '../../components/user/User';

export class UserContainer extends Component {
  render() {
    return (
      <User user={this.props.user} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};



export default connect(mapStateToProps)(UserContainer);