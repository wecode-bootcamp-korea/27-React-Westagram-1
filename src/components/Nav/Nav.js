import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div class="Nav">
      <nav>
        <div className="logoBar">
          <img src="images/youjin/logo.png" alt="" />
          <div className="logoName">
            <a href="login.html">westagram</a>
          </div>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="검색" />
        </div>
        <div className="naviBar">
          <a href="login.html">
            <img src="images/youjin/explore.png" alt="" />
          </a>
          <a href="login.html">
            <img src="images/youjin/heart.png" alt="" href="" />
          </a>
          <a href="login.html">
            <img src="images/youjin/profile.png" alt="" href="" />
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
