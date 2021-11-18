import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div class="nav">
      <nav>
        <div className="logoBar">
          <img src="images/youjin/logo.png" alt="로고" />
          <Link to="/" class="logoName">
            westagram
          </Link>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="검색" />
        </div>
        <div className="naviBar">
          <img src="images/youjin/explore.png" alt="나침반" />
          <img src="images/youjin/heart.png" alt="좋아요" />
          <img src="images/youjin/profile.png" alt="프로필" />
        </div>
      </nav>
    </div>
  );
}
export default Nav;
