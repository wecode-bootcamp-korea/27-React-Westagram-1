import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <header>
      <nav>
        <div className="logoContainer">
          <img
            className="logo"
            src="/taeyoung/images/header/instagram-brands.svg"
            alt="logo"
          />
          <span className="logoName">Westargram</span>
        </div>

        <form className="inputContainer">
          <input className="mainSearch" type="text" placeholder="검색" />
        </form>

        <div className="userIconContainer">
          <img
            className="compassIcon"
            src="/taeyoung/images/header/compass-regular.svg"
            alt="compass"
          />
          <img
            className="heaertIcon"
            src="/taeyoung/images/header/heart-regular.svg"
            alt="like"
          />
          <img
            className="userIcon"
            src="/taeyoung/images/header/user-regular.svg"
            alt="user"
          />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
