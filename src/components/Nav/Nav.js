import React from 'react';
import './Nav.scss';

function LogoWrap(params) {
  return (
    <article className="logoWrap">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
        alt="로고"
      />
      <div className="columnLine" />
      <h1 className="logo">Westagram</h1>
    </article>
  );
}

function Search() {
  return (
    <article className="search">
      <input type="text" placeholder="검색" />
    </article>
  );
}

function PictogramWrap() {
  return (
    <article className="pictogramWrap">
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
        alt="탐색"
      />
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        alt="하트"
      />
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
        alt="프로필"
      />
    </article>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="navContainer">
        <LogoWrap />
        <Search />
        <PictogramWrap />
      </div>
    </nav>
  );
}

export default Nav;
