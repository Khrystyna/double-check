import React from 'react';
import PropTypes from 'prop-types';

import './user.css';

const User = ({ user }) => (
  <div className="user">
    {user.name}
  </div>
);

User.propTypes = {
  data: PropTypes.object
};

export default User;