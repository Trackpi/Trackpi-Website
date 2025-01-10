import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/connectButton.css';
import Whatsapp from '../images/whatsapp.svg';
import signal from '../images/signal.svg';
import hand from '../images/hand.svg';
import bot from '../images/bot.svg';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { TbMessageChatbot } from 'react-icons/tb';
import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

function ConnectButtons() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const chatboxRef = useRef(null);

  // Toggle chatbox
  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  // Close chatbox on outside click
  const handleClickOutside = (event) => {
    if (chatboxRef.current && !chatboxRef.current.contains(event.target)) {
      setIsChatboxOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <div
          data-tooltip-id="bot-tooltip"
          data-tooltip-content="Bot"
          data-tooltip-place="left"
          className="button"
          onClick={toggleChatbox}
        >
          <div className="icons">
            <img src={bot} alt="Bot" />
          </div>
        </div>
      </div>

      {/* Chatbox */}
      {isChatboxOpen && (
        <div
          ref={chatboxRef}
          className="chatbox relative bg-white rounded-lg shadow-lg w-80 py-4 mx-auto flex flex-col items-center"
        >
          {/* Chatbot Icon */}
          <div className="absolute -top-6 bg-white rounded-full p-2 shadow-md">
            <TbMessageChatbot color="#419129" className="w-12 h-12" />
          </div>

          {/* Chatbox Content */}
          <div className="mt-8 text-center">
            <h4 className="text-lg font-bold text-black">
              Hi there! How can we assist you?
            </h4>
            <p className="flex items-center justify-center mt-2 text-black">
              <IoCallSharp color="#419129" size={20} className="mr-2" />
              Contact: +1 234 567 890
            </p>
            <p className="flex items-center justify-center mt-2 text-black">
              <MdEmail color="#419129" size={20} className="mr-2" />
              Email: support@example.com
            </p>
          </div>

          {/* Chatbox Tail */}
          {/* <div className="absolute bottom-0 left-6 w-6 h-6 bg-white rotate-45 transform translate-y-1 shadow-lg"></div> */}
        </div>
      )}

      <Tooltip id="signal-tooltip" />
      <Tooltip id="whatsapp-tooltip" />
      <Tooltip id="connectus-tooltip" />
      <Tooltip id="bot-tooltip" />
    </>
  );
}

export default ConnectButtons;
