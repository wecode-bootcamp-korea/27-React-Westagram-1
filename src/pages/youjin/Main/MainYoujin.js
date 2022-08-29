import React, { useState, useEffect } from 'react';
import './MainYoujin.scss';

import MainRightYoujin from './MainRight/MainRightYoujin';
import Nav from '../../../components/Nav/Nav';
import FeedsYoujin from './Feeds/FeedsYoujin';

function MainYoujin() {
  const [newFeed, setNewFeed] = useState([]);
  // const addNewFeed = () => setNewFeed([...newFeed, newFeed]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(response => response.json())
      .then(data => setNewFeed(data));
  }, []);

  return (
    <div className="mainYoujin">
      <header>
        <Nav />
      </header>
      <main>
        {newFeed.map(feed => (
          <FeedsYoujin
            key={feed.id}
            name={feed.userName}
            content={feed.content}
            feedImage={feed.feedImage}
            comment={feed.comment}
          />
        ))}
        <MainRightYoujin />
      </main>
    </div>
  );
}

export default MainYoujin;
