import React from 'react';
import Nav from '../../../components/Nav/Nav';
import FeedsContainer from '../Main/FeedsContainer/FeedsContainer';
import RecommendContainer from './RecommendContainer/RecommendContainer';
import './MainYongwoo.scss';

function MainYongwoo() {
  return (
    <div className="mainYongwoo">
      <Nav />
      <div className="main">
        <FeedsContainer />
        <RecommendContainer />
      </div>
    </div>
  );
}

export default MainYongwoo;
