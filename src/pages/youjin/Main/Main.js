import React from 'react';
import './Main.scss';

import MainRight from './MainRight/MainRight';
import Nav from '../../../components/Nav/Nav';
import Feeds from '../Main/Feeds/Feeds';

function MainYoujin() {
  return (
    <div className="mainYoujin">
      <header>
        <Nav />
      </header>
      <main>
        <Feeds />
        <MainRight />
      </main>
    </div>
  );
}

export default MainYoujin;
