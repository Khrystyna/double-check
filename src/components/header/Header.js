import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom'
import Button from '../button/Button';

import '../../styles/utils.css';
import "./Header.css";

export default class Header extends React.Component {
  constructor() {
    super();

    this.renderUserProfileButton = this.renderUserProfileButton.bind(this);
  }

  renderUserProfileButton() {
    return (
      <Link to='/profile'>
        {this.props.user.displayName}
        <img className="avatar" src={this.props.user.photoURL} width={40} height={40} alt="Profile picture"/>
      </Link>
    )
  }

  render() {
    return (
      <header className="Header">
        <h1><Link to='/'>Double Check</Link></h1>
        {
          this.props.user ?  this.renderUserProfileButton() : (<Link className="Button Button--small" to='/login'>Login</Link>)
        }
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object
};