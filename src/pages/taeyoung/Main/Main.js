import React from 'react';
import Nav from '../../../components/Nav/Nav.js';
import Story from './Story';
import Feed from './Feed';
import Side from './Side';

import './Main.scss';

function Main() {
  return (
    <>
      <Nav />
      <main>
        <div>
          <Story />
          <Feed />
        </div>
        <Side />
      </main>
    </>
  );
}

export default Main;
