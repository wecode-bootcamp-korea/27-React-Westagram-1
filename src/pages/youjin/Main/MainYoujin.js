import React from 'react';
import './MainYoujin.scss';

import MainRightYoujin from './MainRight/MainRightYoujin';
import Nav from '../../../components/Nav/Nav';
import FeedsYoujin from './Feeds/FeedsYoujin';

function MainYoujin() {
  return (
    <div className="mainYoujin">
      <header>
        <Nav />
      </header>
      <main>
        <FeedsYoujin />
        <MainRightYoujin />
      </main>
    </div>
  );
}

export default MainYoujin;
