import React from 'react';
import './HamMenu.scss';

const HamMenu = ({ setClickMenu, clickMenu }) => {
  let menuClassToggle = clickMenu ? 'open' : '';

  function handleClick() {
    setClickMenu(!clickMenu);
  }

  return (
    <div
      id="nav-icon1"
      className={menuClassToggle}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamMenu;
