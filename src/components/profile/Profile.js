import PropTypes from 'prop-types';
import React from 'react';

import Button from '../button/Button';

import "./Profile.css";

export default class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <p>You haven't done self check. Ready to do it now? </p>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object
};