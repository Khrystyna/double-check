import React, {Component} from 'react';
import { connect } from 'react-redux';
import AlertDay from "../../components/alert-day/AlertDay";
import { withRouter } from 'react-router';

import '../../styles/utils.css';
import '../../styles/layouts.css';

export class HomeContainer extends Component {
  render() {
    return (
      <div className="layout layout--home">
        <AlertDay day={null} user={this.props.user}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.userState.user
  };
};

export default withRouter(connect(mapStateToProps)(HomeContainer));

