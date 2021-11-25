import React from 'react';
import './SideUserMeta.scss';
import { SIDE_DATA } from './SIDE_DATA';

function SideUserMeta() {
  return (
    <>
      {SIDE_DATA.map(sideData => {
        return (
          <div className="recommendPeople" key={sideData.key}>
            <div className="recommendPeopleMeta">
              <div className="recommendPeopleImg">
                <img src={sideData.src} alt="img" />
              </div>

              <span className="otherUser">
                <p className="PeopleName">{sideData.name}</p>
                <p className="PeopleFllow">{sideData.name}님이 팔로우합니다.</p>
              </span>
            </div>

            <button className="fllowBt2">팔로우</button>
          </div>
        );
      })}
    </>
  );
}

export default SideUserMeta;
