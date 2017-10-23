import React from 'react';
import Moment from 'react-moment';
import Button from '../button/Button';
import PropTypes from 'prop-types';

import './AlertDay.css';

const AlertDay = ({day, user}) => {
  day = day || Date.now();

  let welcomeMessage = user ? "Your next self-check is on" : "Today can be your first self-check!";
  let welcomeButton = !user ? <Button size="large">Set a reminder!</Button> : null;

  return (
    <div className="AlertDay">
      <span className="AlertDay__welcome-message">{welcomeMessage}</span>

      <div className="AlertDay__day">
        <Moment format="DD of MMMM">
          {day}
        </Moment>
      </div>
      <div className="AlertDay__hour">
        <Moment format="HH:mm">
          {day}
        </Moment>
      </div>

      {welcomeButton}
    </div>
  )
};

AlertDay.propTypes = {
  day: PropTypes.node,
  user: PropTypes.object
};

export default AlertDay;