import React from 'react';
import './StoryUserMeta.scss';
import { STORY_DATA } from './STORY_DATA';

function StoryUserMeta() {
  return (
    <>
      {STORY_DATA.map(stroyData => {
        return (
          <div className="userMeta" key={stroyData.key}>
            <div className="userImgBackground">
              <img src={stroyData.src} alt="img" className="userImg" />
            </div>
            <div className="userName">{stroyData.userName}</div>
          </div>
        );
      })}
    </>
  );
}

export default StoryUserMeta;
