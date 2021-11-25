import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav.js';
import Story from './Story';
import Feed from './Feed';
import Side from './Side';

import './Main.scss';

function Main() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(feedData => {
        setFeedData(feedData);
      });
  }, []);

  return (
    <>
      <Nav />
      <main>
        <div>
          <Story />
          {feedData.map(list => {
            return (
              <Feed
                key={list.id}
                src={list.src}
                userName={list.userName}
                likePeople={list.likePeople}
              />
            );
          })}
        </div>
        <Side />
      </main>
    </>
  );
}

export default Main;
