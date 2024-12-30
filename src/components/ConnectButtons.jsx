import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/connectButton.css';
import Whatsapp from '../images/whatsapp.svg';
import signal from '../images/signal.svg';
import hand from '../images/hand.svg';
import bot from '../images/bot.svg';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // Make sure to import the CSS

function ConnectButtons() {
  return (
    <>
      <div className="wrapper">
        <NavLink
          data-tooltip-id="signal-tooltip"
          data-tooltip-content="News Updates"
          data-tooltip-place="left"
          to=""
          className="button"
        >
          <div className="icons">
            <img src={signal} alt="Signal" />
          </div>
        </NavLink>
        <NavLink
          data-tooltip-id="whatsapp-tooltip"
          data-tooltip-content="Whatsapp"
          data-tooltip-place="left"
          to="https://wa.me/+918078179646/"
          className="button"
        >
          <div className="icons">
            <img src={Whatsapp} alt="Whatsapp" />
          </div>
        </NavLink>
        <NavLink
          data-tooltip-id="connectus-tooltip"
          data-tooltip-content="Connect Us"
          data-tooltip-place="left"
          to="/connect-us"
          className="button"
        >
          <div className="icons">
            <img src={hand} alt="Connect Us" />
          </div>
        </NavLink>
        <NavLink
          data-tooltip-id="bot-tooltip"
          data-tooltip-content="Bot"
          data-tooltip-place="left"
          to=""
          className="button"
        >
          <div className="icons">
            <img src={bot} alt="Bot" />
          </div>
        </NavLink>
      </div>
      <Tooltip id="signal-tooltip" />
      <Tooltip id="whatsapp-tooltip" />
      <Tooltip id="connectus-tooltip" />
      <Tooltip id="bot-tooltip" />
    </>
  );
}

export default ConnectButtons;
